import React from 'react'

export default function ErrorText({ error, key }: Readonly<{ error: any, key?: string }>) {
    return (
        <p className=" text-p-sm text-red-500 mt-1 ml-2" key={key}>
            {error}
        </p>
    )
}
