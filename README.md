# 2fa Authenticate

## Ideia do projeto: Implementar autenticação com multiplos fatores. 

## RFs (Requisitos funcionais)

- [ ] Deve ser possível se cadastrar;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível recuperar senha esquecida 
- [ ] Deve ser possível o usúario acionar a autenticação de dois fatores
- [ ] Deve ser possível o usúario desabilitar a autenticação de dois fatores

## RNs (Regras de negócio)

- [ ] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [ ] O usuário deve informar sua senha para habilitar a autenticação de dois fatores;
- [ ] O token deve haver um tempo de expiração 

## RNFs (Requisitos não-funcionais)

- [ ] A senha do usuário precisa estar criptografada;
- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);

