import React, { Suspense, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import AppHeader from './components/app-header/app-header'
import AppFooter from './components/app-footer/app-footer'
import PlayerBar from './views/player/player-bar/player-bar'
import { currentSongAction, parseLyricAction } from '@/views/player/store'
import { useAppDispatch } from './store'

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(currentSongAction(1371780785))
    dispatch(parseLyricAction(1371780785))
  })
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter></AppFooter>
      <PlayerBar></PlayerBar>
    </div>
  )
}

export default App
