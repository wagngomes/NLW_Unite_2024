import {prisma} from '../src/lib/prisma'


async function seed () {

    await prisma.event.create({
        data: {
            id: '9af5ecb0-2236-4bdd-8f75-78b2869dd1b8',
            title: 'United Summit_2025',
            slug: 'united summit_25',
            details: 'um evento para devs apaixonados por código',
            maximumAttendees: 120
        }
    })


}

seed().then(() => {
    console.log('database seeded!!!')
    prisma.$disconnect()
})