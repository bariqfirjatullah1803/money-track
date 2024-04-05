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
import Card from "@/Components/Card.jsx";
import DangerButton from "@/Components/DangerButton.jsx";

export default function Transaction({auth, transactions, plans}) {
    const [addModal, setAddModal] = useState(false)
    const [editModal, setEditModal] = useState(false)

    const inputName = useRef();
    const inputDescription = useRef();
    const inputMoney = useRef();
    const inputStatus = useRef();

    const {
        data: addData,
        setData: addSetData,
        post: store,
        processing: addProcessing,
        reset: addReset,
        errors: addErrors,
    } = useForm({
        name: '',
        description: '',
        money: '',
        status: 'out',
    });

    const {
        data: editData,
        setData: editSetData,
        put: update,
        delete: destroy,
        processing: editProcessing,
        reset: editReset,
        errors: editErrors,
    } = useForm({
        id: '',
        name: '',
        description: '',
        money: '',
        status: 'out',
    });

    const showModal = (modal = 'add', data = null) => {
        if (modal === 'add') setAddModal(true)

        if (modal === 'edit') {
            editSetData(data)
            setEditModal(true)
        }
    }

    const closeModal = (modal = 'add') => {
        if (modal === 'add') setAddModal(false)

        if (modal === 'edit') setEditModal(false)
    }

    const addTransaction = (e) => {
        e.preventDefault()

        store(route('transaction.store'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => inputName.current.focus(),
            onFinish: () => addReset(),
        })
    }

    const editTransaction = (e, id) => {
        e.preventDefault()

        update(route('transaction.update', id), {
            preserveScroll: true,
            onSuccess: () => closeModal('edit'),
            onError: () => inputName.current.focus(),
            onFinish: () => editReset(),
        })
    }

    const deleteTransaction = (e, id) => {
        e.preventDefault()

        destroy(route('transaction.destroy', id), {
            onSuccess: () => closeModal('edit'),
            onError: () => inputName.current.focus(),
            onFinish: () => closeModal('edit')
        })
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2
                className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Transaksi</h2>}>
            <Head title="Transaksi"/>

            <div className="py-5 flex flex-col gap-y-3">
                <div className={'flex justify-between items-center w-full mx-auto'}>
                    <a href={route('dashboard')}
                       className={'text-sm text-gray-100 flex items-center justify-center gap-1'}><FaArrowLeftLong/> Kembali</a>
                    <PrimaryButton className={'w-fit h-fit'} onClick={() => showModal('add')}>Tambah</PrimaryButton>
                </div>
                {transactions && transactions.map((item, index) =>
                    <Card key={index} className={'cursor-pointer'} onClick={() => showModal('edit', item)}>
                        <div className={'p-6 flex flex-col gap-1'}>
                            <div className={'grid grid-cols-2 items-center justify-between'}>
                                <div className={'flex flex-col gap-1'}>
                                    <div
                                        className="text-gray-900 dark:text-gray-100 line-clamp-1 text-2xl font-bold">{item.name}</div>
                                    <p className={'dark:text-gray-100 text-lg line-clamp-2 '}>{item.description}</p>
                                </div>
                                <div className={'flex flex-col gap-1 items-end'}>
                                    <span
                                        className={`${(item.status === 'in') ? 'bg-green-400' : 'bg-red-400'} rounded-lg px-3 py-0 me-1 text-white`}>{item.status === 'in' ? 'Masuk' : 'Keluar'}</span>
                                    <p className="text-gray-900 dark:text-gray-100"> {rupiah(item.money)}</p>
                                    <p className={'dark:text-gray-100 text-sm'}>{formatDateTime(item.updated_at)}</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                )}
            </div>


            <Modal show={addModal} onClose={() => closeModal('add')}>
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
                            value={addData.name}
                            onChange={(e) => addSetData('name', e.target.value)}
                            className="mt-1 block w-full"
                            placeholder="Nama transaksi"/>
                        <InputError message={addErrors.name} className="mt-2"/>
                    </div>
                    <div className="mt-6">
                        <InputLabel htmlFor="description" value="Password" className="sr-only"/>
                        <textarea
                            id="description"
                            name="description"
                            ref={inputDescription}
                            value={addData.description}
                            onChange={(e) => addSetData('description', e.target.value)}
                            className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm "
                            placeholder="Deskripsi transaksi"
                        />
                        <InputError message={addErrors.description} className="mt-2"/>
                    </div>
                    <div className="mt-6">
                        <InputLabel htmlFor="money" value="Password" className="sr-only"/>
                        <TextInput
                            id="money"
                            type="text"
                            min={0}
                            name="money"
                            ref={inputMoney}
                            value={addData.money}
                            onChange={(e) => addSetData('money', e.target.value)}
                            className="mt-1 block w-full"
                            placeholder="Jumlah uang"/>
                        <InputError message={addErrors.money} className="mt-2"/>
                    </div>
                    <div className="mt-6">
                        <InputLabel htmlFor="status" value="In" className="sr-only"/>
                        <select
                            id="status"
                            name="money"
                            ref={inputStatus}
                            value={addData.status}
                            onChange={(e) => addSetData('status', e.target.value)}
                            className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                        >
                            <option value="out">Keluar</option>
                            <option value="in">Masuk</option>
                        </select>
                        <InputError message={addErrors.status} className="mt-2"/>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={() => closeModal('add')}>Cancel</SecondaryButton>

                        <PrimaryButton className="ms-3" disabled={addProcessing}>
                            Tambahkan
                        </PrimaryButton>
                    </div>
                </form>
            </Modal>

            <Modal show={editModal} onClose={() => closeModal('edit')}>
                <form className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Edit transaksi kamu
                    </h2>
                    <div className="mt-6">
                        <InputLabel htmlFor="name" value="Password" className="sr-only"/>
                        <TextInput
                            id="name"
                            type="text"
                            name="name"
                            ref={inputName}
                            value={editData.name}
                            onChange={(e) => editSetData('name', e.target.value)}
                            className="mt-1 block w-full"
                            placeholder="Nama transaksi"
                            readOnly={true}
                        />
                        <InputError message={editErrors.name} className="mt-2"/>
                    </div>
                    <div className="mt-6">
                        <InputLabel htmlFor="description" value="Password" className="sr-only"/>
                        <textarea
                            id="description"
                            name="description"
                            ref={inputDescription}
                            value={editData.description}
                            onChange={(e) => editSetData('description', e.target.value)}
                            className="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm "
                            placeholder="Deskripsi transaksi"
                            readOnly={true}
                        />
                        <InputError message={editErrors.description} className="mt-2"/>
                    </div>
                    <div className="mt-6">
                        <InputLabel htmlFor="money" value="Password" className="sr-only"/>
                        <TextInput
                            id="money"
                            type="text"
                            min={0}
                            name="money"
                            ref={inputMoney}
                            value={editData.money}
                            onChange={(e) => editSetData('money', e.target.value)}
                            className="mt-1 block w-full"
                            placeholder="Jumlah uang"
                            readOnly={true}
                        />
                        <InputError message={editErrors.money} className="mt-2"/>
                    </div>
                    <div className="mt-6">
                        <InputLabel htmlFor="status" value="In" className="sr-only"/>
                        <TextInput
                            id="money"
                            type="text"
                            min={0}
                            name="money"
                            ref={inputStatus}
                            value={editData.status}
                            onChange={(e) => editSetData('status', e.target.value)}
                            className="mt-1 block w-full"
                            readOnly={true}
                        />
                        <InputError message={editErrors.status} className="mt-2"/>
                    </div>

                    <div className="mt-6 flex justify-between">
                        <DangerButton onClick={(e) => deleteTransaction(e, editData.id)}>
                            Delete
                        </DangerButton>

                        <div>
                            <SecondaryButton onClick={() => closeModal('edit')}>Cancel</SecondaryButton>
                            {/*<PrimaryButton className="ms-3" disabled={editProcessing}>*/}
                            {/*    Edit*/}
                            {/*</PrimaryButton>*/}
                        </div>
                    </div>
                </form>
            </Modal>
        </AuthenticatedLayout>
    )
}
