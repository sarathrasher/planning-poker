import React from 'react'
import Card from './Card'
import { readdirSync } from 'fs';

export default class Deck extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: true
    }

  }

  renderDeckList (scale) {
    let values
    if (scale === 'fibonacci') {
      values = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, '?', 'Pass']
    }
    if (scale === 'tShirtSizes') {
      values = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', '?', 'Pass']
    }
    if (scale === 'powers') {
      values = [0, 1, 2, 4, 8, 16, 32, 64, '?', 'Pass']
    }

    const deck = values.map(value => {
      return <Card value={value} />
    })

    return deck
  }

  render () {
    return (
      <div className='deck'>
        {this.renderDeckList(this.props.scale)}
      </div>
    )
  }

}