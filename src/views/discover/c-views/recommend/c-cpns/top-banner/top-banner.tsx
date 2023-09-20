import React, { memo, useRef, useState } from 'react'
import type { ElementRef, FC, ReactNode } from 'react'
import { Carousel } from 'antd'
import classNames from 'classnames'
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style'
import { AppShallowEqual, useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    AppShallowEqual
  )
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)

  // 获取背景图片
  let imageBgUrl
  if (currentIndex >= 0 && banners.length > 0) {
    imageBgUrl = banners[currentIndex].imageUrl + '?imageView&blur=40x20'
  }

  function changeAfterClick(current: number) {
    setCurrentIndex(current)
  }
  function handlePrevClick() {
    bannerRef.current?.prev()
  }
  function handleNextClick() {
    bannerRef.current?.next()
  }
  function changeDotsClick(index: number) {
    bannerRef.current?.goTo(index)
  }

  return (
    <BannerWrapper style={{ background: `url(${imageBgUrl}) center center / 6000px` }}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            autoplay
            dotPosition="bottom"
            effect="fade"
            dots={false}
            ref={bannerRef}
            afterChange={changeAfterClick}
          >
            {banners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                </div>
              )
            })}
          </Carousel>
          <ul className="dots">
            {banners.map((item, index) => {
              return (
                <li key={item.imageUrl} onClick={() => changeDotsClick(index)}>
                  <span className={classNames('item', { active: index === currentIndex })}></span>
                </li>
              )
            })}
          </ul>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={handlePrevClick}></button>
          <button className="btn right" onClick={handleNextClick}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}
export default memo(TopBanner)
