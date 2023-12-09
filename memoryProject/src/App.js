import {useEffect, useState} from "react"
import './App.css';

/* card lara tıkladığımda göronecek olan görselleri tutan bir dizi */
const cardList = [
  { "path": "/img/1.jpeg"},
  { "path": "/img/2.jpeg"},
  { "path": "/img/3.jpeg"},
  { "path": "/img/4.jpeg"},
  { "path": "/img/5.jpeg"},
  { "path": "/img/6.jpeg"},
]

function App() {
  /* cards içeriği baslangıcta bos set edilsin. */
  const [cards,setCards] = useState([])

  const prepareCards = () => {
    setCards([...cardList,...cardList]) 
    /* cardList içerisindekileri cards içerisine set ettim */
    /* resimlerden 2 ser tane olması gerektiği için iki defa ...cardList 'i set ettim */
  }

  useEffect(() => {
    prepareCards() /* uygulama ayağa kalktığında cards içerisi set edilecek */
  },[]) /* köseli parantez ile uygulama ilk cağırıldığında calısacak demiş oldum */

  return (
    <div className="container">
      <h1>Memory App</h1>
      <button>Oyunu Baslat</button>

      <div className="card-grid">
        {
          cards.map(card => (
            <div className="card">
              <img className="cardFront" src={card.path} alt="" /> {/* resmin acıldığı zamanki görseli */}
              <img className="cardBack" src="img/cover.jpeg" alt="" /> {/* resmin kapak resmi olacak */}
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
