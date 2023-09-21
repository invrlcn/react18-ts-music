import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { EnterSingerWrapper } from './style'
import AreaHeaderV2 from '@/components/area-header-v2/area-header-v2'
import { AppShallowEqual, useAppSelector } from '@/store'
import { formatImageSize } from '@/utils'

interface IProps {
  children?: ReactNode
}

const EnterSinger: FC<IProps> = () => {
  const { singerData } = useAppSelector(
    (state) => ({
      singerData: state.recommend.artists
    }),
    AppShallowEqual
  )
  return (
    <EnterSingerWrapper>
      <AreaHeaderV2
        title="入驻歌手"
        moreText="查看全部 &gt;"
        moreLink="#/discover/artist"
      ></AreaHeaderV2>
      <div className="artists">
        {singerData.map((item) => {
          return (
            <a href="#/discover/artist" className="item" key={item.id}>
              <img src={formatImageSize(item.picUrl, 80)} alt="" />
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="alia">{item.alias.join(' ')}</div>
              </div>
            </a>
          )
        })}
      </div>
      <div className="apply-for">
        <a href="#/">申请成为网易音乐人</a>
      </div>
    </EnterSingerWrapper>
  )
}
export default memo(EnterSinger)
