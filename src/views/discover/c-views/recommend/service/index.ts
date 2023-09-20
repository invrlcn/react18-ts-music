import cnRequest from '@/service'

export function getBanners() {
  return cnRequest.get({
    url: '/banner'
  })
}

export function getHotRecommend(limit = 30) {
  return cnRequest.get({
    url: '/personalized',
    params: {
      limit
    }
  })
}

export function getNewAlbum() {
  return cnRequest.get({
    url: '/album/newest'
  })
}

export function getPlayListDetail(id: number) {
  return cnRequest.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
