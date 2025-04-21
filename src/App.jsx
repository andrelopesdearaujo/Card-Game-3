import { useState } from 'react';

const dares = [
  { category: "Toques", text: "Toque sua buceta ou pau enquanto seu parceiro(a) observa por 60 segundos. Se não fizer, beba." },
  { category: "Submissão", text: "Fique de joelhos e deixe seu parceiro(a) explorar sua buceta ou pau com os dedos por 60 segundos. Se não fizer, beba." },
  { category: "Dirty Talk", text: "Fale pro seu parceiro(a) o que você faria com ele(a) por 60 segundos. Se não fizer, beba." },
  { category: "Masturbação", text: "Masturbe-se na frente do seu parceiro(a) por 60 segundos. Se não fizer, beba." },
  { category: "Fotos", text: "Tire uma foto sua com a buceta ou pau à mostra e mande pro seu parceiro(a). Se não fizer, beba." },
  { category: "Brinquedos", text: "Coloque um brinquedo na buceta ou cu e deixe seu parceiro(a) controlar por 60 segundos. Se não fizer, beba." },
  { category: "Oral", text: "Dê um oral quente no seu parceiro(a) por 60 segundos. Se não fizer, beba." },
  { category: "BDSM", text: "Imite uma cena de BDSM leve, deixando seu parceiro(a) te amarrar e explorar. Se não fizer, beba." },
  { category: "Filmagem", text: "Filme-se se masturbando e manda o vídeo pro seu parceiro(a). Se não fizer, beba." },
  { category: "Vídeo pornô", text: "Assista a um vídeo de sexo em grupo e descreva o que mais te excita. Se não fizer, beba." }
];

function App() {
  const [index, setIndex] = useState(0);
  const current = dares[index];

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % dares.length);
  };

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 16 }}>
      <div style={{ backgroundColor: '#333', padding: 24, borderRadius: 16, maxWidth: 400, width: '100%' }}>
        <div style={{ fontSize: 12, color: '#f472b6', textTransform: 'uppercase' }}>{current.category}</div>
        <p style={{ fontSize: 18, fontStyle: 'italic', margin: '16px 0' }}>{current.text}</p>
        <button onClick={nextCard} style={{ backgroundColor: '#ec4899', color: '#fff', padding: '12px 24px', border: 'none', borderRadius: 8, cursor: 'pointer' }}>
          Próxima Carta
        </button>
      </div>
    </div>
  );
}

export default App;
