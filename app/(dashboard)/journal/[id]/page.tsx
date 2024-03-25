import Editor from '@/components/Editor'
import { getUserByClerkID } from '@/utils/auth'
import { prisma } from "@/utils/db"

// @ts-ignore
const getEntry = async (id) => {
    const user = await getUserByClerkID()
    const entry = await prisma.journalEntry.findUnique({
        where: {
            userId_id: {
                userId: user.id,
                id,
            },
        },
        include: {
            analysis: true
        },
    })

    return entry
}

// @ts-ignore
const EntryPage = async ({ params }) => {
    const entry = await getEntry(params.id)
    return (
        <div className='w-full h-full'>
            <Editor entry={entry} />
        </div>
    )
}

export default EntryPage