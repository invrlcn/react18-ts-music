import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NewAlbumItemWrapper } from './style'
import { formatImageSize } from '@/utils'

interface IProps {
  children?: ReactNode
  albumData: any
}

const NewAlbumItem: FC<IProps> = (props) => {
  const { albumData } = props

  return (
    <NewAlbumItemWrapper>
      <div className="top">
        <img src={formatImageSize(albumData.picUrl, 100)} alt="" />
        <a href="" className="cover sprite_cover"></a>
      </div>
      <div className="bottom">
        <div className="name">{albumData.name}</div>
        <div className="artist">{albumData.artist.name}</div>
      </div>
    </NewAlbumItemWrapper>
  )
}
export default memo(NewAlbumItem)
