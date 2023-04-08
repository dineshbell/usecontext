import React from 'react'
import { UseContext } from './App'
const ComponentB = () => {
  return (
    <div>
        <UseContext.Consumer >
          {value=><div>{value}</div>}
      </UseContext.Consumer>
    </div>
  )
}

export default ComponentB
