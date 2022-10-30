import { object, schema, string } from "@verve-neowise/validius";

export const categorySchema = schema(object({
    required: true,
    entries: {
        name: string({
            required: true,
            min: 3,
            max: 50
        })
    }
}))
