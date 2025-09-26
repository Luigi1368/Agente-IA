import express from 'express'
import cors from 'cors'
import { perguntas } from './perguntas.js'
 
const api = express();
api.use(express.json());
api.use(cors());

let respostas = {};

api.post('/respostas', (req, resp) => {
    const { userId, perguntaId, alternativa } = req.body;

    if (!respostas[userId]) respostas[userId] = [];

    const pergunta = perguntas[perguntaId];
    const profissoes = pergunta.alternativas[alternativa];

    respostas[userId].push(profissoes);

    if (perguntaId < perguntas.length - 1) {
    const proximaPergunta = perguntas[perguntaId + 1];
    resp.json({ tipo: "pergunta", conteudo: proximaPergunta });
    }

    else {
    const pontos = {};
    respostas[userId].forEach(point => {
      pontos[point] = (pontos[point] || 0) + 1;
    });

    let resultado = null;
    let maior = 0;

    for (const profissao in pontos) {
      if (pontos[profissao] > maior) {
        maior = pontos[profissao];
        resultado = profissao;
      }
    }

    resp.json({ tipo: "resultado", conteudo: `Sua profissão ideal é: ${resultado}` });
    }
});

api.listen(7483,() => console.log('==> > SUPER API em funcionamento!!!'));