import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionarios/Gerente.js"
import {Diretor} from "./Funcionarios/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const diretor =  new Diretor("Julio", 10000, 12345678900);
const gerente =  new Gerente("Carlos",  5000, 12378945601);
const cliente = new Cliente("Fulano", 78945612379, "4567");
gerente.cadastrarSenha("1234");
diretor.cadastrarSenha("1234");

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "1234");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "1234");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "4567");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);