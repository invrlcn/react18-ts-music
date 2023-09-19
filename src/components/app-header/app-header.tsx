import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'
import headerTitle from '@/assets/data/header-title.json'

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = (props) => {
  function showComponents(cpns: any) {
    if (cpns.type === 'path') {
      return (
        <NavLink to={cpns.link}>
          {cpns.title}
          <i className="icon sprite_01"></i>
        </NavLink>
      )
    } else {
      return (
        <a href={cpns.link} target="_blank">
          {cpns.title}
        </a>
      )
    }
  }
  return (
    <div>
      <HeaderWrapper>
        <div className="content wrap-v1">
          <HeaderLeft>
            <a className="logo sprite_01" href="/">
              网易云音乐
            </a>
            <div className="title-list">
              {headerTitle.map((item) => {
                return (
                  <div className="item" key={item.title}>
                    {showComponents(item)}
                  </div>
                )
              })}
            </div>
          </HeaderLeft>
          <HeaderRight>
            {/* <Input className="search" placeholder="音乐/视频/电台/用户" /> */}
            <span className="center">创作者中心</span>
            <span className="login">登录</span>
          </HeaderRight>
        </div>
        <div className="divider"></div>
      </HeaderWrapper>
    </div>
  )
}
export default memo(AppHeader)
