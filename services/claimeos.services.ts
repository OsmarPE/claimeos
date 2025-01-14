import { supabase } from "@/types/db"


export const getClaimeos = async () => {
    try {
        let { data, error } = await supabase.from('claimeo').select('text, clip, date, description, user(*)')
      
        if (error) {
            console.log(error)
        }

        return data
        
    } catch (error) {
        console.log(error)
    }
}

export const getClaimeosByDate = async (date: Date) => {
    try {
        let { data, error } = await supabase.from('claimeo').select('text, clip, date, description, user(*)').eq('date', date.toLocaleDateString('en-US').replace(/\//g, '-'))
      
        if (error) {
            console.log(error)
        }

        return data
        
    } catch (error) {
        console.log(error)
    }     
}

