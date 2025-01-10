import React from 'react'

interface props{
    variant?:'purple'|'red'
    children?:React.ReactNode
    className?:string
}

export default function Badge({variant = 'purple', children, className = ''}: props) {
    
    if(variant === 'purple'){
        return (
            <div className={` px-4 py-2 bg-[#9c40ff]/10 rounded-[30px] text-sm text-[#9c40ff] justify-center items-center gap-2.5 inline-flex ${className}`}>
                {children}
            </div>
        )
    }

    if (variant === 'red') {
        return (
            <div className={` px-4 py-2 bg-[#d51a3d]/10 rounded-[30px] text-sm text-[#d51a3d] justify-center items-center gap-2.5 inline-flex ${className}`}>
                {children}
            </div>
        )
    }
}
