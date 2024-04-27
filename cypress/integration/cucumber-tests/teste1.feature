#language: pt

Funcionalidade: Teste1

    Logado com um usuário válido 
    Quero entrar na página principal

    Cenário: Login 
        Dado Que o usuário entre na página de login
        Quando O usuário preencher os campos login e senha
        Então O usuário deve visualizar a página principal