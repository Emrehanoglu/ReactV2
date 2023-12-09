import {useEffect, useState} from "react"
import './App.css';
import MemoryCard from "./components/MemoryCard";

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
    const sortedCards = [...cardList,...cardList]
    .sort(() => 0.5 - Math.random()) 
    /* görselleri sıraladım. Burada gorseller sayısal veya alfabetik bir türde olmadığı obje türünde olduğu için
    bu sekılde bir metot ile sıralamıs oldum. */
    .map((card) => ({...card, id:Math.random()}))
    /* map komutu ile de her cardın yanında o card'a ait bir id degeri türettim */
    setCards(sortedCards) 
    /* cardList içerisindekileri cards içerisine set ettim */
    /* resimlerden 2 ser tane olması gerektiği için iki defa ...cardList 'i set ettim */
  }

  useEffect(() => {
    prepareCards() /* uygulama ayağa kalktığında cards içerisi set edilecek */
  },[]) /* köseli parantez ile uygulama ilk cağırıldığında calısacak demiş oldum */

  return (
    <div className="container">
      <h1>Memory App</h1>
      <button onClick={prepareCards}>Oyunu Baslat</button>

      <div className="card-grid">
        {
          cards.map(card => (
              <MemoryCard card={card} key={card.id}/>
          ))
        }
      </div>
    </div>
  );
}

export default App;
