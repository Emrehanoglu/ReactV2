import React from 'react'
import "./Details.css"
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

function Details() {
  const { id } = useParams()

  /* const [tarif, setTarif] = useState(null)
  const url = 'http://localhost:3000/tarifler/' + id */
  
  const {data : tarif, isLoading, error} = useFetch('http://localhost:3000/tarifler/' + id)

  return (
    <div className="row mt-3">
      {isLoading && <div className="alert alert-warning">Yükleniyor...</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      {
        tarif && ( 
        /* tarif bilgisi var ise html ler ekrana gelecek bu kontrolü yapmazsam
        null reference hatası alıyorum */
          <>
            <div className="col-4">
              <img src={`/img/${tarif.resim}`} className="img-fluid rounded" alt={tarif.baslik} />
            </div>
            <div className="col-8">
              <h5>{tarif.baslik}</h5>
              <p>{tarif.aciklama}</p>
              <ul>
                {
                  tarif.malzemeler.map((malzeme,index) => (
                    <li key={index}>{malzeme}</li>
                  ))
                }
              </ul>
            </div>
            <div className="col-12 mt-3">
              <p>{tarif.hazirlanisi}</p>
              <a href={tarif.url} className='btn btn-outline-success'>Tarifi İncele</a>
            </div>
          </>
        )
      }
    </div>
  )
}

export default Details