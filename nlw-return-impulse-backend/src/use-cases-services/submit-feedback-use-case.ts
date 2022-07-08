//import { Mail } from "../external-services/mail";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

/*
    REPRESENTA UMA AÇÃO NO SISTEMA
    USANDO SINGLE RESPONSABILITY PRINCIPLE
    APENAS UM MÉTODO (SINGLE RESPONSABILITY)
*/

/*
    ESTA INTERFACE REPRESENTA A CAMADA DE 'APLICAÇÃO', 
    DA QUAL LIDA COM AS REGRAS DE NEGÓCIOS DA APLICAÇÃO
*/

interface SubmitFeedbackUseCaseRequest {
    type: string;
    comment: string;
    screenshot?: string;
}


export class SubmitFeedbackUseCase {
    // USANDO PRINCIPIO DE INVERSÃO DE DEPENDENCIA 
    constructor(
        private feedbacksRepository: FeedbacksRepository, // dependencia
        //private mail: Mail, 
    ){}

    async execute(request: SubmitFeedbackUseCaseRequest){
        const { type, comment, screenshot} = request


        if (screenshot && (!screenshot.startsWith('data:image/jpg;base64,') || !screenshot.startsWith('data:image/png;base64,'))) {
            throw new Error('Invalid screenshot format!')
        }

        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot,
        })

        /*await this.mail.sendMail({
            subject: 'Novo feedback',
            body: [
                `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
                `<p>Tipo de feedback: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
                `</div>`
            ].join('\n')
        })*/


        //Caso queira retorna o feedback criado
        //return feedback
        /*
            **SUPONDO QUE NÃO ESTIVESSEMOS UTILIZANDO O PRINCIPIO DE INVERSÃO DE DEPENDENCIA**
            **A solução abaixo poderia ser implementada**
            **Porém, nosso caso de uso estaria totalmente acoplado ao PRISMA 
            {
                'const prismaFeedbacksRepository = new PrismaFeedbacksRepository()'
            }
            **

            import { PrismaFeedbacksRepository } from "../repositories/prisma/prisma-feedbacks-repository";
            
            const prismaFeedbacksRepository = new PrismaFeedbacksRepository();

            await prismaFeedbacksRepository.create({
                type,
                comment,
                screenshot,
            })
        */
    }
}