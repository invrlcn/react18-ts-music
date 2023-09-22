interface ILyric {
  time: number
  text: string
}
const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
export function parseLyric(lyric: string) {
  // 1.拿到每一行的歌词
  const lines: string[] = lyric.split('\n')
  // 2.对每句歌词进行解析, 解析成对应的对象
  const lyrics: ILyric[] = []
  for (const item of lines) {
    // 1.匹配结果
    const result = timeRegExp.exec(item)
    if (!result) continue

    // 2.获取每一组的时间
    const t1 = Number(result[1]) * 60 * 1000
    const t2 = Number(result[2]) * 1000
    const t3 = result[3].length === 3 ? Number(result[3]) : Number(result[3]) * 10

    // 3. 获取最终时间
    const time = t1 + t2 + t3

    // 4. 获取歌词内容
    const text = item.replace(timeRegExp, '')
    lyrics.push({ time, text })
  }
  return lyrics
}
