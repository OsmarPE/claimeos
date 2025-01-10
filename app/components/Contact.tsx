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

export default function Contact() {

    const [date, setDate] = useState<Date | undefined>(new Date())
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="text-gray-400 flex items-center gap-2 mb-6 text-sm">
                <CircleAlert width={20} height={20} />
                <p> Tienes algo que decir? <Button onClick={() => setOpen(true)} variant={'link'} className="px-1">Contactame</Button> </p>
            </div>
            <Dialog open={open} onOpenChange={() => setOpen(false)}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>🚀 Contactame</DialogTitle>
                        <DialogDescription>
                            Proporciona la informacion sobre el claimeo llenando los campos del formulario
                        </DialogDescription>
                    </DialogHeader>
                    <form>
                        <div className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Claimeo</Label>
                                <Input type="name" id="name" placeholder="Ej. callate el osico!" />
                            </div>
                            <CalendarInput />
                            <div className="grid gap-2">
                                <Label htmlFor="description">Descripcion</Label>
                                <Textarea id="description" placeholder="Ej: Jugando Fortnite en el minuto..." className="resize-none " />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="link">Link del clip donde se realizo el claimeo</Label>
                                <Input type="link" id="link" placeholder="https://www.twitch.tv/elded..." />
                            </div>
                        </div>
                        <div className="flex justify-end gap-4 mt-6">
                            <Button type="button" onClick={() => setOpen(false)} variant={"outline"}>Cancelar</Button>
                            <Button> <SendIcon /> Enviar</Button>
                        </div>

                    </form>
                </DialogContent>
            </Dialog>

        </>
    )
}
