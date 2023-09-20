import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import AreaHeaderV1 from '@/components/area-header-v1/area-header-v1'
import SongMenuItem from '@/components/song-menu-item/song-menu-item'
import { HotRecommendWrapper } from './style'
import { AppShallowEqual, useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  const { songState } = useAppSelector(
    (state) => ({
      songState: state.recommend.songs
    }),
    AppShallowEqual
  )
  return (
    <HotRecommendWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink="/discover/songs"
      ></AreaHeaderV1>
      <div className="recommend-list">
        {songState.map((item) => {
          return <SongMenuItem key={item.id} songData={item}></SongMenuItem>
        })}
      </div>
    </HotRecommendWrapper>
  )
}
export default memo(HotRecommend)
