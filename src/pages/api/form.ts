import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    try {
      // Desestruturando os dados do corpo da requisição
      const { nome, email, cpf, phone, birthDate } = req.body

      console.log('Dados recebidos:', req.body) // Log dos dados recebidos

      // Verificar se todos os dados necessários foram passados
      if (!nome || !email || !cpf || !phone || !birthDate) {
        return res
          .status(400)
          .json({ error: 'Todos os campos são obrigatórios.' })
      }

      // Criar novo registro no banco com os dados recebidos
      const newDonation = await prisma.formulario.create({
        data: {
          nome,
          email,
          cpf,
          phone,
          birthDate,
        },
      })

      // Retornar resposta de sucesso
      return res.status(201).json(newDonation)
    } catch (error) {
      // Erro no processo de criação
      console.error(error)
      return res.status(500).json({ error: 'Erro ao salvar os dados.' })
    }
  } else {
    // Método HTTP não permitido
    return res.status(405).json({ error: 'Método não permitido.' })
  }
}
