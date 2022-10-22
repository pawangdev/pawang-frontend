import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ children, is_link = false, link, className = "bg-blue-500 hover:bg-blue-600 text-white", ...props }) => {
    return (
        is_link ? <Link to={link} className={`py-2 px-6 text-base font-semibold rounded-full transition-all duration-200 capitalize ${className}`} {...props}>{children}</Link> : <button className={`py-2 px-6 text-base font-semibold rounded-full transition-all duration-200 capitalize ${className}`} {...props}>{children}</button>
    )
}

export default Button