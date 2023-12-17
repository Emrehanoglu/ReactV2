import React from 'react'
import "./Search.css"
import {useSearchParams} from "react-router-dom"
import useFetch from '../../hooks/useFetch'
import ProductCard from '../../components/ProductCard'

function Search() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get("q") 
  /* gelen url bilgisinden q= ifadesinden sonraki kısmı query parametresine set ettim */
  const url = 'http://localhost:3000/tarifler?q=' + query;

  const { data:tarifler, isLoading, error} = useFetch(url)

  return (
    <div className="row mt-3">
      <h2>Aranan kelime : "{query}"</h2>
      <hr />
      {isLoading && <div className='alert alert-warning'>Yükleniyor...</div>}
      {error && <div className='alert alert-danger'>{error}</div>}
      {
        tarifler && tarifler.map(tarif => (
          <ProductCard key={tarif.id} tarif={tarif} />
        ))
      }
    </div>
  )
}

export default Search