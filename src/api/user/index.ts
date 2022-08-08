import {UmiApiRequest, UmiApiResponse} from "umi";
import {PrismaClient} from "@prisma/client";
import {verifyToken} from "@/utils/jwt";

export default async function (req: UmiApiRequest, res: UmiApiResponse) {
  switch (req.method) {
    case "GET":
      if (!req.cookies?.token) {
        return res.status(200).json(null);
      }

      const authorId = (await verifyToken(req.cookies.token)).id;

      const prisma = new PrismaClient();

      const user = await prisma.user.findUnique({where: {id: authorId}});
      res.status(200).json(user);
      await prisma.$disconnect();
      break;
    default:
      res.status(405).json({error: "Method not allowed"});
  }
}

// export default async function (req: UmiApiRequest, res: UmiApiResponse) {
//   switch (req.method) {
//     case 'GET':
//       const prisma = new PrismaClient();
//       const allUsers = await prisma.user.findMany({
//         select: {
//           id: true,
//           name: true,
//           email: true,
//           avatarUrl: true,
//           passwordHash: false
//         }
//       });
//       res.status(200).json(allUsers);
//       await prisma.$disconnect()
//       break;
//     default:
//       res.status(405).json({ error: 'Method not allowed' })
//   }
// }
