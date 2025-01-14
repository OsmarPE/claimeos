import React from 'react'

export default function LinesBackground() {
    return (
        <>

            <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-20 blur-[100px]"></div></div>

            <div className="size-72  bg-primary/30 blur-[140px] absolute top-20 right-32"> </div>
            <div className="size-96  bg-primary/15 blur-[100px] absolute top-[28rem] -left-[14rem]"> </div>
            <div className="size-96 -z-10 bg-primary/15 blur-[100px] absolute -bottom-[28rem] right-[4rem]"> </div>
        </>
    )
}
