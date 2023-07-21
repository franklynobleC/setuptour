import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import Tour from './Tour'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App () {
  const [tours, setUpTours] = useState([])

  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  // const [tours1, setUpTours1] = useState([])
  // const [tours1, setUpTours1] = useState()

  const handleRemoveTour = id => {
    const newTour = tours.filter(tour => tour.id !== id)

    setUpTours(newTour)

    // console.log(setUpTours(newTour))
  }

  //Method  to Refresh the the Data
  const handleRefresh = () => {
    const fetchData = async () => {
      const response = await fetch(url)
      try {
        if (response.ok) {
          const data = await response.json()

          setUpTours(data)
        }
      } catch (err) {
        console.log(err)
        setIsError(true)
      }
    }

    fetchData()
  }

  // setUpTours1(tours)

  //Fetch Data using the Fetch Method
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url)
      try {
        if (response.ok) {
          const data = await response.json()

          console.log(data)
          setIsLoading(false)
          setUpTours(data)

          // console.log(tours, ' from tours ---------')
        } else {
          throw new Error('Request failed')
        }
      } catch (err) {
        throw new Error('error loading')
      }
    }

    fetchData()
  }, [])

  if (isLoading) {
    return <Loading />
  }
  if (isError) {
    return <h2> An Error occurred </h2>
  }

  return (
    <main className='main'>
      <h1>Our Tour </h1>
      <section className='section'>
        {tours && <Tours handleRemoveTour={handleRemoveTour} tours={tours} />}

        {tours.length === 0 && (
          <section>
            <h1 className=''> No Tour Left </h1>

            <button className='btn' onClick={handleRefresh}>
              click to refresh
            </button>
          </section>
        )}
      </section>
    </main>
  )
}

export default App
