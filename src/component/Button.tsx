import React from 'react'

const Button = () => {

    const handleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('liked')

    }
  return (
    <div>
        <button onClick={handleLike}>Like </button>

    </div>
  )
}

export default Button