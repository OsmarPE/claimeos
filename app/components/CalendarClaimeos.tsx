'use client'
import { Calendar } from '@/components/ui/calendar'
import { useSearchDate } from '@/hooks/useDateCalendar'
export default function CalendarClaimeos() {

    const { date, handleChange } = useSearchDate()

    return (
        <Calendar
            mode="single"
            selected={date}
            className="rounded-md border sticky top-10"
            onDayClick={handleChange}
        />
    )
}
