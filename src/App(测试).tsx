import React, { Suspense, useEffect, useState } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import routes from './router'
import Tem from './views/template'
import '@/service/config'
import cnRequest from '@/service'
import Demo from './views/class-demo/class-demo'

function App() {
  const [banners, setBanners] = useState<any[]>([])
  useEffect(() => {
    cnRequest
      .get({
        url: '/banner'
      })
      .then((res) => {
        setBanners(res.banners)
      })
  }, [])

  return (
    <div className="App">
      {/* <Tem name="invrlcn" age={20} height={1.88}>
        哈哈哈哈
      </Tem>
      <Tem name="" age={0}>
        呵呵呵呵
      </Tem> */}
      <Demo name="bob" age={20}></Demo>
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <Suspense fallback="">
        <div className="mine">{useRoutes(routes)}</div>
      </Suspense>
      <ul>
        {banners.map((item) => {
          return <li key={item.imageUrl}>{item.imageUrl}</li>
        })}
      </ul>
    </div>
  )
}

export default App
