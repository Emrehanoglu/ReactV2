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
  const [cards,setCards] = useState([]) /* cards içeriği baslangıcta bos set edilsin. */
  const [selectedOne,setSelectedOne] = useState(null) /* 1. secım. Baslangıcta secili kart yok o yuzden null olsun */
  const [selectedTwo,setSelectedTwo] = useState(null) /* 2. secım. Baslangıcta secili kart yok o yuzden null olsun */
  const [disabled,setDisabled] = useState(false) /* disabled false olduğunda kullanıcı arayüzden card secimi yapabilecek true olduğunda yapamayacak */

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
    setSelectedOne(null) /* baslangıcta 1. secim null olsun */
    setSelectedTwo(null) /* baslangıcta 2. secim null olsun */
  }

  const handleSelected = (card) => {
    selectedOne ? setSelectedTwo(card) : setSelectedOne(card)
  }

  useEffect(() => {
    prepareCards() /* uygulama ayağa kalktığında cards içerisi set edilecek */
  },[]) /* köseli parantez ile uygulama ilk cağırıldığında calısacak demiş oldum */

  useEffect(() => {
    if(selectedOne && selectedTwo){
      setDisabled(true) /* kullanıcı true olduğunda secım yapamayacak */
    }
  },[selectedOne,selectedTwo]) /* selectedOne ve selectedTwo objelerine ait bilgiler değiştiğinde calısır.  */

  return (
    <div className="container">
      <h1>Memory App</h1>
      <button onClick={prepareCards}>Oyunu Baslat</button>

      <div className="card-grid">
        {
          cards.map(card => (
              <MemoryCard card={card} key={card.id} handleSelected={handleSelected} disabled={disabled}/>
          ))
        }
      </div>
    </div>
  );
}

export default App;
