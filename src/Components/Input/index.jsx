import React from 'react'

export const Label = ({ htmlFor, className, children }) => {
    return (
        <label htmlFor={htmlFor} className={`text-sm text-muted ${className}`}>{children}</label>
    )
}

export const Input = ({ type, name, className, placeholder, value, onChange }) => {
    return (
        <input type={type} id={name} name={name} value={value} onChange={onChange} className={`block border w-full rounded-lg p-2 mt-1 ${className}`} placeholder={placeholder} />
    )
}
