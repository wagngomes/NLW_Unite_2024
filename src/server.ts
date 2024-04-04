import fastify from "fastify"
import { z } from 'zod'
import { PrismaClient } from "@prisma/client"
import { generateSlug } from "./utils/generate-slug"
import { serializerCompiler, validatorCompiler, ZodTypeProvider } from 'fastify-type-provider-zod'
import { createEvent } from "./routes/create-event"
import { registerForEvent } from "./routes/register-for-event"

const app = fastify()


app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createEvent)
app.register(registerForEvent)


app.listen({ port:3333}).then(() => {
    console.log("server running")
})