import { z } from "zod"

export const courseComponentSchema = z.object({
    nbr: z.string(),
    section: z.string(),
    component: z.string(),
    status: z.string(),
    campus: z.string(),
    delivery: z.string()
})

export type courseComponent = z.infer<typeof courseComponentSchema>

export const courseSchema = z.object({
    name: z.string(),
    description: z.string(),
    components: z.array(courseComponentSchema)
})

export type course = z.infer<typeof courseSchema>

export const userSchema = z.object({
    username: z.string().email().refine((email: string) => {
        // Extract the domain from the email
        const domain = email.substring(email.lastIndexOf("@") + 1);
        // Check if the domain is valid
        return domain === "uwo.ca"|| domain === "ivey.ca";
      }, "The domain of the email is not valid."),
    password: z.string().min(4)
})

export type user = z.infer<typeof userSchema>

