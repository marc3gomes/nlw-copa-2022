import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.create({
        data: {
            name: 'Will Doe',
            email: 'Will_doe@gmail.com',
            avatarUrl: 'https://github.com/marcg-dev.png',
        }
    })
}

main()