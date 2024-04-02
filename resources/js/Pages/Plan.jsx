import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from "@inertiajs/react";
import {rupiah} from "@/Utils/MoneyFormat.js";
import PrimaryButton from "@/Components/PrimaryButton.jsx";

export default function Plan({auth}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2
                className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Plan</h2>}>
            <Head title="Plan"/>

            <div className="py-5 px-2 flex flex-col gap-y-3">
                <div className={'flex justify-end'}>
                    <PrimaryButton className={'w-fit h-fit'}>Tambah</PrimaryButton>
                </div>
                <div className="w-full mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm rounded-lg">
                        <div className={'p-6 flex flex-row gap-3 items-center justify-between'}>
                            <div className="text-gray-900 dark:text-gray-100">Belanja</div>
                            <div className="text-gray-900 dark:text-gray-100">{rupiah(300000)}</div>
                        </div>
                    </div>
                </div>
                <div className="w-full mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm rounded-lg">
                        <div className={'p-6 flex flex-row gap-3 items-center justify-between'}>
                            <div className="text-gray-900 dark:text-gray-100">Listrik</div>
                            <div className="text-gray-900 dark:text-gray-100">{rupiah(300000)}</div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
