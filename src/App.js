import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const removeTour = (id) => {
     const newTour = data.filter((item) => item.id !== id)
     setData(newTour)
  }

  const fetchData  = async () => {
    setLoading(true)
     try {
      const response = await fetch(url)
      const info = await response.json()
      setLoading(false)
      setData(info)
     } catch (error) {
       setLoading(false)
       console.log(error)
     }
  }

  useEffect(() => {
    fetchData()
  },[])

  if(loading) {
    return <main>
    <Loading />
  </main>
  }


  if(data.length === 0) {
    return <main style={{margin : '0px auto', textAlign: 'center'}}>
      <button className="btn" onClick={() =>fetchData()}>
        Refresh
      </button>
    </main>
  }
 
  return <main>
  <Tours data={data} removeTour={removeTour} />
</main>
}

export default App
