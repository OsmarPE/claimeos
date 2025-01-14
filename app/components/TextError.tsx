import { ReactNode } from "react";

export default function TextError({children}:{children:ReactNode}) {
  return (
    <span className="inline-block text-sm text-red-400">{children}</span>
  )
}
