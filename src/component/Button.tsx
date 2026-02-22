import React from 'react'
import Input from './Input'

const Button = () => {

    const handleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('liked')

    }
  return (
    <div>
        <button onClick={handleLike}>Like </button>
        <Input />

    </div>
  )
}

export default Button