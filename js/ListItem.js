import React, { PureComponent } from 'react'

export default class ListItem extends PureComponent {
  render() {
    let { text } = this.props
    return <li>{text}</li>
  }
}