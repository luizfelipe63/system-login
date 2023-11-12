# Inventory Control

## MVP

## RFs (Requisitos funcionais)

Usuário comum 

- [ ] Deve ser possível se Registrar;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível reazilzar um CRUD de veículo;
- [ ] Deve ser possível fazer registro de manutenção;
- [ ] Deve ser possível consultar o histórico de manutenção de um veículo específico;
- [ ] Deve ser possível enviar notificação de manutenção;
- [ ] Deve ser possível calcular os custos totais de manutenção do veículo;

## Extras

- [ ] Deve ser possível vizualizar oficinas cadastradas;
- [ ] Deve ser possível fazer um orçamento com uma oficina;
- [ ] Implementar autenticação com multiplos fatores;

Usuário oficina

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
