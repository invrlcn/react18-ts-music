import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { TopRankingWrapper } from './styled'
import AreaHeaderV1 from '@/components/area-header-v1/area-header-v1'
import { AppShallowEqual, useAppSelector } from '@/store'
import RankingItem from './c-cpns/ranking-item/ranking-item'

interface IProps {
  children?: ReactNode
}

const TopRanking: FC<IProps> = () => {
  const { rankData = [] } = useAppSelector(
    (state) => ({
      rankData: state.recommend.ranking
    }),
    AppShallowEqual
  )
  return (
    <TopRankingWrapper>
      <AreaHeaderV1 title="榜单" moreLink="/discover/ranking"></AreaHeaderV1>
      <div className="content">
        {rankData.map((item) => {
          return <RankingItem rankData={item} key={item.playlist.id}></RankingItem>
        })}
      </div>
    </TopRankingWrapper>
  )
}
export default memo(TopRanking)
