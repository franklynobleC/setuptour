import React from 'react'
import { useState } from 'react'
import Tour from './Tour'
const Tours = ({ handleRemoveTour, tours }) => {
  const [readMore, setReadMore] = useState(false)
  return (
    <>
      {tours.map(tour => {
        const { id, name, info, image, price } = tour

        return (
          <article className='single-tour'>
            <h3>
              <img className='single-tour img' src={image} alt='' />
            </h3>

            <footer>
              <div key={id} className='title'>
                {name}

                <h3 className='tour-price'>{price}</h3>
              </div>
              <p>{readMore ? info : `${info.substring(0, 200)}...`}</p>
              <button onClick={() => setReadMore(!readMore)}>
                {readMore ? 'show less' : 'show more'}
              </button>
              <h3 className='tour-info'>{info}</h3>

              <button
                className='delete-btn'
                onClick={() => handleRemoveTour(tour.id)}
              >
                not interested
              </button>
            </footer>
          </article>
        )
      })}
    </>
  )
}

export default Tours
