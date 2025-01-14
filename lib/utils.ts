import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses comienzan en 0
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}


export function  formatDateLong(date: Date) {
  return date.toLocaleDateString('es-MX',{
    day:'2-digit',
    month:'long',
    year:'numeric'
} )
  
}

export function formatDateShort(date: Date) {
  return date.toLocaleDateString('es-MX',{
    day:'2-digit',
    month:'2-digit',
    year:'numeric'
  }).replace(/\//g, '-')
}

export const initialStateClaimeo = {
  error: {
      text: {
          message: '',
          value:''
      },
      description: {
          message: '',
          value:''
      },
      clip: {
          message: '',
          value:''
      },
      date: {
          message: '',
          value:''
      },
      streamer: {
          message: '',
          value:''
      }
  },
  success: false
}