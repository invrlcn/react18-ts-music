import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Slider } from 'antd'
import { ContentWrapper, ControlWrapper, HandleWrapper, PlayerBarWrapper } from './style'
import { useAppSelector } from '@/store'
import { formatImageSize } from '@/utils'

interface IProps {
  children?: ReactNode
}

const PlayerBar: FC<IProps> = (props) => {
  const { songList } = useAppSelector((state) => ({
    songList: state.player.currentSong
  }))
  const { songs = [] } = songList
  console.log(songs)

  function changePlayClick() {
    // 1.控制播放器的播放/暂停
  }
  function changeStateClick(value: number) {
    console.log(value)
  }

  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <ControlWrapper className="control">
          <button className="btn sprite_playbar prev"></button>
          <button className="btn sprite_playbar play" onClick={changePlayClick}></button>
          <button className="btn sprite_playbar next"></button>
        </ControlWrapper>
        <ContentWrapper>
          <Link to="/player">
            <img src={formatImageSize(songs.picUrl, 50)} alt="" className="image" />
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name">{songs.name}</span>
              <span className="singer-name">买辣椒也用券</span>
            </div>
            <div className="progress">
              <Slider tooltip={{ formatter: null }} onChange={changeStateClick}></Slider>
              <div className="time">
                <span className="current">00:04</span>
                <span className="divider">/</span>
                <span className="duration">05:20</span>
              </div>
            </div>
          </div>
        </ContentWrapper>
        <HandleWrapper className="handle">
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button className="btn sprite_playbar loop"></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </HandleWrapper>
      </div>
    </PlayerBarWrapper>
  )
}
export default memo(PlayerBar)
