import React from 'react'
import './MemoryCard.css'

export default function MemoryCard({card, handleSelected, disabled}) {

    const handleClick = () => {
        if(!disabled){ /* disabled false geldiyse eğer secilen kartı handle et */
            handleSelected(card)
        }
    }
  
    return (
        <div className="card">
            <img className="cardFront" src={card.path} alt="" /> {/* resmin acıldığı zamanki görseli */}
            <img className="cardBack" onClick={handleClick} src="/img/cover.jpeg" alt="" /> {/* resmin kapak resmi olacak */}
        </div>
    )
}
