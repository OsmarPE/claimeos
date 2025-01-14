'use client'
import Badge from './Badge'
import { BookText, Search } from 'lucide-react'
import { formatDateLong } from '@/lib/utils'
import { useSearchDate } from '@/hooks/useDateCalendar'

export default function BadgesClaimeos() {

    const { date } = useSearchDate()
    
    return (
        <div className='flex items-center gap-4'>
            <Badge variant='black'>
                <BookText width={14} />
                Claimeos
            </Badge>
            <Badge variant='light' className='border border-white/10'>
                <Search width={14} />
                {date ? `Claimeos del ${formatDateLong(date)}` : 'Filtrar por fecha'}
            </Badge>
        </div>
    )
}
