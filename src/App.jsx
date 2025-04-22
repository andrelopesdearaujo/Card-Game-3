import { useState } from 'react';

const dares = [
  // Posições Picantes
  { category: "Posições", text: "Fique de quatro e diga o que você quer que façam com seu cu. Se não fizer, beba." },
  { category: "Posições", text: "Monte no parceiro(a) como se fosse uma cavalgada selvagem. Se não fizer, beba." },
  { category: "Posições", text: "Fique deitado(a) com as pernas abertas e mande o parceiro(a) 'explorar'. Se não fizer, beba." },
  { category: "Posições", text: "Faça a posição tesoura com seu parceiro(a), mesmo só de zoeira. Se não fizer, beba." },
  { category: "Posições", text: "Finja estar sendo amarrado(a) e implore por prazer. Se não fizer, beba." },
  { category: "Posições", text: "Fique por cima e mova-se lentamente, com contato total. Se não fizer, beba." },
  { category: "Posições", text: "Finja estar sendo domado(a) como um(a) bom/boa submisso(a). Se não fizer, beba." },
  { category: "Posições", text: "Imite a posição papai e mamãe enquanto sussurra safadezas. Se não fizer, beba." },
  { category: "Posições", text: "Faça a pose de 'cu empinado' e fique assim por uma rodada. Se não fizer, beba." },
  { category: "Posições", text: "Deite com o bumbum pra cima e peça 'com jeitinho'. Se não fizer, beba." },
  { category: "Posições", text: "Mostre qual é sua posição sexual favorita e diga por quê. Se não fizer, beba." },
  { category: "Posições", text: "Recrie a pose mais ousada de um vídeo pornô que você viu. Se não fizer, beba." },
  { category: "Posições", text: "Faça a posição 'de ladinho', encostado(a), e diga o que faria. Se não fizer, beba." },
  { category: "Posições", text: "Faça a posição 'sentado(a) em cima da cara' (só a pose!). Se não fizer, beba." },
  { category: "Posições", text: "Recrie com o parceiro(a) a posição 69 sem encostar. Se não fizer, beba." },

  // Brinquedos e Estímulos
  { category: "Brinquedos", text: "Pegue um brinquedo e brinque com ele por 60 segundos. Se não fizer, beba." },
  { category: "Brinquedos", text: "Coloque um plug anal e fique com ele por duas rodadas. Se não fizer, beba." },
  { category: "Brinquedos", text: "Use um vibrador no seu corpo e diga o que está sentindo. Se não fizer, beba." },
  { category: "Brinquedos", text: "Pegue um brinquedo e deixe o parceiro(a) te provocar. Se não fizer, beba." },
  { category: "Brinquedos", text: "Brinque com um brinquedo enquanto olha fixamente pro parceiro(a). Se não fizer, beba." },
  { category: "Brinquedos", text: "Lamba um brinquedo como se fosse seu parceiro(a). Se não fizer, beba." },
  { category: "Brinquedos", text: "Diga qual brinquedo mais gostaria de testar com seu parceiro(a). Se não disser, beba." },
  { category: "Brinquedos", text: "Brinque com um brinquedo sobre os mamilos. Se não fizer, beba." },
  { category: "Brinquedos", text: "Descreva com detalhes como você usaria um dildo. Se não fizer, beba." },
  { category: "Brinquedos", text: "Use um brinquedo nas suas costas, coxas ou pescoço. Se não fizer, beba." },
  { category: "Brinquedos", text: "Toque o brinquedo nos lábios (da boca ou outros) por 10 segundos. Se não fizer, beba." },
  { category: "Brinquedos", text: "Encoste o brinquedo no parceiro(a) e descreva o que faria depois. Se não fizer, beba." },
  { category: "Brinquedos", text: "Provoque o parceiro(a) com um brinquedo entre as pernas. Se não fizer, beba." },
  { category: "Brinquedos", text: "Faça uma 'dança do brinquedo' com trilha sonora imaginária. Se não fizer, beba." },
  { category: "Brinquedos", text: "Invente um nome sexy para um dos seus brinquedos. Se não fizer, beba." },

  // Interação com Parceiro(a)
  { category: "Contato", text: "Lamba o mamilo do seu parceiro(a) por 30 segundos. Se não fizer, beba." },
  { category: "Contato", text: "Morda ou chupe o pescoço do seu parceiro(a). Se não fizer, beba." },
  { category: "Contato", text: "Toque o cu do seu parceiro(a) com carinho ou safadeza. Se não fizer, beba." },
  { category: "Contato", text: "Dê um tapa na bunda do parceiro(a). Se não fizer, beba." },
  { category: "Contato", text: "Beije a barriga do parceiro(a) descendo bem devagar. Se não fizer, beba." },
  { category: "Contato", text: "Lamba o dedo e enfie suavemente na boca do outro. Se não fizer, beba." },
  { category: "Contato", text: "Dê um beijo molhado no cangote e diga 'é só o começo'. Se não fizer, beba." },
  { category: "Contato", text: "Deixe o parceiro(a) te cheirar todinho(a). Se não deixar, beba." },
  { category: "Contato", text: "Lamba lentamente a parte interna da coxa do parceiro(a). Se não fizer, beba." },
  { category: "Contato", text: "Beije o parceiro(a) com as mãos presas atrás das costas. Se não fizer, beba." },

  // Fantasias e Palavras
  { category: "Fantasias", text: "Descreva uma fantasia que nunca contou a ninguém. Se não contar, beba." },
  { category: "Fantasias", text: "Imite um personagem de filme pornô e seduza o parceiro(a). Se não fizer, beba." },
  { category: "Fantasias", text: "Faça um monólogo safado como se estivesse numa webcam. Se não fizer, beba." },
  { category: "Fantasias", text: "Invente um apelido pornô pro parceiro(a) e use por 3 rodadas. Se não fizer, beba." },
  { category: "Fantasias", text: "Diga 3 palavras sujas que te deixam com tesão. Se não disser, beba." },
  { category: "Fantasias", text: "Sussurre no ouvido do parceiro(a) o que faria com ele(a) agora. Se não fizer, beba." },
  { category: "Fantasias", text: "Grite uma safadeza em tom teatral. Se não fizer, beba." },
  { category: "Fantasias", text: "Imite alguém te dando um oral e narre a sensação. Se não fizer, beba." },
  { category: "Fantasias", text: "Diga como seria um dia inteiro de sexo com o parceiro(a). Se não disser, beba." },
  { category: "Fantasias", text: "Narre como seria um pornô estrelado por vocês dois. Se não narrar, beba." },
dares.push(
  // Filmagens e Fotos
  { category: "Filmagem", text: "Tire uma selfie pelado(a) e envie só depois do jogo. Se não tirar, beba." },
  { category: "Filmagem", text: "Filme-se rebolando e mande pro parceiro(a). Se não filmar, beba." },
  { category: "Filmagem", text: "Tire uma foto de você com cara de safado(a). Se não fizer, beba." },
  { category: "Filmagem", text: "Grave um vídeo seu gemendo e guarde pra depois. Se não gravar, beba." },
  { category: "Filmagem", text: "Filme uma parte do seu corpo tocando outra. Se não fizer, beba." },
  { category: "Filmagem", text: "Grave você dançando de forma sexy. Se não gravar, beba." },
  { category: "Filmagem", text: "Tire uma foto de alguma parte íntima sem mostrar o rosto. Se não fizer, beba." },
  { category: "Filmagem", text: "Filme-se deitado(a) de costas com a bunda empinada. Se não fizer, beba." },
  { category: "Filmagem", text: "Grave uma 'mensagem quente' de voz pro parceiro(a). Se não gravar, beba." },
  { category: "Filmagem", text: "Tire uma foto com algum brinquedo encostando no corpo. Se não fizer, beba." },

  // Pornô Temático
  { category: "Pornô", text: "Veja uma cena de pegging e diga se teria coragem. Se não fizer, beba." },
  { category: "Pornô", text: "Veja uma cena de dominação feminina e diga o que curtiu. Se não fizer, beba." },
  { category: "Pornô", text: "Veja uma cena de bondage intensa e diga o que te excitou. Se não fizer, beba." },
  { category: "Pornô", text: "Veja um vídeo de cuckold e diga o que acha dessa fantasia. Se não fizer, beba." },
  { category: "Pornô", text: "Assista a um pornô com temática de inversão de papéis. Se não assistir, beba." },
  { category: "Pornô", text: "Escolha um tema pornô que nunca viu e explore por 1 minuto. Se não fizer, beba." },
  { category: "Pornô", text: "Assista a um pornô de dominação masculina e comente. Se não fizer, beba." },
  { category: "Pornô", text: "Veja um vídeo de fetiche com pés ou couro e reaja. Se não fizer, beba." },
  { category: "Pornô", text: "Assista a um pornô com dildo duplo e descreva a sensação. Se não quiser, beba." },
  { category: "Pornô", text: "Veja um vídeo com enredo bizarro e diga se continuaria vendo. Se não quiser, beba." },

  // Mini Games e Desafios
  { category: "Mini Jogo", text: "Jogue par ou ímpar: quem perder tira a cueca ou calcinha." },
  { category: "Mini Jogo", text: "Role um número: se for par, beije; se for ímpar, chupe. Se recusar, beba." },
  { category: "Mini Jogo", text: "Façam uma batalha de gemidos. Quem rir, bebe." },
  { category: "Mini Jogo", text: "Sorteie: quem tirar o maior número dá um tapa." },
  { category: "Mini Jogo", text: "Faça um 'strip dice': jogue e tire peças de roupa. Se não quiser, beba." },
  { category: "Mini Jogo", text: "Jogo rápido: diga 3 posições sexuais. Se travar, beba." },
  { category: "Mini Jogo", text: "Escreva uma palavra safada no corpo do parceiro(a). Se não fizer, beba." },
  { category: "Mini Jogo", text: "Escolha: dar um beijo de 30 segundos ou beber duas vezes." },
  { category: "Mini Jogo", text: "Cante um funk safado enquanto rebola. Se não fizer, beba." },
  { category: "Mini Jogo", text: "Faça um 'duelo de olhares safados'. Quem piscar primeiro, bebe." },
  { category: "Mini Jogo", text: "Jogo da risada: quem gemer e rir ao mesmo tempo, bebe." },
  { category: "Mini Jogo", text: "Invente uma coreografia sexy. Se não fizer, beba." },
  { category: "Mini Jogo", text: "Sussurre uma frase de filme pornô. Se não fizer, beba." },
  { category: "Mini Jogo", text: "Faça um oral falso com a mão e a língua. Se não fizer, beba." },
  { category: "Mini Jogo", text: "Imite uma posição de Kama Sutra com roupa. Se não fizer, beba." },
  { category: "Mini Jogo", text: "Lamba ou chupe um dedo de forma provocante. Se não fizer, beba." },
  { category: "Mini Jogo", text: "Beije o parceiro(a) sem usar as mãos. Se não conseguir, beba." },
  { category: "Mini Jogo", text: "Rabisque algo safado no corpo do outro com o dedo. Se não fizer, beba." },
  { category: "Mini Jogo", text: "Dance no colo do parceiro(a) sem música. Se não fizer, beba." },
  { category: "Mini Jogo", text: "Fique em silêncio por uma rodada inteira gemendo só com os olhos. Se não fizer, beba." }
);





function App() {
  const [index, setIndex] = useState(0);
  const current = dares[index];

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % dares.length);
  };

  return (
    <div style={{
      backgroundColor: '#000',
      color: '#fff',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16
    }}>
      <div style={{
        backgroundColor: '#1e1e1e',
        padding: 24,
        borderRadius: 16,
        maxWidth: 400,
        width: '100%',
        textAlign: 'center'
      }}>
        <div style={{
          fontSize: 14,
          color: '#ec4899',
          textTransform: 'uppercase',
          marginBottom: 12
        }}>{current.category}</div>
        <p style={{
          fontSize: 18,
          fontStyle: 'italic',
          marginBottom: 24
        }}>{current.text}</p>
        <button onClick={nextCard} style={{
          backgroundColor: '#ec4899',
          color: '#fff',
          padding: '12px 24px',
          border: 'none',
          borderRadius: 8,
          cursor: 'pointer'
        }}>
          Próxima Carta
        </button>
      </div>
    </div>
  );
}

export default App;
