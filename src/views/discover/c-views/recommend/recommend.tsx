import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import TopBanner from './c-cpns/top-banner/top-banner'
import HotRecommend from './c-cpns/hot-recommend/hot-recommend'
import NewAlbum from './c-cpns/new-album/new-album'
import { useAppDispatch } from '@/store'
import { getBannersAction, getNewAlbumAction, getSongItemAction } from './store'
import { RecommendWrapper } from './style'
interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = (props) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getBannersAction())
    dispatch(getSongItemAction())
    dispatch(getNewAlbumAction())
  }, [])
  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend></HotRecommend>
          <NewAlbum></NewAlbum>
        </div>
        <div className="right">right</div>
      </div>
    </RecommendWrapper>
  )
}
export default memo(Recommend)
