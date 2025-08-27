import {type ReactNode, useId} from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface Props {
    title?: string,
    placeholder: string,
    type: string,
    children?: ReactNode,
    className?: string,
}

export default function InputComponent({title, placeholder, type, children, className}: Props) {
    const id = useId()
    return (
        <div className="*:not-first:mt-2">
            <Label htmlFor={id}>{title}</Label>
            <div className="relative">
                <Input id={id} className={`peer pe-9 ${className}`} placeholder={placeholder} type={type} />
                <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 peer-disabled:opacity-50">
                    {children}
                </div>
            </div>
        </div>
    )
}
