<?php

namespace App\Http\Controllers;

use App\Http\Requests\TransactionRequest;
use App\Models\Plan;
use App\Models\Transaction;
use App\Models\Wallet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): \Inertia\Response
    {
        $user = Auth::user();

        $transactions = $user->transactions()
            ->whereMonth('updated_at', now()->month)
            ->whereYear('updated_at', now()->year)
            ->orderBy('updated_at', 'desc')
            ->get();

        $plans = Plan::query()->whereMonth('updated_at', now()->month)
            ->whereYear('updated_at', now()->year)
            ->get();

        return Inertia::render('Transaction', [
            'transactions' => $transactions,
            'plans' => $plans
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TransactionRequest $request): \Illuminate\Http\RedirectResponse
    {
        $user = Auth::user();
        $userId = $user->id;

        $request->merge(['user_id' => $userId]);

        if ($request->input('status') == 'in') {
            $user->wallet()->update([
                'wallet' => $user->wallet->wallet + $request->input('money')
            ]);
        }

        if ($request->input('status') == 'out') {
            if ($user->wallet->wallet <= 0 || $user->wallet->wallet < $request->input('money')) {
                return Redirect::route('transaction.index')->with('error', 'Jumlah saldo tidak mencukupi!');
            }
            $user->wallet()->update([
                'wallet' => $user->wallet->wallet - $request->input('money')
            ]);
        }

        Transaction::query()->create($request->all());

        return Redirect::route('transaction.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Transaction $transaction)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Transaction $transaction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TransactionRequest $request, Transaction $transaction)
    {
        $user = Auth::user();
        $userId = $user->id;

        $request->merge(['user_id' => $userId]);

        if ($request->input('status') == 'in') {
            $user->wallet()->update([
                'wallet' => $user->wallet->wallet + $request->input('money')
            ]);
        }

        if ($request->input('status') == 'out') {
            if ($user->wallet->wallet <= 0 || $user->wallet->wallet < $request->input('money')) {
                return Redirect::route('transaction.index')->with('error', 'Jumlah saldo tidak mencukupi!');
            }
            $user->wallet()->update([
                'wallet' => $user->wallet->wallet - $request->input('money')
            ]);
        }

        $transaction->update($request->all());

        return Redirect::route('transaction.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Transaction $transaction)
    {
        $user = Auth::user();
        $userId = $user->id;

        if ($transaction->status == 'in') $user->wallet()->update(['wallet' => $user->wallet->wallet - $transaction->money]);

        if ($transaction->status == 'out') $user->wallet()->update(['wallet' => $user->wallet->wallet + $transaction->money]);

        $transaction->delete();

        return Redirect::route('transaction.index');
    }
}
