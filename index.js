const perguntas = [
    {
      pergunta: "Qual é o nome da ratinha mais famosa da Disney?",
      respostas: [
        "Minnie Mouse",
        "Daisy Duck",
        "Clarabelle Cow",
      ],
      correta: 0
    },
    {
      pergunta: "Em qual ano foi lançado o primeiro longa-metragem animado da Disney?",
      respostas: [
        "1928",
        "1937",
        "1940",
      ],
      correta: 1
    },
    {
      pergunta: "Quem é o vilão principal em 'O Rei Leão'?",
      respostas: [
        "Scar",
        "Jafar",
        "Ursula",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a princesa que tem uma fada madrinha chamada Fada Azul?",
      respostas: [
        "Cinderela",
        "Ariel",
        "Bela",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do brinquedo que dá vida aos brinquedos em 'Toy Story'?",
      respostas: [
        "Buzz Lightyear",
        "Woody",
        "Sr. Cabeça de Batata",
      ],
      correta: 2
    },
    {
      pergunta: "Quem é o mascote da Disney?",
      respostas: [
        "Mickey Mouse",
        "Donald Duck",
        "Goofy",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do dragão de 'A Bela Adormecida'?",
      respostas: [
        "Maleficent",
        "Diablo",
        "Smaug",
      ],
      correta: 1
    },
    {
      pergunta: "Quem é conhecido por ser o 'gênio' em 'Aladdin'?",
      respostas: [
        "Jafar",
        "Iago",
        "Gênio",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a montanha-russa mais famosa da Disney?",
      respostas: [
        "Space Mountain",
        "Big Thunder Mountain",
        "Splash Mountain",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do leão em 'O Rei Leão'?",
      respostas: [
        "Mufasa",
        "Simba",
        "Nala",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetiçào
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  
  quizItem.querySelector('dl dt').remove()
    
    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }
  