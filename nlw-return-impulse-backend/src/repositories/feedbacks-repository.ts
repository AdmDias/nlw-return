//ESTA INTERFACE REPRESENTA A CAMADA DE 'DADOS'
export interface FeedbackCreateData {
    type: string;
    comment: string;
    screenshot?: string;
}

export interface FeedbacksRepository {
    create: (data: FeedbackCreateData) => Promise<void>
}

//ISTO É UM CONTRATO
//REPRESENTA QUAIS OPERAÇÕES PODERAM SER REAZILADAS NO BANCO DE DADOS, MAS NÃO IRÁ 'IMPLEMENTALAS'