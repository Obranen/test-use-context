import React, {FC, useContext} from 'react'
import {Context} from '../App';

const Test: FC = () => {
  const {name, id} = useContext(Context)
  console.log('name: ' + name, 'id: ' + id)

  return (
    <></>
  )
}

export default Test