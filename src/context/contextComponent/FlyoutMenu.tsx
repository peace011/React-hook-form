import React from 'react'
import FlyoutState from '../FlyoutState'

const FlyoutMenu = () => {
  return (
    <FlyoutState>
        <FlyoutState.Toggle/>
        <FlyoutState.List>
            <FlyoutState.Item>Edit</FlyoutState.Item>
            <FlyoutState.Item>Delete</FlyoutState.Item>
        </FlyoutState.List>
    </FlyoutState>
  )
}

export default FlyoutMenu