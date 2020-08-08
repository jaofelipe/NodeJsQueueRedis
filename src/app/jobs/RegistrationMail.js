import Mail from '../lib/Mail';

export default {
    key: 'RegistrationMail',
    async handler({ data }) {

        const { user } = data;
        await Mail.sendMail({
            from: 'Queue Test <queue@queuetest.com.br>',
            to: `${user.name} <${user.email}`,
            subject: 'Cadastro de usuário',
            html : `Olá, ${user.name}, bem-vindo ao sistema de filas da Rocketseat :D`
        });
    }
}