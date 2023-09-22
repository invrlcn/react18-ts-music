export function formatCount(count: number) {
  if (count > 100000) {
    return Math.floor(count / 10000) + '万'
  } else {
    return count
  }
}

export function formatImageSize(imgUrl: string, width: number, height: number = width) {
  return imgUrl + `?param=${width}y${height}`
}

export function formatTime(time: number) {
  // 毫秒转化成秒
  const second = time / 1000

  // 获取分钟秒钟
  const minute = Math.floor(second / 60)
  const lastSecond = Math.floor(second) % 60

  // 格式化时间
  const formatMinute = String(minute).padStart(2, '0')
  const formatSecond = String(lastSecond).padStart(2, '0')
  return `${formatMinute}: ${formatSecond}`
}
