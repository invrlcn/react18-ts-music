import React, { PureComponent } from 'react'
import type { ReactNode } from 'react'

interface IProps {
  name: string
  age: number
}
interface IState {
  message: string
}
class Demo extends PureComponent<IProps, IState> {
  state = {
    message: 'hello. world'
  }
  render(): ReactNode {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <h2>{this.props.age}</h2>
        <h2>{this.state.message}</h2>
      </div>
    )
  }
}

export default Demo
