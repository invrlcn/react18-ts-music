import cnRequest from '@/service'

export function getCurrentSongList(ids: number) {
  return cnRequest.get({
    url: '/song/detail',
    params: { ids }
  })
}
