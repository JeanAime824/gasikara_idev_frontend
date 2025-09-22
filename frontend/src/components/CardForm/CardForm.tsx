import {Card, CardContent, CardTitle} from "@/components/ui/card.tsx";
import type {ReactNode} from "react";

interface Props {
    children: ReactNode
    className?: string,
    title?: string,
}


const CardForm = ({ className, children, title}: Props) =>{
    return(
        <Card className={`${className} transition-all duration-300`}>
            {title && (
                <CardTitle className="font-semibold text-lg text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                    {title}
                </CardTitle>
            )}
            <CardContent className="p-6">
                {children}
            </CardContent>
        </Card>
    )
}

export default CardForm