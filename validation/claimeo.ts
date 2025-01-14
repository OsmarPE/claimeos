import { z } from "zod";
export const validationClaimeo = z.object({ 
    text:z.string().min(1,{message:'Ingrese un claimeo'}),
    description:z.string().min(1,{message:'Ingrese una descripcion'}),
    clip:z.string().min(1,{message:'Ingrese un link valido'}),
    date:z.string().min(1,{message:'Ingrese una fecha'}),
    streamer:z.string().min(1,{message:'Ingrese un streamer'}),
    flag:z.string().optional(),
});