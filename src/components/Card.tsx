// import React from 'react'
import styles from './Card.module.css'
interface starship{
  name: string
}

export default function Card({name} : starship) {
  return (
    <div className={`card ${styles.container}`}>
      <p>{name}</p>
    </div>
  )
}
