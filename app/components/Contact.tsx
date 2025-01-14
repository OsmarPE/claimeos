'use client'
import { CircleAlert, Send, SendIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CalendarInput } from "./CalendarInput";
import { Textarea } from "@/components/ui/textarea";

export default function Contact({children}:{children:React.ReactNode}) {

    // const [date, setDate] = useState<Date | undefined>(new Date())
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="text-gray-400 flex items-center gap-2 mb-6 text-sm">
                <CircleAlert width={20} height={20} />
                <p> Tienes algo que claimear? <Button onClick={() => setOpen(true)} variant={'link'} className="px-1">Contactame</Button> </p>
            </div>
            <Dialog open={open} onOpenChange={() => setOpen(false)}>
                <DialogContent className=" w-[90%]">
                    <DialogHeader>
                        <DialogTitle className="text-left">🚀 Contactame</DialogTitle>
                        <DialogDescription className="text-left">
                            Proporciona la informacion sobre el claimeo llenando los campos del formulario
                        </DialogDescription>
                    </DialogHeader>
                    <div>
                        {children}
                    </div>
                </DialogContent>
            </Dialog>

        </>
    )
}
