import { Permissions } from "@prisma/client"

export interface CeoDto {
    name: string,
    username: string,
    password: string
}

export interface UpdateCeoDto {
    name: string
    username: string
    password: string
    permissions: Permissions
}
