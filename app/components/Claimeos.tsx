import ClaimeoItem from './ClaimeoItem'
import {  Filter, Trash } from 'lucide-react'
import { Button } from '@/components/ui/button'
import CalendarClaimeos from './CalendarClaimeos'
import BadgesClaimeos from './BadgesClaimeos'
import { getClaimeos, getClaimeosByDate } from '@/services/claimeos.services'
import Link from 'next/link'

export default async function Claimeos({date}:{date:string | undefined}) {

    
    const data = !date ? await getClaimeos() : await getClaimeosByDate(new Date(date))
    
    
    return (
        <div className='grid md:grid-cols-[250px_1fr] gap-10 py-20 items-start'>
            <div>
                <Button className='w-full mb-8'> <Filter /> Filtrar por fecha</Button>
                <CalendarClaimeos />
                {date && <Button variant={'outline'}  className='w-full mt-4' asChild>
                        <Link href={`/`} className='block' scroll={false}>
                            <Trash /> Resetear
                            </Link>
                    </Button>}
            </div>
            <div>
                <BadgesClaimeos />
                <p className='text-white/60 mt-4 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatem ipsum esse tempora in earum, eum cumque labore atque! Exercitationem, alias</p>
                {data?.length === 0 && <p className='text-red-400 mt-4 mb-6'>No hay resultados para esta fecha</p>}
                <div className='mt-6 grid gap-6'>
                    {
                        data?.map((claimeo, index) => {
                            return <ClaimeoItem claimeo={claimeo} key={index} />
                        })
                    }
                    
                </div>
            </div>
        </div>
    )
}
