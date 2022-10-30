import { object, schema, string } from "@verve-neowise/validius";

export const adminSchema = schema(object({
    required: true,
    entries: {
        name: string({
            required: false,
            min: 5,
            max: 50
        }),

        username: string({
            required: true,
            min: 3,
            max: 12
        }),

        password: string({
            required: true,
            min: 3,
            max: 12
        })
    }
}))
