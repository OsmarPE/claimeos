import React from 'react'
import { Calendar, Twitch, Type, Video } from 'lucide-react'
import Badge from './Badge'
import { Button } from '@/components/ui/button'
export default function ClaimeoItem() {
  return (
    <article className="p-6 bg-[#121212]/50 rounded-lg border border-stone-800" >
    <div className="flex items-start justify-between">
        <div className="w-14 h-14 flex items-center justify-center text-neutral-600 bg-neutral-500/10 rounded-full border border-neutral-600" >
            <Type />
        </div>
        <Badge variant='red'>
           <Calendar width={16} /> 03 de Enero de 2023
        </Badge>
    </div>
    <h3 className="text-white text-xl font-medium  mt-4 mb-2">Palabra Nueva</h3>
    <p className=" text-neutral-500 text-sm ">Jugando Fortnite a las 1:29:35 del directo "PRIMER DIA DEL ANNO" elded Claimeo el "!Callate perra¡" despues de decirle esta frase a Charlitoss </p>
    <div className='mt-6 flex items-center gap-2 justify-between'>
        <Badge variant='purple'>
            <Twitch width={16}/> JuanGuarnizo
        </Badge>
        <Button  size={'icon'}>
        <Video />
        </Button>
    </div>
</article>
  )
}
