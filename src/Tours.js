import React from 'react'
import Tour from './Tour'
const Tours = ({ handleRemoveTour, tours }) => {
  return (
    <>
      {tours.map(tour => {
        const { id, name, info, image, price } = tour

        return (
          <article className='single-tour'>
            <h3>
              <img className='single-tour img' src={image} alt='' />
            </h3>

            <h2 key={id} className='title'>
              {name}

              <h3 className='tour-price'>{price}</h3>
            </h2>
            <h3 className='tour-info'>{info}</h3>

            <button className='btn' onClick={() => handleRemoveTour(tour.id)}>
              remove button
            </button>
          </article>
        )
      })}
    </>
  )
}

export default Tours
