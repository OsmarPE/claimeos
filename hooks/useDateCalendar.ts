import { formatDate } from "@/lib/utils"
import { useRouter, useSearchParams } from "next/navigation"

export const useSearchDate  = () => {

     const search = useSearchParams()
        const date = search.get('date') ? new Date(search.get('date')!) : undefined
        const router = useRouter()
        const handleChange = (newDate: Date) => {
            const newSearch = new URLSearchParams(search)
            newSearch.set('date', formatDate(newDate))
            router.push(`?${decodeURIComponent(newSearch.toString())}`,{scroll:false})
        }
    return{
        date,
        handleChange
    }

}