export default function handleError(errorCode: number): string {
    switch (errorCode) {
        case 500:
            return "Erro interno do servidor. Tente novamente mais tarde"
        case 404:
            return "Item não encontrado. Confira os campos e tente novamente"
        case 401:
            return "Usuário ou senha inválidos"
        default:
            return "Erro desconhecido. Tente novamente mais tarde"
    }
}