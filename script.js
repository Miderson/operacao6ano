
"use strict";

// SENHA DO APLICATIVO
const SENHA = "MidRe";

// BANCO COM 50 QUESTÕES
// Cada questão tem:
// texto, resposta correta e assunto.

const BANCO = [

  // SOMA

  {
    texto: "Uma biblioteca tinha 128 livros e recebeu mais 76. Quantos livros há agora?",
    resposta: 204,
    assunto: "Soma"
  },
  {
    texto: "Uma turma arrecadou 245 tampinhas na segunda e 187 na terça. Qual foi o total?",
    resposta: 432,
    assunto: "Soma"
  },
  {
    texto: "Um ônibus levou 38 passageiros pela manhã e 46 à tarde. Quantos passageiros foram transportados?",
    resposta: 84,
    assunto: "Soma"
  },
  {
    texto: "Uma escola comprou 156 lápis azuis e 94 vermelhos. Quantos lápis comprou?",
    resposta: 250,
    assunto: "Soma"
  },
  {
    texto: "Um mercado vendeu 235 pães antes do almoço e 168 depois. Quantos vendeu no dia?",
    resposta: 403,
    assunto: "Soma"
  },
  {
    texto: "Uma ciclista percorreu 12,5 km pela manhã e 8,75 km à tarde. Quantos quilômetros percorreu?",
    resposta: 21.25,
    assunto: "Soma"
  },
  {
    texto: "Uma receita usa 1,25 L de leite e outra usa 0,75 L. Qual é o total de leite?",
    resposta: 2,
    assunto: "Soma"
  },
  {
    texto: "João tinha R$ 36,80 e ganhou R$ 18,45. Com quanto ficou?",
    resposta: 55.25,
    assunto: "Soma"
  },
  {
    texto: "Uma caixa pesa 2,4 kg e outra pesa 3,65 kg. Qual é o peso total?",
    resposta: 6.05,
    assunto: "Soma"
  },
  {
    texto: "Um reservatório recebeu 18,6 L e depois 12,85 L de água. Quantos litros recebeu?",
    resposta: 31.45,
    assunto: "Soma"
  },
  {
    texto: "A temperatura era -4 °C e aumentou 9 °C. Qual passou a ser a temperatura?",
    resposta: 5,
    assunto: "Soma"
  },
  {
    texto: "Um elevador estava no andar -3 e subiu 7 andares. Em qual andar parou?",
    resposta: 4,
    assunto: "Soma"
  },
  {
    texto: "Uma equipe tinha saldo de -6 pontos e ganhou 11. Qual ficou sendo o saldo?",
    resposta: 5,
    assunto: "Soma"
  },
  {
    texto: "Uma pessoa tinha dívida de R$ 25 e recebeu um crédito de R$ 40. Qual é seu saldo?",
    resposta: 15,
    assunto: "Soma"
  },
  {
    texto: "A temperatura era -7 °C e subiu 3 °C. Qual ficou sendo a temperatura?",
    resposta: -4,
    assunto: "Soma"
  },

  // SUBTRAÇÃO

  {
    texto: "Uma loja tinha 540 cadernos e vendeu 185. Quantos restaram?",
    resposta: 355,
    assunto: "Subtração"
  },
  {
    texto: "Foram vendidos 800 ingressos de um total de 950. Quantos faltam vender?",
    resposta: 150,
    assunto: "Subtração"
  },
  {
    texto: "Uma escola tem 457 alunos matriculados e 420 presentes. Quantos faltaram?",
    resposta: 37,
    assunto: "Subtração"
  },
  {
    texto: "Um caminhão saiu com 760 kg de frutas e entregou 285 kg. Quantos quilos restaram?",
    resposta: 475,
    assunto: "Subtração"
  },
  {
    texto: "Uma pessoa guardou R$ 150,00 e gastou R$ 47,50. Quanto sobrou?",
    resposta: 102.5,
    assunto: "Subtração"
  },
  {
    texto: "Uma garrafa tinha 2,5 L de suco e foram servidos 0,85 L. Quanto restou?",
    resposta: 1.65,
    assunto: "Subtração"
  },
  {
    texto: "Uma corrida tem 10 km. Ana já percorreu 6,75 km. Quanto falta?",
    resposta: 3.25,
    assunto: "Subtração"
  },
  {
    texto: "Um produto custava R$ 89,90 e recebeu desconto de R$ 14,50. Qual é o preço final?",
    resposta: 75.4,
    assunto: "Subtração"
  },
  {
    texto: "A temperatura passou de 3 °C para -5 °C. Qual foi a variação (final menos inicial)?",
    resposta: -8,
    assunto: "Subtração"
  },
  {
    texto: "Um mergulhador estava a -12 m e subiu 5 m. Qual sua nova posição?",
    resposta: -7,
    assunto: "Subtração"
  },
  {
    texto: "Um elevador saiu do andar 4 e desceu 7 andares. Em qual andar chegou?",
    resposta: -3,
    assunto: "Subtração"
  },
  {
    texto: "Um saldo bancário era de R$ 20 e houve um débito de R$ 35. Qual ficou sendo o saldo?",
    resposta: -15,
    assunto: "Subtração"
  },

  // MULTIPLICAÇÃO

  {
    texto: "Uma escola comprou 24 caixas com 12 lápis em cada uma. Quantos lápis comprou?",
    resposta: 288,
    assunto: "Multiplicação"
  },
  {
    texto: "Uma excursão levou 18 vans com 15 estudantes cada. Quantos estudantes foram?",
    resposta: 270,
    assunto: "Multiplicação"
  },
  {
    texto: "Uma confeitaria prepara 36 doces por bandeja. Quantos doces há em 7 bandejas?",
    resposta: 252,
    assunto: "Multiplicação"
  },
  {
    texto: "Um cinema tem 14 fileiras com 16 cadeiras em cada. Quantas cadeiras possui?",
    resposta: 224,
    assunto: "Multiplicação"
  },
  {
    texto: "Uma loja vendeu 9 camisetas por R$ 27 cada. Qual foi o valor total?",
    resposta: 243,
    assunto: "Multiplicação"
  },
  {
    texto: "Um pacote de arroz pesa 2,5 kg. Quanto pesam 6 pacotes iguais?",
    resposta: 15,
    assunto: "Multiplicação"
  },
  {
    texto: "Uma passagem custa R$ 4,75. Quanto custam 8 passagens?",
    resposta: 38,
    assunto: "Multiplicação"
  },
  {
    texto: "Um corredor dá 5 voltas de 1,2 km cada. Quantos quilômetros corre?",
    resposta: 6,
    assunto: "Multiplicação"
  },
  {
    texto: "Uma turma compra 12 garrafas de água a R$ 2,50 cada. Quanto paga?",
    resposta: 30,
    assunto: "Multiplicação"
  },
  {
    texto: "A temperatura caiu 3 °C por hora durante 4 horas. Qual foi a variação total?",
    resposta: -12,
    assunto: "Multiplicação"
  },
  {
    texto: "Um jogo retira 5 pontos por erro. Qual a variação de pontos após 6 erros?",
    resposta: -30,
    assunto: "Multiplicação"
  },

  // DIVISÃO

  {
    texto: "Uma escola dividiu 360 folhas igualmente entre 12 turmas. Quantas folhas recebeu cada turma?",
    resposta: 30,
    assunto: "Divisão"
  },
  {
    texto: "Uma fábrica colocou 288 balas em pacotes de 12. Quantos pacotes foram montados?",
    resposta: 24,
    assunto: "Divisão"
  },
  {
    texto: "Uma professora distribuiu 225 adesivos igualmente para 15 alunos. Quantos cada aluno recebeu?",
    resposta: 15,
    assunto: "Divisão"
  },
  {
    texto: "Uma viagem de 420 km foi feita em 7 horas, sempre à mesma velocidade. Qual foi a velocidade média?",
    resposta: 60,
    assunto: "Divisão"
  },
  {
    texto: "Um clube arrecadou R$ 540 com 9 equipes, todas contribuindo igualmente. Quanto pagou cada equipe?",
    resposta: 60,
    assunto: "Divisão"
  },
  {
    texto: "Uma fita de 7,5 m foi cortada em 5 partes iguais. Qual o comprimento de cada parte?",
    resposta: 1.5,
    assunto: "Divisão"
  },
  {
    texto: "Um galão tem 9,6 L de suco para distribuir em 8 jarras iguais. Quantos litros em cada jarra?",
    resposta: 1.2,
    assunto: "Divisão"
  },
  {
    texto: "Quatro amigos dividiram igualmente uma conta de R$ 86,00. Quanto pagou cada um?",
    resposta: 21.5,
    assunto: "Divisão"
  },
  {
    texto: "Uma costureira tem 12,6 m de tecido e usa 1,8 m por peça. Quantas peças completas consegue fazer?",
    resposta: 7,
    assunto: "Divisão"
  },
  {
    texto: "Uma dívida de R$ 72 será dividida em 6 parcelas iguais. Qual o valor de cada parcela como número negativo?",
    resposta: -12,
    assunto: "Divisão"
  },
  {
    texto: "A temperatura caiu 24 °C igualmente ao longo de 8 horas. Qual foi a variação por hora?",
    resposta: -3,
    assunto: "Divisão"
  },
  {
    texto: "Um tanque com 18,75 L de água enche 5 recipientes iguais. Quantos litros cabem em cada recipiente?",
    resposta: 3.75,
    assunto: "Divisão"
  }

];

// ELEMENTOS DA PÁGINA

function elemento(id) {
  return document.getElementById(id);
}

// VARIÁVEIS DO TESTE

let aluno = {
  nome: "",
  turma: ""
};

let prova = [];
let respostas = [];
let atual = 0;

// MOSTRAR UMA TELA

function mostrar(tela) {
  const telas = ["login", "quiz", "resultado"];

  telas.forEach(function(id) {
    elemento(id).classList.toggle(
      "oculto",
      id !== tela
    );
  });
}

// EMBARALHAR QUESTÕES

function embaralhar(lista) {
  const copia = [...lista];

  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [copia[i], copia[j]] = [copia[j], copia[i]];
  }

  return copia;
}

// FORMATAR NÚMEROS

function formatar(numero) {
  return Number(numero).toLocaleString("pt-BR", {
    maximumFractionDigits: 2
  });
}

// CRIAR QUATRO ALTERNATIVAS

function criarAlternativas(resposta) {

  let delta = 1;

  if (Math.abs(resposta) >= 100) {
    delta = 10;
  } else if (Math.abs(resposta) >= 20) {
    delta = 5;
  } else if (Math.abs(resposta) >= 5) {
    delta = 2;
  }

  const candidatos = [
    resposta + delta,
    resposta - delta,
    resposta + 2 * delta,
    resposta - 2 * delta,
    resposta + 3 * delta
  ];

  const opcoes = [resposta];

  candidatos.forEach(function(valor) {
    const numero = Math.round(valor * 100) / 100;

    if (!opcoes.includes(numero) && opcoes.length < 4) {
      opcoes.push(numero);
    }
  });

  return embaralhar(opcoes);
}

// INICIAR TESTE

function iniciarProva() {

  // Sorteia 10 entre as 50 questões
  prova = embaralhar(BANCO).slice(0, 10);

  // Cria alternativas para cada questão
  prova = prova.map(function(questao) {
    return {
      ...questao,
      opcoes: criarAlternativas(questao.resposta)
    };
  });

  respostas = Array(10).fill(null);
  atual = 0;

  mostrar("quiz");
  renderizarQuestao();
}

// EXIBIR QUESTÃO

function renderizarQuestao() {

  const questao = prova[atual];

  elemento("alunoInfo").textContent =
    aluno.nome + " • " + aluno.turma;

  elemento("progresso").textContent =
    "Questão " + (atual + 1) + " de 10";

  elemento("barraPreenchida").style.width =
    ((atual + 1) * 10) + "%";

  elemento("tema").textContent = questao.assunto;
  elemento("enunciado").textContent = questao.texto;
  elemento("aviso").textContent = "";

  const area = elemento("alternativas");
  area.innerHTML = "";

  questao.opcoes.forEach(function(valor, indice) {

    const botao = document.createElement("button");
    botao.type = "button";

    botao.className = "alternativa";

    if (respostas[atual] === valor) {
      botao.classList.add("selecionada");
    }

    const letra = document.createElement("span");
    letra.className = "letra";
    letra.textContent = "ABCD"[indice];

    const texto = document.createElement("span");
    texto.textContent = formatar(valor);

    botao.appendChild(letra);
    botao.appendChild(texto);

    botao.addEventListener("click", function() {
      respostas[atual] = valor;
      renderizarQuestao();
    });

    area.appendChild(botao);
  });

  elemento("anterior").disabled = atual === 0;

  if (atual === 9) {
    elemento("proximo").textContent = "Finalizar teste ✓";
  } else {
    elemento("proximo").textContent = "Próxima →";
  }
}

// FINALIZAR E CORRIGIR

function finalizar() {

  let acertos = 0;

  prova.forEach(function(questao, indice) {
    if (respostas[indice] === questao.resposta) {
      acertos++;
    }
  });

  elemento("resumoAluno").textContent =
    aluno.nome + " • " + aluno.turma;

  elemento("nota").textContent = acertos + "/10";

  // Mensagem conforme a nota

  if (acertos === 10) {
    elemento("mensagem").textContent =
      "Perfeito! Você acertou todas!";
  } else if (acertos >= 7) {
    elemento("mensagem").textContent =
      "Muito bem! Continue assim!";
  } else if (acertos >= 5) {
    elemento("mensagem").textContent =
      "Bom esforço! Continue praticando!";
  } else {
    elemento("mensagem").textContent =
      "Continue treinando! Você pode melhorar!";
  }

  // MOSTRAR CORREÇÃO

  const area = elemento("correcao");
  area.innerHTML = "";

  prova.forEach(function(questao, indice) {

    const certo =
      respostas[indice] === questao.resposta;

    const bloco = document.createElement("div");
    bloco.className = "itemCorrecao";

    const titulo = document.createElement("strong");
    titulo.textContent =
      (indice + 1) + ". " + questao.texto;

    const linha = document.createElement("p");
    linha.className = certo ? "certo" : "errado";

    linha.textContent =
      (certo ? "✓ Acertou" : "✗ Errou") +
      " | Sua resposta: " +
      formatar(respostas[indice]) +
      " | Correta: " +
      formatar(questao.resposta);

    bloco.appendChild(titulo);
    bloco.appendChild(linha);
    area.appendChild(bloco);
  });

  mostrar("resultado");
}

// VERIFICAR SENHA E IDENTIFICAÇÃO

elemento("loginForm").addEventListener(
  "submit",
  function(evento) {

    evento.preventDefault();

    const senhaDigitada = elemento("senha").value;

    if (senhaDigitada !== SENHA) {
      elemento("erroLogin").textContent =
        "Senha incorreta. Tente novamente!";
      return;
    }

    aluno.nome = elemento("nome").value.trim();
    aluno.turma = elemento("turma").value.trim();

    if (!aluno.nome || !aluno.turma) {
      elemento("erroLogin").textContent =
        "Preencha seu nome e sua turma!";
      return;
    }

    elemento("erroLogin").textContent = "";

    iniciarProva();
  }
);

// BOTÃO ANTERIOR

elemento("anterior").addEventListener(
  "click",
  function() {
    if (atual > 0) {
      atual--;
      renderizarQuestao();
    }
  }
);

// BOTÃO PRÓXIMA

elemento("proximo").addEventListener(
  "click",
  function() {

    if (respostas[atual] === null) {
      elemento("aviso").textContent =
        "Selecione uma alternativa!";
      return;
    }

    if (atual < 9) {
      atual++;
      renderizarQuestao();
    } else {
      finalizar();
    }
  }
);

// BOTÃO REFAZER

elemento("refazer").addEventListener(
  "click",
  function() {
    iniciarProva();
  }
);

// BOTÃO SAIR

elemento("sair").addEventListener(
  "click",
  function() {
    elemento("senha").value = "";
    mostrar("login");
  }
);
