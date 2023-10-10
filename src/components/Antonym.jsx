import React from 'react'

const Antonym = ({mean}) => {
    console.log("antonym", mean);
  return (
    <div>
       <div className="columns-2 md:columns-3">
      {mean.map((val) =>
        val.meanings.map((means) =>
          means.antonyms?.map((ant) => <li>{ant}</li>)
        )
      )}
    </div>
    </div>
  )
}

export default Antonym
