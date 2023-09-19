import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = (props) => {
  return <div>Recommend</div>
}
export default memo(Recommend)
