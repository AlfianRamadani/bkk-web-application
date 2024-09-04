import React from 'react'
import { Link } from 'react-router-dom'

export default function BreadCrumb({ title ,pageNow }) {
    return (
        <section className=" bg-accent w-full text-background ">
            <div className="max-w-7xl h-32 md:h-40 mx-auto flex flex-col justify-center gap-2 px-4 md:px-0">
                <h1 className="text-2xl md:text-5xl italic font-semibold  tracking-wide">{title}</h1>
                <ul className="flex gap-3 text-md">
                    <li>
                        <Link className="underline" to="/">Home</Link>
                    </li>
                    <li>
                        /
                    </li>
                    <li>
                        {pageNow}
                    </li>
                </ul>
            </div>
        </section>
    )
}
