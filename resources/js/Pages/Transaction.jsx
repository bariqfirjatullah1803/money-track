import React, {useRef, useState} from 'react'
import {Head, useForm} from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {rupiah} from "@/Utils/MoneyFormat.js";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {FaArrowLeftLong} from "react-icons/fa6";
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import SecondaryButton from "@/Components/SecondaryButton.jsx";
import Modal from "@/Components/Modal.jsx";
import {formatDateTime} from "@/Utils/DateFormat.js";

export default function Transaction({auth, transactions, plans}) {
    const [addModal, setAddModal] = useState(false)
    const inputName = useRef();
    const inputDescription = useRef();
    const inputMoney = useRef();
    const inputStatus = useRef();

    const {
        data,
        setData,
        post: store,
        processing,
        reset,
        errors,
    } = useForm({
        name: '',
        description: '',
        money: '',
        status: 'out',
    });

    const showModal = () => {
        setAddModal(true)
    }

    const addTransaction = (e) => {
        e.preventDefault()

        store(route('transaction.store'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => inputName.current.focus(),
            onFinish: () => reset(),
        })
    }

    const closeModal = () => {
        setAddModal(false)
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2
                className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Transaksi</h2>}>
            <Head title="Transaksi"/>

            <div className="py-5 px-2 flex flex-col gap-y-3">
                <div className={'flex justify-between items-center w-full mx-auto sm:px-6 lg:px-8'}>
                    <a href={route('dashboard')}
                       className={'text-sm text-gray-100 flex items-center justify-center gap-1'}><FaArrowLeftLong/> Kembali</a>
                    <PrimaryButton className={'w-fit h-fit'} onClick={showModal}>Tambah</PrimaryButton>
                </div>
                {transactions && transactions.map((item, index) =>
                    <div key={index} className="w-full mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm rounded-lg">
                            <div className={'p-6 flex flex-col gap-1'}>
                                <div className={'flex flex-row items-center justify-between'}>
                                    <div className="text-gray-900 dark:text-gray-100">{item.name}</div>
                                    <div className="text-gray-900 dark:text-gray-100"><span
                                        className={`${(item.status === 'in') ? 'bg-green-400' : 'bg-red-400'} rounded-lg px-3 py-0 me-1`}>{item.status === 'in' ? 'Masuk' : 'Keluar'}</span> {rupiah(item.money)}
                                    </div>
                                </div>
                                <div className={'flex flex-row items-center justify-between'}>
                                    <p className={'dark:text-gray-100 text-sm'}>{item.description}</p>
                                    <p className={'dark:text-gray-100 text-sm'}>{formatDateTime(item.updated_at)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>


            <Modal show={addModal} onClose={closeModal}>
                <form onSubmit={addTransaction} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Tambahkan transaksi kamu
                    </h2>
                    <div className="mt-6">
                        <InputLabel htmlFor="name" value="Password" className="sr-only"/>
                        <TextInput
                            id="name"
                            type="text"
                            name="name"
                            ref={inputName}
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className="mt-1 block w-full"
                            placeholder="Nama transaksi"/>
                        <InputError message={errors.name} className="mt-2"/>
                    </div>
                    <div className="mt-6">
                        <InputLabel htmlFor="description" value="Password" className="sr-only"/>
                        <textarea
                            id="description"
                            name="description"
                            ref={inputDescription}
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm "
                            placeholder="Deskripsi transaksi"
                        />
                        <InputError message={errors.description} className="mt-2"/>
                    </div>
                    <div className="mt-6">
                        <InputLabel htmlFor="money" value="Password" className="sr-only"/>
                        <TextInput
                            id="money"
                            type="text"
                            min={0}
                            name="money"
                            ref={inputMoney}
                            value={data.money}
                            onChange={(e) => setData('money', e.target.value)}
                            className="mt-1 block w-full"
                            placeholder="Jumlah uang"/>
                        <InputError message={errors.money} className="mt-2"/>
                    </div>
                    <div className="mt-6">
                        <InputLabel htmlFor="status" value="In" className="sr-only"/>
                        <select
                            id="status"
                            name="money"
                            ref={inputStatus}
                            value={data.status}
                            onChange={(e) => setData('status', e.target.value)}
                            className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                        >
                            <option value="out">Keluar</option>
                            <option value="in">Masuk</option>
                        </select>
                        <InputError message={errors.status} className="mt-2"/>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>

                        <PrimaryButton className="ms-3" disabled={processing}>
                            Tambahkan
                        </PrimaryButton>
                    </div>
                </form>
            </Modal>
        </AuthenticatedLayout>
    )
}
