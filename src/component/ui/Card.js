import React from 'react'
import clasess from './Card.module.css'

function Card(props) {
  return (
    <div className={clasess.card}>{props.children}</div>
  )
}

export default Card