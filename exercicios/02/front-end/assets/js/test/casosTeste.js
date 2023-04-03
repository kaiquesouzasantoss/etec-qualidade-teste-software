import { CasoTeste } from "../model/CasoTeste.js"

const CPF_TESTE = "08125461051"

export const CASOS_TESTE = [
    new CasoTeste('Teste de campos preenchidos', '', '', ''),
    new CasoTeste('Consulta com renda invalida', 'teste', -1, CPF_TESTE),
    new CasoTeste('Consulta com CPF invalido', 'teste', 0, '00000000000'),
    new CasoTeste('Consulta taxa isenta', 'teste', 22000, CPF_TESTE),
    new CasoTeste('Consulta taxa 7,5%', 'teste', 23000, CPF_TESTE),
    new CasoTeste('Consulta taxa 15%', 'teste', 34000, CPF_TESTE),
    new CasoTeste('Consulta taxa  22,5%', 'teste', 46000, CPF_TESTE),
    new CasoTeste('Consulta taxa 27,5%', 'teste', 60000, CPF_TESTE)
]