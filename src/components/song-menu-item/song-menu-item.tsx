import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SongMenuItemWrapper } from './style'
import { formatCount, formatImageSize } from '@/utils'

interface IProps {
  children?: ReactNode
  songData: any
}

const SongMenuItem: FC<IProps> = (props) => {
  const { songData } = props
  return (
    <SongMenuItemWrapper>
      <div className="top">
        <img src={formatImageSize(songData.picUrl, 140)} alt={songData.name} />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon headset"></i>
              <span className="count">{formatCount(songData.playCount)}</span>
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="bottom">{songData.name}</div>
    </SongMenuItemWrapper>
  )
}
export default memo(SongMenuItem)
