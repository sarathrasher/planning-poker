import React from 'react'

export default class Card extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className='card'>
        {this.props.value}
      </div>
    )
  }

}