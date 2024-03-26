import HistoryChart from '@/components/History'
import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'

const getData = async () => {
    const user = await getUserByClerkID()
    const analyses = await prisma.entryAnalysis.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        createdAt: 'asc',
      },
    })
}

const History = async () => {
    const { avg, analyses } = await getData();

    return (
        <div className="w-full h-full">
            <div className="w-full h-full">{`Avg. Sentiment ${avg}`}</div>
            <div className="w-full h-full">
                <HistoryChart data={analyses} />
            </div>
        </div>
    )
}

export default History