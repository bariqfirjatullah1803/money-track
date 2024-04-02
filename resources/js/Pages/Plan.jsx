import React, {useRef, useState} from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, useForm} from "@inertiajs/react";
import {rupiah} from "@/Utils/MoneyFormat.js";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {FaArrowLeftLong} from "react-icons/fa6";
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import SecondaryButton from "@/Components/SecondaryButton.jsx";
import DangerButton from "@/Components/DangerButton.jsx";
import Modal from "@/Components/Modal.jsx";
import {formatDateTime} from "@/Utils/DateFormat.js";

export default function Plan({auth, plans}) {
    const [addModal, setAddModal] = useState(false)
    const inputName = useRef();
    const inputDescription = useRef();
    const inputMoney = useRef();

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
    });
    const showModal = () => {
        setAddModal(true)
    }

    const addPlan = (e) => {
        e.preventDefault()

        store(route('plan.store'), {
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
                className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Plan</h2>}>
            <Head title="Plan"/>

            <div className="py-5 px-2 flex flex-col gap-y-3">
                <div className={'w-full mx-auto sm:px-6 lg:px-8 flex justify-between items-center'}>
                    <a href={route('dashboard')}
                       className={'text-sm text-gray-100 flex items-center justify-center gap-1'}><FaArrowLeftLong/> Kembali</a>
                    <PrimaryButton className={'w-fit h-fit'} onClick={showModal}>Tambah</PrimaryButton>
                </div>
                {plans && plans.map((item, index) =>
                    <div key={index} className="w-full mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm rounded-lg">
                            <div className={'p-6 flex flex-col gap-1'}>
                                <div className={'flex flex-row items-center justify-between'}>
                                    <div className="text-gray-900 dark:text-gray-100">{item.name}</div>
                                    <div className="text-gray-900 dark:text-gray-100">{rupiah(item.money)}</div>
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
                <form onSubmit={addPlan} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Tambahkan plan kamu
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
                            placeholder="Nama plan"/>
                        <InputError message={errors.name} className="mt-2"/>
                    </div>
                    <div className="mt-6">
                        <InputLabel htmlFor="description" value="Password" className="sr-only"/>
                        <TextInput
                            id="description"
                            type="text"
                            name="description"
                            ref={inputDescription}
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            className="mt-1 block w-full"
                            placeholder="Deskripsi plan"/>
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
