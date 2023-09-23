import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RankingItemWrapper } from './style'
import { formatImageSize } from '@/utils'
import { useAppDispatch } from '@/store'
import { currentSongAction } from '@/views/player/store'

interface IProps {
  children?: ReactNode
  rankData: any
}

const RankingItem: FC<IProps> = (props) => {
  const dispatch = useAppDispatch()
  const { playlist } = props.rankData
  const { tracks = [] } = playlist

  function playMusicClick(id: number) {
    dispatch(currentSongAction(id))
  }
  return (
    <RankingItemWrapper>
      <div className="header">
        <div className="image">
          <img src={formatImageSize(playlist.coverImgUrl, 80)} alt="" />
          <a href="" className="sprite_cover"></a>
        </div>
        <div className="info">
          <div className="name">{playlist.name}</div>
          <div>
            <button className="sprite_02 btn play"></button>
            <button className="sprite_02 btn favor"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {tracks.slice(0, 10).map((item: any, index: number) => {
          return (
            <div className="item" key={item.id}>
              <div className="index">{index + 1}</div>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="operator">
                  <button
                    className="btn sprite_02 play"
                    onClick={() => playMusicClick(item.id)}
                  ></button>
                  <button className="btn sprite_icon2 add"></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="footer">
        <a href="#/discover/ranking">查看全部 &gt;</a>
      </div>
    </RankingItemWrapper>
  )
}
export default memo(RankingItem)
