import React, { memo, useRef } from 'react'
import type { FC, ReactNode, ElementRef } from 'react'
import { Carousel } from 'antd'
import { NewAlbumWrapper } from './style'
import AreaHeaderV1 from '@/components/area-header-v1/area-header-v1'
import NewAlbumItem from '@/components/new-album-item/new-album-item'
import { AppShallowEqual, useAppSelector } from '@/store'
import { flattenDiagnosticMessageText } from 'typescript'

interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
  const { newAlbums } = useAppSelector(
    (state) => ({
      newAlbums: state.recommend.newAlbums
    }),
    AppShallowEqual
  )
  const carouselRef = useRef<ElementRef<typeof Carousel>>(null)
  const mapAry = [0, 1]

  function changePrevClick() {
    carouselRef.current?.prev()
  }
  function changeNextClick() {
    carouselRef.current?.next()
  }

  return (
    <NewAlbumWrapper>
      <AreaHeaderV1 title="新碟上架" moreLink="/discover/album"></AreaHeaderV1>
      <div className="main">
        <button className="sprite_02 arrow arrow-left" onClick={changePrevClick}></button>
        <div className="banner">
          <Carousel dots={false} speed={1500} ref={carouselRef}>
            {mapAry.map((item) => {
              return (
                <div key={item} className="albums">
                  <div className="album-list">
                    {newAlbums.slice(item * 5, (item + 1) * 5).map((album) => {
                      return <NewAlbumItem key={album.id} albumData={album}></NewAlbumItem>
                    })}
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
        <button className="sprite_02 arrow arrow-right" onClick={changeNextClick}></button>
      </div>
    </NewAlbumWrapper>
  )
}
export default memo(NewAlbum)
