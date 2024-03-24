import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

// db.js
// import postgres from 'postgres'

// // const connectionString = process.env.DATABASE_URL
// const connectionString = "postgres://postgres.xmvnaxlblxhotrjrionh:codingaddict1212$$@aws-0-eu-central-1.pooler.supabase.com:5432/postgres"
// const sql = postgres(connectionString)

// export default sql
