import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MailCheck } from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex items-center justify-center h-dvh ">
        <Card className="w-[90%] max-w-lg bg-current/10" >
            <CardContent className="py-10 text-center">
                <div className="inline-flex items-center justify-center gap-2 size-16 mb-6 rounded-full bg-primary">
                <MailCheck />
                </div>
                <h1 className=" text-2xl font-semibold">¡Gracias por enviar tu claimeo!</h1>
                <p className=" text-white/50 mt-1">
                    Te responderemos en breve
                </p>
                <Button className=" mt-6" size={'lg'} asChild>
                    <Link href="/">
                        Regresar al inicio
                    </Link>
                </Button>
            </CardContent>
        </Card>
    </div>
  )
}
