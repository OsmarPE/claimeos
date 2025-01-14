import React from 'react'
import { Calendar, Twitch, Type, Video } from 'lucide-react'
import Badge from './Badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { formatDateLong } from '@/lib/utils'

interface Props {
    claimeo:  {
        text: string | null;
        clip: string | null;
        date: string | null;
        description: string | null;
        user: {
            created_at: string;
            id: number;
            link: string | null;
            name: string | null;
        } | null
    }
}

export default function ClaimeoItem({ claimeo }: Props) {

    const { text, clip, date, description, user } = claimeo
        
    const formatDate = date ? formatDateLong(new Date(`${date}T00:00:00`)) : ''

    return (
        <article className="p-6 bg-[#121212]/10 backdrop-blur-md rounded-lg border border-stone-800" >
            <div className="flex items-start justify-between">
                <div className="w-14 h-14 flex items-center justify-center text-neutral-600 bg-neutral-500/10 rounded-full border border-neutral-600" >
                    <Type />
                </div>
                <Badge variant='red'>
                    <Calendar width={16} /> {formatDate}
                </Badge>
            </div>
            <h3 className="text-white text-xl font-medium  mt-4 mb-2">{text}</h3>
            <p className=" text-neutral-500 text-sm ">{description}</p>
            <div className='mt-6 flex items-center gap-2 justify-between'>
                <Badge variant='purple'>
                    <Twitch width={16} /> {user?.name}
                </Badge>
                <Button size={'icon'} asChild>
                    <Link href={clip ?? '/'} target='_blank' >
                        <Video />
                    </Link>
                </Button>
            </div>
        </article>
    )
}
