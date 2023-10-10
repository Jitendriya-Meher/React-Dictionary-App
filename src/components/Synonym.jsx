import React from 'react'

const Synonym = ({mean}) => {
    console.log("synonym", mean);
  return (
    <div>
      <div className="columns-2 md:columns-3">
      {mean.map((val) =>
        val.meanings.map((means) =>
          means.synonyms?.map((syn) => <li>{syn}</li>)
        )
      )}
    </div>
    </div>
  )
}

export default Synonym
