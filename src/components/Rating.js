
export default function  Rating({ rating, setRating }) {
    return (
      <div>
        {[1, 2, 3, 4, 5].map((star) => {
          return (  
            <span
              key={star}
              className='start'
              style={{
                cursor: 'pointer',
                color: rating >= star ? '#ff6060' : 'gray',
                fontSize: `35px`,
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