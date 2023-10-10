import React from 'react'

const ExampleList = ({mean}) => {
  return (
    <div>
      {
        mean.map( val => val.meanings.map( means => means.definitions.map( def => (
            def.example && <div className="" key={def.example}>
                <li>{def.example}</li>
            </div>
        ))))
      }
    </div>
  )
}

export default ExampleList
