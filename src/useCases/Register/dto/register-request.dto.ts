export class RegisterRequestDto implements Readonly<RegisterRequestDto> {
    email: string;
    nome: string;
    senha: string;

    public static from(dto: Partial<RegisterRequestDto>) {
        const it = new RegisterRequestDto();
        it.nome = dto.nome;
        it.email = dto.email;
        it.senha = dto.senha;
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!it.nome) throw new Error('Nome é campo obrigatório')
        if (!it.email) throw new Error('E-mail é campo obrigatório')
        if (!re.test(String(it.email).toLowerCase())) throw new Error('E-mail não é válido')
        if (!it.senha) throw new Error('Senha é campo obrigatório')
        return it;
    }



}
