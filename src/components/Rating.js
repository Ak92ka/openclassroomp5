
export default function  Rating({ rating, setRating }) {
    return (
      <div>
        {[1, 2, 3, 4, 5].map((star) => {
          return (  
            <span
              key={star}
              className='start'
              style={{
                color: rating >= star ? '#ff6060' : 'gray',
                fontSize: `25px`,
              }}
              onClick={() => {
                setRating(star)
              }}
            >
              {' '}
              ★{' '}
            </span>
          )
        })}
      </div>
    )
  }