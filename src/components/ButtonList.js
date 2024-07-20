import React from 'react'
import Button from './Button'

function ButtonList() {
  return (
    <div className='flex pl-4'>
      <Button name="All" />
      <Button name="Gaming"/>
      <Button name="Live" />
      <Button name="Education" />
      <Button name="Tech" />
      <Button name="Angular" />
      <Button name="Movies" />
    </div>
  )
}

export default ButtonList