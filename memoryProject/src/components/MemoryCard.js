import React from 'react'
import './MemoryCard.css'

export default function MemoryCard({card, handleSelected}) {

    const handleClick = () => {
        handleSelected(card)
    }
  
    return (
        <div className="card">
            <img className="cardFront" src={card.path} alt="" /> {/* resmin acıldığı zamanki görseli */}
            <img className="cardBack" onClick={handleClick} src="/img/cover.jpeg" alt="" /> {/* resmin kapak resmi olacak */}
        </div>
    )
}
