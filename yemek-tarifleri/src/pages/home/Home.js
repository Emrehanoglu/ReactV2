import React from 'react'
import "./Home.css"
import ProductCard from '../../components/ProductCard'
import useFetch from '../../hoooks/useFetch'

function Home() {
  /* const [tarifler, setTarifler] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/tarifler')
    .then(res => res.json())
    .then(data => setTarifler(data))
  }, []) */

  const {data : tarifler, isLoading, error} = useFetch('http://localhost:3000/tarifler')

  return (
    <div className="row mt-3">
      {isLoading && <div className="alert alert-warning">Yükleniyor...</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      {
        tarifler && tarifler.map(tarif => (
          <ProductCard key={tarif.id} tarif={tarif} />
        ))
      }
    </div>
  )
}

export default Home