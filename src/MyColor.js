import React, { useContext } from 'react'
import MyContext from './MyContext';

const MyColor = () => {
    const { sharedValue, setsharedValue} = useContext(MyContext)

  return (
    <div style={{backgroundColor:sharedValue}}>MyColor - 
        {sharedValue}</div>
  )
}

export default MyColor