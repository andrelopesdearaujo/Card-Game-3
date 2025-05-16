import { useState, useEffect } from "react";

const dares = [
  { text: "Chupa o mamilo do outro com vontade." },
  { text: "Fica de quatro e empina esse cu." },
  { text: "Dá um tapão na bunda e depois morde." },
  { text: "Deita e deixa o outro usar a boca onde quiser." },
  { text: "Senta no colo e esfrega tua raba até o outro perder a noção." },
  { text: "Beija a parte de dentro da coxa até quase encostar no meio." },
  { text: "Deita em cima e esfrega o quadril como se tivesse metendo." },
  { text: "Deixa puxar teu cabelo e segura firme na cintura." },
  { text: "Faz um oral de 1 minuto sem as mãos." },
  { text: "Agarra a bunda do outro com força e puxa." },
  { text: "Passa um vibrador na parte mais quente do corpo do outro." },
  { text: "Encosta um brinquedo no pau ou na buceta e segura ali." },
  { text: "Abre as pernas e se toca na frente do outro." },
  { text: "Beija o pescoço e dá uma chupada com pegada." },
  { text: "Lamba o pescoço e morde a orelha do outro." },
  { text: "Senta no peito do outro e esfrega tua raba." },
  { text: "Estimula o outro com os dedos, depois para e provoca." },
  { text: "Sobe por cima e esfrega tua pele na dele(a)." },
  { text: "Lamba a barriga até o começo da buceta ou do pau." },
  { text: "Deixa o outro te virar e te usar como quiser por 1 minuto." },
  { text: "Passa o vibrador no mamilo do outro até arrepiar." },
  { text: "Dança pelado(a), de costas, esfregando." },
  { text: "Encosta a raba ou o quadril na cara do outro." },
  { text: "Faz um oral com a língua no ar, como se tivesse treinando." },
  { text: "Chupa o dedo do outro com malícia." },
  { text: "Morde a parte de dentro da coxa do outro." },
  { text: "Lambe a ponta do pau ou da buceta do outro sem continuar." },
  { text: "Vira o outro de costas e beija da nuca até a bunda." },
  { text: "Lambe os mamilos e desce direto pro meio." },
  { text: "Dá um beijo entre as pernas bem molhado." },
  { text: "Fica por cima e esfrega até começar a suar." },
  { text: "Ajoelha e encosta o rosto onde mais dá tesão." },
  { text: "Beija o outro com as mãos amarradas atrás." },
  { text: "Lambe o pescoço e segura na nuca com firmeza." },
  { text: "Enche a barriga de beijos até chegar na virilha." },
  { text: "Dá uma lambida bem devagar no cu do outro." },
  { text: "Encaixa o quadril no outro e esfrega como se fosse meter." },
  { text: "Escolhe um brinquedo e usa no outro por 30 segundos." },
  { text: "Segura o outro com força pela nuca e puxa pra perto." },
  { text: "Lambe o mamilo do outro em círculos até ficar durinho." },
  { text: "Beija entre as nádegas e passa a língua ali no meio." },
  { text: "Encosta o outro na parede e esfrega teu corpo." },
  { text: "Passa um cubo de gelo no corpo do outro e lambe depois." },
  { text: "Beija como se estivesse prestes a meter." },
  { text: "Deita de costas no outro e esfrega tua pele inteira." },
  { text: "Faz um “pézinho” no pau ou na buceta do outro." },
  { text: "Encosta um brinquedo no cu do outro e pressiona de leve." },
  { text: "Esfrega os seios ou o peito no rosto do outro." },
  { text: "Senta no colo do outro e esfrega sem tirar." },
  { text: "Enfia os dedos onde for e mantém o olhar fixo." },
  { text: "Tira uma nude com a raba empinada e guarda." },
  { text: "Filme-se rebolando de costas." },
  { text: "Tira uma selfie pelado(a) de corpo todo." },
  { text: "Grava teu gemido real e salva." },
  { text: "Filme tua mão se tocando." },
  { text: "Faz uma dancinha pelado(a) em cima da cama." },
  { text: "Manda uma nude só mostrando o meio das pernas." },
  { text: "Filme o espelho com teu corpo todo exposto." },
  { text: "Grava tu te tocando com os olhos fechados." },
  { text: "Tira uma foto com o brinquedo encostando em ti." },
  { text: "Vê um vídeo de pegging e se masturba assistindo." },
  { text: "Assiste dominação feminina e mete a mão." },
  { text: "Vê bondage e se toca junto." },
  { text: "Assiste cuckold e se esfrega." },
  { text: "Vê inversão de papéis e se provoca." },
  { text: "Escolhe um pornô diferente e se estimula por 1 minuto." },
  { text: "Assiste dominação masculina e toca o próprio corpo." },
  { text: "Vê fetiche com pés ou couro e se esfrega enquanto vê." },
  { text: "Vê dildo duplo e se masturba junto." },
  { text: "Vê pornô doido e se toca no ritmo." },
  { text: "Par ou ímpar: quem perde tira a cueca ou calcinha." },
  { text: "Role um dado: par beija, ímpar dá tapa na bunda." },
  { text: "Gemam juntos — quem rir, apanha leve." },
  { text: "Quem tirar o número maior esfrega no outro." },
  { text: "Strip dado: tirou 6, pelado(a) total." },
  { text: "Faz 3 posições com o corpo, mostrando na prática." },
  { text: "Rabisca a raba do outro com o dedo." },
  { text: "Escolhe: mete um beijo de 30s ou toma dois goles." },
  { text: "Canta um funk putaria e rebola no ritmo." },
  { text: "Encarada de tesão: quem piscar primeiro leva tapa." },
  { text: "Gemam alternado, quem parar primeiro perde." },
  { text: "Cria uma dança pornô improvisada no colo do outro." },
  { text: "Lambe a barriga do outro até o meio das pernas." },
  { text: "Simula um oral com a língua no ar, de joelhos." },
  { text: "Escolhe uma posição do Kama Sutra e mete só a pose." },
  { text: "Lamba o dedo e enfia devagar na boca do outro." },
  { text: "Beija o parceiro(a) sem encostar as mãos em nada." },
  { text: "Desenha com a língua no peito do outro." },
  { text: "Senta no colo e esfrega só com a bunda." },
  { text: "Fica gemendo só com expressão por 30 segundos." },
  { text: "Morde o lábio e encosta a testa na do outro." },
  { text: "Encosta peito com peito e esfrega sem usar mãos." },
  { text: "Deixa o outro implorar te segurando pelas coxas." },
  { text: "Lambe a parte mais gostosa do outro até ele(a) se contorcer." },
  { text: "Vira o outro de costas, segura no quadril e empurra." },
  { text: "Escolhe um objeto aleatório e esfrega no próprio corpo." },
  { text: "Chupa o pescoço como se fosse uma buceta ou rola." },
  { text: "Imita uma cena real que te deixou com tesão." },
  { text: "Beija vendado(a), guiado(a) só pelo toque." },
  { text: "Encosta tua mão na parte íntima do outro e segura firme por 10 segundos." }
];

function shuffle(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function App() {
  const [shuffledDares, setShuffledDares] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setShuffledDares(shuffle(dares));
  }, []);

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % shuffledDares.length);
  };

  if (shuffledDares.length === 0) return <p style={'{'} color: "#fff" {'}'}>Carregando cartas...</p>;

  const current = shuffledDares[index];

  return (
    <div style={'{'}
      backgroundColor: "#000",
      color: "#fff",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 16
    {'}'}>
      <div style={'{'}
        backgroundColor: "#1e1e1e",
        padding: 24,
        borderRadius: 16,
        maxWidth: 400,
        width: "100%",
        textAlign: "center"
      {'}'}>
        <p style={'{'}
          fontSize: 18,
          fontStyle: "italic",
          marginBottom: 24
        {'}'}>{'{'}current.text{'}'}</p>
        <button onClick={'{'}nextCard{'}'} style={'{'}
          backgroundColor: "#ec4899",
          color: "#fff",
          padding: "12px 24px",
          border: "none",
          borderRadius: 8,
          cursor: "pointer"
        {'}'}>
          Próxima Carta
        </button>
      </div>
    </div>
  );
}

export default App;
