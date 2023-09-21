import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AreaHeaderV2Wrapper } from './style'

interface IProps {
  children?: ReactNode
  title?: string
  moreText?: string
  moreLink?: string
}

const AreaHeaderV2: FC<IProps> = (props) => {
  const { title = '默认标题', moreText, moreLink } = props
  return (
    <AreaHeaderV2Wrapper>
      <h3>{title}</h3>
      {moreText && moreLink && <a href={moreLink}>{moreText}</a>}
    </AreaHeaderV2Wrapper>
  )
}
export default memo(AreaHeaderV2)
