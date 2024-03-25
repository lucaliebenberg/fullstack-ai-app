import { getUserByClerkID } from "@/utils/auth"
import { NextResponse } from "next/server"
import { revalidatePath } from "next/cache"
import { analyze } from "@/utils/ai"
import { prisma } from "@/utils/db"

export const POST = async (request:Request) => {
    const data = await request.json()
    const user = await getUserByClerkID();
  const entry = await prisma.journalEntry.create({
    data: {
      content: data.content,
      user: {
        connect: {
          id: user.id,
        },
      },
      analysis: {
        create: {
          mood: 'Neutral',
          subject: 'None',
          negative: false,
          summary: 'None',
          sentimentScore: 0,
          color: '#0101fe',
          userId: user.id,
        },
      },
    },
  })

    revalidatePath('/journal')

    return NextResponse.json({ data: entry })
}