import React from 'react'

export default function LinesBackground() {
    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full  bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
            <div className="size-80  bg-primary/20 blur-[140px]  absolute"> </div>
            <div className="size-72  bg-primary/30 blur-[140px] absolute top-20 right-32"> </div>
            <div className="size-72  bg-primary/10 blur-[100px] absolute top-[28rem] right-[26rem]"> </div>
        </>
    )
}
