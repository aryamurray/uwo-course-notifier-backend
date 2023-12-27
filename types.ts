export interface course {
    name: string
    id: number
    nbr: number
    section: string
    description: string
    component: "LEC" | "TUT" | "LAB"
    status: "Full" | "Not Full"
    campus: "Main" | "Brescia" | "Kings" | "Huron"
    delivery: "In Person" | "Blended" | "Online"
}