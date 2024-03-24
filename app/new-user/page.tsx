import {prisma} from "@/utils/db"
// import sql from '@/utils/db'
import {currentUser } from "@clerk/nextjs"
import {redirect} from "next/navigation"

// const createNewUser = async () => {
//   try {
//     const user = await currentUser()
//     console.log(user)

//     const match = await sql`
//       SELECT *
//       FROM "User"
//       WHERE clerkId = ${String(user?.id)}
//     `

//     if (!match.length) {
//       // If the user doesn't exist, create a new user record
//       await sql`
//         INSERT INTO "User" (clerkId, email)
//         VALUES (${String(user?.id)}, ${user?.emailAddresses[0]?.emailAddress ? String(user.emailAddresses[0]?.emailAddress) : null})
//       `
//     }
//     console.log('--- User created successfully ---')
//     console.log('---------------------------------')
//     console.log(' REDIRECTING TO JOURNAL ')

//     redirect('/journal')
//   } catch (error) {
//     console.error('Error creating new user:', error)
//   }
// }
const createNewUser = async () => {
  const user = await currentUser()
  console.log(user)

  const match = await prisma.user.findUnique({
    where: {
      clerkId: user.id as string,
    },
  })

  if (!match) {
    await prisma.user.create({
      data: {
        clerkId: user.id,
        email: user?.emailAddresses[0].emailAddress,
      },
    })
  }

  redirect('/journal')
}

const NewUser = async () => {
  await createNewUser()
  return (
    <div>
     ...loading
    </div>
  )
}

export default NewUser
