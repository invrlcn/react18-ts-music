import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

const Discover = lazy(() => import('@/views/discover/discover'))

const Album = lazy(() => import('@/views/discover/c-views/album/album'))
const Artist = lazy(() => import('@/views/discover/c-views/artist/artist'))
const Djradio = lazy(() => import('@/views/discover/c-views/djradio/djradio'))
const Ranking = lazy(() => import('@/views/discover/c-views/ranking/ranking'))
const Recommend = lazy(() => import('@/views/discover/c-views/recommend/recommend'))
const Songs = lazy(() => import('@/views/discover/c-views/songs/songs'))

const Download = lazy(() => import('@/views/download/download'))
const Focus = lazy(() => import('@/views/focus/focus'))
const Mine = lazy(() => import('@/views/mine/mine'))
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover"></Navigate>
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend"></Navigate>
      },
      {
        path: '/discover/album',
        element: <Album />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/djradio',
        element: <Djradio />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/songs',
        element: <Songs />
      }
    ]
  },
  {
    path: '/download',
    element: <Download />
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/mine',
    element: <Mine />
  }
]

export default routes
