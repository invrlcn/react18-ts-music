import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
  name: string
  age: number
  height?: number
}

const Tem: FC<IProps> = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h2>{props.age}</h2>
      <h2>{props.height}</h2>
      <h2>{props.children}</h2>
    </div>
  )
}
Tem.defaultProps = {
  name: 'bob',
  age: 30,
  height: 1.99
}
Tem.displayName = '呵呵呵'

// interface IProps {
//   children?: any
//   name: string
//   age: number
//   height?: number
// }

// const Tem = (props: IProps) => {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <h2>{props.age}</h2>
//       <h2>{props.height}</h2>
//       <h2>{props.children}</h2>
//     </div>
//   )
// }
// Tem.defineProps = {
//   height: 1.88
// }

export default memo(Tem)
