import { object, schema, string, number, array } from "@verve-neowise/validius";

export const ceoSchema = schema(object({
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