import React from 'react'
import { Link } from 'react-router-dom'

export const QuickActionButton = ({ link, bgColor, textColor, icon, label }) => {
    return (
        <Link to={link} className={`w-full h-36 rounded-2xl ${bgColor}`}>
            <div className="flex flex-col px-4 py-6 content-between justify-between min-h-full">
                {icon}
                <p className={`text-xs font-medium ${textColor}`}>{label}</p>
            </div>
        </Link>
    )
}
