import React from 'react'

interface IIconActionButton {
    icon: React.ReactNode,
    onClick?: () => void
}
export default function IconButton({ icon, onClick }: Readonly<IIconActionButton>) {
    return (
        <button type='button' onClick={onClick}>{icon}</button>
    )
}
