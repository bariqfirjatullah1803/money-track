<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [\App\Http\Controllers\Auth\AuthenticatedSessionController::class, 'create'])
    ->name('login')->middleware('guest');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::resource('/plan', \App\Http\Controllers\PlanController::class)->except(['create', 'edit', 'show']);
    Route::resource('/transaction', \App\Http\Controllers\TransactionController::class)->except(['create', 'edit', 'show']);
});


require __DIR__ . '/auth.php';
