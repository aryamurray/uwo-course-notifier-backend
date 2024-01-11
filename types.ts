import { z } from "zod"

export const courseSchema = z.object({
    name: z.string(),
    id: z.number(),
    nbr: z.number(),
    section: z.string(),
    description: z.string(),
    component: z.enum(["LEC" , "TUT" , "LAB"]),
    status: z.enum(["Full", "Not Full"]),
    campus: z.enum(["Main", "Brescia", "Kings", "Huron"]),
    delivery: z.enum(["In Person", "Blended", "Online"])
})

export type course = z.infer<typeof courseSchema>

export const userSchema = z.object({
    username: z.string().email().refine(email => {
        // Extract the domain from the email
        const domain = email.substring(email.lastIndexOf("@") + 1);
        // Check if the domain is valid
        return domain === "uwo.ca"|| domain === "ivey.ca";
      }, "The domain of the email is not valid."),
    password: z.string().min(4)
})

export type user = z.infer<typeof userSchema>

