import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {rupiah} from "@/Utils/MoneyFormat.js";
import Card from "@/Components/Card.jsx";

export default function Dashboard({auth}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard"/>

            <div className="py-5 flex flex-col gap-y-3">
                <Card>
                    <div className="p-6 text-gray-900 dark:text-gray-100">Saldo kamu
                        sebesar {rupiah(auth.user.wallet?.wallet ?? 0)}</div>
                </Card>
                <Card>
                    <div className={'p-6 flex flex-row gap-3 items-center justify-between'}>
                        <div className="text-gray-900 dark:text-gray-100">{auth.user.plans.length} Planing</div>
                        <Link href={route('plan.index')}><PrimaryButton
                            className={'w-fit h-fit'}>Lihat</PrimaryButton></Link>
                    </div>
                </Card>
                <Card>
                    <div className={'p-6 flex flex-row gap-3 items-center justify-between'}>
                        <div
                            className="text-gray-900 dark:text-gray-100">{auth.user.transactions.length} Transaksi
                        </div>
                        <Link href={route('transaction.index')}><PrimaryButton
                            className={'w-fit h-fit'}>Lihat</PrimaryButton></Link>
                    </div>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}
