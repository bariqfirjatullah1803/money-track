import React from 'react'
import {Head} from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {rupiah} from "@/Utils/MoneyFormat.js";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";

export default function Transaction({auth}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2
                className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Transaksi</h2>}>
            <Head title="Transaksi"/>

            <div className="py-5 px-2 flex flex-col gap-y-3">
                <div className={'flex justify-end w-full mx-auto sm:px-6 lg:px-8'}>
                    <PrimaryButton className={'w-fit h-fit'}>Tambah</PrimaryButton>
                </div>
                <div className="w-full mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm rounded-lg">
                        <div className={'p-6 flex flex-row gap-3 items-center justify-between'}>
                            <div className={'row row-col'}>
                                <div className="text-gray-900 dark:text-gray-100">Belanja</div>
                                <div className="text-gray-900 dark:text-gray-100 text-xs">12 - 04 - 2024</div>
                            </div>
                            <div className="text-gray-900 dark:text-gray-100">{rupiah(300000)}</div>
                        </div>
                    </div>
                </div>
                <div className="w-full mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm rounded-lg">
                        <div className={'p-6 flex flex-row gap-3 items-center justify-between'}>
                            <div className={'row row-col'}>
                                <div className="text-gray-900 dark:text-gray-100">Belanja</div>
                                <div className="text-gray-900 dark:text-gray-100 text-xs">12 - 04 - 2024</div>
                            </div>
                            <div className="text-gray-900 dark:text-gray-100">{rupiah(300000)}</div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
