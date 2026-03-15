export interface Employee {
  id: string;
  nome: string;
  email: string;
  cpf: string;
  cargo: string;
  dataCadastro: string;
}

export const cargos = [
  "Analista de Sistemas",
  "Desenvolvedor Back-end",
  "Desenvolvedor Front-end",
  "Product Owner",
  "Scrum Master",
  "Analista de RH",
  "Suporte Técnico",
  "Coordenador Acadêmico",
  "Analista Financeiro",
  "Designer UX/UI",
  "DBA",
  "Gerente de Projetos",
];

export const mockEmployees: Employee[] = [
  {
    id: "1",
    nome: "Ana Beatriz Souza",
    email: "ana.souza@impacta.edu.br",
    cpf: "123.456.789-00",
    cargo: "Analista de Sistemas",
    dataCadastro: "2025-03-01",
  },
  {
    id: "2",
    nome: "Carlos Henrique Lima",
    email: "carlos.lima@impacta.edu.br",
    cpf: "234.567.890-11",
    cargo: "Desenvolvedor Back-end",
    dataCadastro: "2025-03-05",
  },
  {
    id: "3",
    nome: "Juliana Martins",
    email: "juliana.martins@impacta.edu.br",
    cpf: "345.678.901-22",
    cargo: "Analista de RH",
    dataCadastro: "2025-03-08",
  },
  {
    id: "4",
    nome: "Rafael Mendes",
    email: "rafael.mendes@impacta.edu.br",
    cpf: "456.789.012-33",
    cargo: "Suporte Técnico",
    dataCadastro: "2025-03-10",
  },
  {
    id: "5",
    nome: "Fernanda Oliveira",
    email: "fernanda.oliveira@impacta.edu.br",
    cpf: "567.890.123-44",
    cargo: "Product Owner",
    dataCadastro: "2025-03-12",
  },
  {
    id: "6",
    nome: "Lucas Pereira",
    email: "lucas.pereira@impacta.edu.br",
    cpf: "678.901.234-55",
    cargo: "Desenvolvedor Front-end",
    dataCadastro: "2025-02-15",
  },
  {
    id: "7",
    nome: "Mariana Costa",
    email: "mariana.costa@impacta.edu.br",
    cpf: "789.012.345-66",
    cargo: "Designer UX/UI",
    dataCadastro: "2025-02-20",
  },
  {
    id: "8",
    nome: "Pedro Santos",
    email: "pedro.santos@impacta.edu.br",
    cpf: "890.123.456-77",
    cargo: "DBA",
    dataCadastro: "2025-01-10",
  },
  {
    id: "9",
    nome: "Camila Rodrigues",
    email: "camila.rodrigues@impacta.edu.br",
    cpf: "901.234.567-88",
    cargo: "Gerente de Projetos",
    dataCadastro: "2024-12-05",
  },
  {
    id: "10",
    nome: "Thiago Almeida",
    email: "thiago.almeida@impacta.edu.br",
    cpf: "012.345.678-99",
    cargo: "Coordenador Acadêmico",
    dataCadastro: "2024-11-18",
  },
];
