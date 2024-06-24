import prisma from "../../../../../../prisma/db"

export async function GET(_request, {params}, ) {
 const data = await prisma.comment.findMany({
        where: {
            parentId: parseInt(params.id),
        },
        include: {
            author: true
        }
    })

    return Response.json(data)
}