import React from 'react'
import {rupiah} from "@/Utils/MoneyFormat.js";

export default function Card({children, className, ...props}) {
    return (
        <div className="w-full mx-auto" {...props}>
            <div className={'bg-white dark:bg-gray-800 overflow-hidden shadow-sm rounded-lg ' + className}>
                {children}
            </div>
        </div>
    )
}
