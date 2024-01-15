# Maintenance

## Ideia do projeto: Documentação das atividades de manutenção do veículo.

## MVP

## RFs (Requisitos funcionais)

- [ ] Deve ser possível se cadastrar;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível o usúario acionar a autenticação de dois fatores
- [ ] Deve ser possível reazilzar um CRUD de veículo;
- [ ] Deve ser possível fazer registro de manutenção;
- [ ] Deve ser possível consultar o histórico de manutenção de um veículo específico;
- [ ] Deve ser possível enviar notificação de manutenção;
- [ ] Deve ser possível calcular os custos totais de manutenção do veículo;
- [ ] Deve ser possível vizualizar oficinas cadastradas;
- [ ] Deve ser possível fazer um orçamento com uma oficina;
- [ ] Implementar autenticação com multiplos fatores;
- [ ] Deve ser possível cadastrar uma oficina;
- [ ] Deve ser possível realizar login com uma oficina;
- [ ] Deve ser possível oferecer serviço;


## RNs (Regras de negócio)

- [ ] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [ ] Pode cadastrar somento uma oficina por CNJPJ

## RNFs (Requisitos não-funcionais)

- [ ] A senha do usuário precisa estar criptografada;
- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [ ] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);
