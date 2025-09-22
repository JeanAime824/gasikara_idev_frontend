"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
export type ChartConfig = {
    data: { name: string; value: number }[];
    colors?: string[];
    title?: string;
};
import {
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { month: "2020", m: 186, f: 80 },
    { month: "2021", m: 305, f: 200 },
    { month: "2022", m: 237, f: 120 },
    { month: "2023", m: 73, f: 190 },
    { month: "2024", m: 209, f: 130 },
    { month: "2025", m: 214, f: 140 },
]

const chartConfig = {
    m: {
        label: "Mâle",
        color: "#2563eb",
    },
    f: {
        label: "Femmel",
        color: "#60a5fa",
    },
} satisfies ChartConfig

export function ChartComponent() {
    return (
        <ChartContainer config={chartConfig} className="h-full w-full ">
            <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="m" fill="var(--color-m)" radius={4} />
                <Bar dataKey="f" fill="var(--color-f)" radius={4} />
            </BarChart>
        </ChartContainer>
    )
}
