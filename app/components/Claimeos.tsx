'use client'
import { Calendar } from '@/components/ui/calendar'
import React, { useState } from 'react'
import ClaimeoItem from './ClaimeoItem'
import { BookText } from 'lucide-react'

export default function Claimeos() {

    const [date, setDate] = useState<Date | undefined>(new Date())

    return (
        <div className='grid grid-cols-[250px_1fr] gap-10 py-20 items-start'>
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border sticky top-10"
            />
            <div>
                <div className='inline-flex gap-2 items-center rounded-full font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 select-none text-foreground badge-outline border-none px-5 py-1.5 text-sm relative z-20'>
                <BookText width={14} />
                    Claimeos
                </div>
                <p className='text-white/60 mt-4 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatem ipsum esse tempora in earum, eum cumque labore atque! Exercitationem, alias</p>
                <div className='mt-6 grid gap-6'>
                    <ClaimeoItem />
                    <ClaimeoItem />
                    <ClaimeoItem />
                    <ClaimeoItem />
                </div>
            </div>
        </div>
    )
}
