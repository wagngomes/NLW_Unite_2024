import fastify from "fastify"
import fastifySwaggerUi from "@fastify/swagger-ui"
import { z } from 'zod'
import { PrismaClient } from "@prisma/client"
import { generateSlug } from "./utils/generate-slug"
import { serializerCompiler, validatorCompiler, ZodTypeProvider, jsonSchemaTransform } from 'fastify-type-provider-zod'
import { createEvent } from "./routes/create-event"
import { registerForEvent } from "./routes/register-for-event"
import { getEvent } from "./routes/get-event"
import { getAttendeeBadge } from "./routes/get-attendee-badge"
import { checkIn } from "./routes/check-in"
import { getEventAttendees } from "./routes/get-event-attendees"
import fastifySwagger from "@fastify/swagger"

const app = fastify()
app.register(fastifySwagger, {
    swagger: {
        consumes: ['application/json'],
        produces: ['application/json'],
        info: {
            title: 'pass.in',
            description: 'especificações da API construida durante a NLW Unite ',
            version: '1.0.0'
        }
    },
    transform: jsonSchemaTransform,

})

app.register(fastifySwaggerUi,{
    routePrefix: '/docs',
})


app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(createEvent)
app.register(registerForEvent)
app.register(getEvent)
app.register(getAttendeeBadge)
app.register(checkIn)
app.register(getEventAttendees)



app.listen({ port:3333, host: '0.0.0.0'}).then(() => {
    console.log("server running")
})