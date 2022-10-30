import { object, schema, string, number, array } from "@verve-neowise/validius";

export const streamSchema = schema(object({
    required: true,
    entries: {

        name: string({
            required: false,
            min: 5,
            max: 50
        }),

        adminId: number({
            required: true,
        }),

        newsId: number({
            required: true,
        })
    }
}))
