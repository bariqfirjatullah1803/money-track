import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {rupiah} from "@/Utils/MoneyFormat.js";

export default function Dashboard({auth}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard"/>

            <div className="py-5 px-2 flex flex-col gap-y-3">
                <div className="w-full mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">Saldo kamu sebesar {rupiah(auth.user.wallet?.wallet ?? 0)}</div>
                    </div>
                </div>
                <div className="w-full mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm rounded-lg">
                        <div className={'p-6 flex flex-row gap-3 items-center justify-between'}>
                            <div className="text-gray-900 dark:text-gray-100">{auth.user.plans.length} Planing</div>
                            <Link href={route('plan.index')}><PrimaryButton
                                className={'w-fit h-fit'}>Lihat</PrimaryButton></Link>
                        </div>
                    </div>
                </div>
                <div className="w-full mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm rounded-lg">
                        <div className={'p-6 flex flex-row gap-3 items-center justify-between'}>
                            <div className="text-gray-900 dark:text-gray-100">{auth.user.transactions.length} Transaksi</div>
                            <Link href={route('transaction.index')}><PrimaryButton
                                className={'w-fit h-fit'}>Lihat</PrimaryButton></Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
