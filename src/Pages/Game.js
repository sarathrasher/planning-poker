import React from 'react'
import Deck from '../Components/Deck'

export default class Game extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='page game-page'>
        <h1>Start Game</h1>
        <Deck scale='fibonacci' />
      </div>
    )
  }
}