import { number, object, schema, string } from "@verve-neowise/validius";

export const newsSchema = schema(object({
    required: true,
    entries: {
        title: string({
            required: true,
            min: 5,
            max: 300,
        }),
        descr: string({
            required: true,
            min: 10
        }),
        image: string({
            required: false,
        }),
        preview: string({
            required: true,
        }),
        video: string({
            required: false,
        }),
        categoryId: number({
            required: true
        })
    }
}))


