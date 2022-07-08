import express from 'express'
//import { NodemailerMail } from './external-services/nodemailer/nodemailer-mail';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases-services/submit-feedback-use-case';

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    //const nodemailerMail = new NodemailerMail()

    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacksRepository,
        //nodemailerMail
    )
    
    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot,
    })

    //res.status(201).json({ data: createdFeedback })
    res.status(201).send()
})