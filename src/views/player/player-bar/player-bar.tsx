import React, { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Slider, message } from 'antd'
import { ContentWrapper, ControlWrapper, HandleWrapper, PlayerBarWrapper } from './style'
import { AppShallowEqual, useAppDispatch, useAppSelector } from '@/store'
import { formatImageSize, getSongPlay } from '@/utils'
import { formatTime } from '@/utils/format'
import { changeLyricIndexAction } from '../store'

interface IProps {
  children?: ReactNode
}

const PlayerBar: FC<IProps> = (props) => {
  const {
    songList = [],
    lyrics,
    lyricIndex
  } = useAppSelector(
    (state) => ({
      songList: state.player.currentSong,
      lyrics: state.player.lyricData,
      lyricIndex: state.player.lyricIndex
    }),
    AppShallowEqual
  )
  const dispatch = useAppDispatch()

  const { al = [] } = songList
  const anchorName = songList?.ar?.[0]?.name ?? ''
  const [isPlay, setIsPlay] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isSlider, setSlider] = useState(false)

  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    audioRef.current!.src = getSongPlay(songList.id)
    audioRef.current
      ?.play()
      .then((res) => {
        setIsPlay(true)
      })
      .catch((err) => {
        console.log('播放失败', err)
        setIsPlay(false)
      })
    setDuration(songList.dt)
  }, [songList])

  // 控制播放按钮
  function changePlayClick() {
    // 1.控制播放器的播放/暂停
    !isPlay ? audioRef.current?.play().catch(() => setIsPlay(false)) : audioRef.current?.pause()
    setIsPlay(!isPlay)
  }
  // 播放进度
  function changeTimeUpdateClick() {
    // 当前播放时间
    const currentProgressTime = audioRef.current?.currentTime
    const currentTime = currentProgressTime! * 1000

    // 歌曲进度处理
    if (!isSlider) {
      setProgress((currentTime / duration) * 100)
      setCurrentTime(currentTime)
    }

    // 根据歌词匹配对应歌词
    let index = lyrics.length - 1
    for (let i = 0; i < lyrics.length; i++) {
      const lyric: any = lyrics[i]
      if (lyric.time > currentTime) {
        index = i - 1
        break
      }
    }

    // 匹配上对应的歌词的index
    if (lyricIndex === index || index === -1) return
    dispatch(changeLyricIndexAction(index))

    // 展示对应的歌词
    message.open({
      content: (lyrics[index] as any).text,
      key: 'lyric',
      duration: 0
    })
  }
  // 拖拽改变歌曲进度条
  function changeStateClick(value: number) {
    // 目前是处于拖拽状态
    setSlider(true)

    // 获取value对应位置的时间
    const currentTime = (value / 100) * duration
    setCurrentTime(currentTime)
    // 设置进度条当前时间
    setProgress(value)
  }
  // 点击改变歌曲进度条
  function changeAfterClick(value: number) {
    // 获取点击位置时间
    const currentTime = (value / 100) * duration

    //设置当前播放的时间
    audioRef.current!.currentTime = currentTime / 1000

    setCurrentTime(currentTime)
    setProgress(value)
    setSlider(false)
  }

  return (
    <PlayerBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <ControlWrapper className="control" isPlay={isPlay}>
          <button className="btn sprite_playbar prev"></button>
          <button className="btn sprite_playbar play" onClick={changePlayClick}></button>
          <button className="btn sprite_playbar next"></button>
        </ControlWrapper>
        <ContentWrapper>
          <Link to="/player">
            <img src={formatImageSize(al.picUrl, 50)} alt="" className="image" />
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name">{al.name}</span>
              <span className="singer-name">{anchorName}</span>
            </div>
            <div className="progress">
              <Slider
                tooltip={{ formatter: null }}
                value={progress}
                step={0.5}
                onChange={changeStateClick}
                onAfterChange={changeAfterClick}
              ></Slider>
              <div className="time">
                <span className="current">{formatTime(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{formatTime(duration)}</span>
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
      <audio ref={audioRef} onTimeUpdate={changeTimeUpdateClick}></audio>
    </PlayerBarWrapper>
  )
}
export default memo(PlayerBar)
