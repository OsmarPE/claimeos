'use client'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarInput } from "./CalendarInput";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, SendIcon } from "lucide-react";
import { DialogTrigger } from "@/components/ui/dialog";
import { useActionState, useState } from "react";
import { actionClaimeos } from "@/actions/actionsForm";
import { formatDateShort, initialStateClaimeo } from "@/lib/utils";
import TextError from "./TextError";


export default function ContactForm() {

    const [state, formAction, isPending] = useActionState(actionClaimeos, initialStateClaimeo);

    const [date, setDate] = useState<Date | undefined>(state.error.date.message ? new Date(state.error.date.value) : undefined)
    const { error } = state
    

    return (
        <form>
            <div className="space-y-4">
                <div className="grid gap-2">
                    <Label htmlFor="text">Claimeo</Label>
                    <Input type="text" name="text" id="text" placeholder="Ej: !Callate perra!" defaultValue={error.text?.value} />
                    {error.text.message && <TextError>{error.text.message}</TextError> }
                </div>
                <CalendarInput date={date} setDate={setDate} />
                {error.date.message && <TextError>{error.date.message}</TextError> }
                <div className="grid gap-2">
                    <Label htmlFor="description">Descripcion</Label>
                    <Textarea id="description" name="description" placeholder="Ej: Jugando Fortnite en el minuto..." className="resize-none " defaultValue={error.description?.value} />
                    {error.description.message && <TextError>{error.description.message}</TextError> }
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="streamer">Streamer</Label>
                    <Input type="text" id="streamer" name="streamer" placeholder="Ej. ElDed" defaultValue={error.streamer?.value} />
                    {error.streamer.message && <TextError>{error.streamer.message}</TextError> }
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="clip">Link del clip donde se realizo el claimeo</Label>
                    <Input type="text" name="clip" id="clip" placeholder="https://www.twitch.tv/elded..."  defaultValue={error.clip?.value} />
                    {error.clip.message && <TextError>{error.clip.message}</TextError> }
                </div>
                <input type="hidden" name="date" value={date ? formatDateShort(date) : ''} />
                <input type="hidden" name="flag" />
            </div>
            <div className="flex justify-end gap-4 mt-6">
                <DialogTrigger asChild>
                    <Button type="button" variant={"outline"}>Cancelar</Button>
                </DialogTrigger>
                <Button disabled={isPending} formAction={formAction}>
                    {!isPending ?
                        <>
                            <SendIcon /> Enviar
                        </>
                        :
                        <>
                            <Loader2 className='animate-spin' />  Enviando..
                        </>
                    }
                </Button>
            </div>

        </form>
    )
}
