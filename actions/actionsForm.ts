'use server'

import { ClaimeoError, ClaimeoType } from "@/type";
import { validationClaimeo } from "@/validation/claimeo";
import { redirect } from "next/navigation";

export async function actionClaimeos(previousState: unknown, formData: FormData) {

    const data = Object.fromEntries(formData.entries()) as unknown as ClaimeoType;
    const validation = validationClaimeo.safeParse(data);

    let error = {
        text: {
            message: '',
            value: ''
        },
        description: {
            message: '',
            value: ''
        },
        clip: {
            message: '',
            value: ''
        },
        date: {
            message: '',
            value: ''
        },
        streamer: {
            message: '',
            value: ''
        }
    }
    

    for (const key in error) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            error[key as keyof ClaimeoError].value = data[key as keyof ClaimeoType]
        }   
    }


    if (validation.error) {
        const  {fieldErrors} = validation.error.flatten()
        for (const key in fieldErrors) {
            if (Object.prototype.hasOwnProperty.call(fieldErrors, key)) {
                error[key as keyof ClaimeoError].message = fieldErrors[key as keyof ClaimeoError]?.[0] ?? ''
            }
        }

        return {
            error,
            success: ''
        }
    }

    redirect('/success')

    return {
        error,
        success: true
    }
}