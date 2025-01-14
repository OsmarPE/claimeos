import React from 'react'

interface props{
    variant?:'purple'|'red'|'black'|'light'
    children?:React.ReactNode
    className?:string
}

export default function Badge({variant = 'purple', children, className = ''}: props) {
    
    if(variant === 'purple'){
        return (
            <div className={` px-5 py-1.5 bg-[#9c40ff]/10 rounded-[30px] text-sm text-[#9c40ff] justify-center items-center gap-2.5 inline-flex ${className}`}>
                {children}
            </div>
        )
    }

    if (variant === 'red') {
        return (
            <div className={` px-5 py-1.5 bg-[#d51a3d]/10 rounded-[30px] text-sm text-[#d51a3d] justify-center items-center gap-2.5 inline-flex ${className}`}>
                {children}
            </div>
        )
    }
    if (variant === 'black') {
        return (
            <div className={`inline-flex gap-2 items-center rounded-full font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 select-none text-foreground badge-outline border-none px-5 py-1.5 text-sm relative z-20 ${className}`}>
                {children}
            </div>
        )
    }
    if (variant === 'light') {
        return (
            <div className={`px-5 py-1.5 bg-white/5 rounded-[30px] text-sm text-white justify-center items-center gap-2.5 inline-flex ${className}`}>
                {children}
            </div>
        )
    }
}
