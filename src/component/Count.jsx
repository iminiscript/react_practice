import React from 'react'

export const Count = ({onMinus, onPlus, newCountNumber}) => {
  return (
    <>
        <h2 onClick={onMinus}>--</h2>
        <h1>{ newCountNumber }</h1>
        <h2 onClick={onPlus}>++</h2>
    </>
  )
}
