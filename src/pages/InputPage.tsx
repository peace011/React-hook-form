import React from 'react'
import AutoState from '../context/contextComponent/AutoComponent/AutoState'
import AutoInput from '../context/contextComponent/AutoComponent/AutoInput'

const InputPage = () => {
  return (
    <div>
        <AutoState>
            <AutoInput/>
        </AutoState>
    </div>
  )
}

export default InputPage