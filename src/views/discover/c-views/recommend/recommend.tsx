import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import TopBanner from './c-cpns/top-banner/top-banner'
import HotRecommend from './c-cpns/hot-recommend/hot-recommend'
import NewAlbum from './c-cpns/new-album/new-album'
import TopRanking from './c-cpns/top-ranking/top-ranking'
import UserLogin from './c-cpns/user-login/user-login'
import EnterSinger from './c-cpns/enter-singer/enter-singer'
import HotAnchor from './c-cpns/hot-anchor/hot-anchor'
import { useAppDispatch } from '@/store'
import {
  getArtistListAction,
  getBannersAction,
  getNewAlbumAction,
  getRankingAction,
  getSongItemAction
} from './store'
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
    dispatch(getRankingAction())
    dispatch(getArtistListAction())
  }, [])
  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend></HotRecommend>
          <NewAlbum></NewAlbum>
          <TopRanking></TopRanking>
        </div>
        <div className="right">
          <UserLogin></UserLogin>
          <EnterSinger></EnterSinger>
          <HotAnchor></HotAnchor>
        </div>
      </div>
    </RecommendWrapper>
  )
}
export default memo(Recommend)
