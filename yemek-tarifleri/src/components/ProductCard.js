import React from 'react'
import "./ProductCard.css"

function ProductCard({tarif}) {
  return (
    <div className='col-3 mb-3'>
        <div className="card">
            <img src={`img/${tarif.resim}`} className="card-img-top" alt={tarif.baslik} />
            <div className="card-body">
            <h5 className="card-title">{tarif.baslik}</h5>
            <p className="aciklama">{tarif.aciklama}</p>
            <a href={tarif.url} className="btn btn-primary">Tarifi incele...</a>
            </div>
        </div>
    </div>
  )
}

export default ProductCard