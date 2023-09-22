import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getCurrentSongList, getSongLyric } from '../service'
import type { RootState } from '@/store'
import { parseLyric } from '@/utils/pase-lyric'
interface IAsyncThunkState {
  state: RootState
}
export const currentSongAction = createAsyncThunk<void, number, IAsyncThunkState>(
  'currentSong',
  async (id, { dispatch, getState }) => {
    // 准备播放某一首歌曲时, 分成两种情况
    // 1.从列表尝试是否可以获取到这首歌
    const playSongList = getState().player.playSongList
    const findIndex = playSongList.findIndex((item) => item.id === id)
    if (findIndex === -1) {
      console.log(111)
      // 没有找到相同的
      const res = await getCurrentSongList(id)
      const song = res.songs[0]

      // 把歌曲放到列表中
      const newPlaySongList = [...playSongList]
      newPlaySongList.push(song)
      dispatch(changeCurrentSongAction(song))
      dispatch(changePlaySongList(newPlaySongList))
      dispatch(changePlaySongIndex(newPlaySongList.length - 1))
    } else {
      console.log(222)
      const song = playSongList[findIndex]
      dispatch(changeCurrentSongAction(song))
      dispatch(changePlaySongIndex(findIndex))
    }
  }
)

export const parseLyricAction = createAsyncThunk<void, number, IAsyncThunkState>(
  'lyric',
  async (id, { dispatch }) => {
    const res = await getSongLyric(id)
    const lyrics = parseLyric(res.lrc.lyric)
    dispatch(changeLyricAction(lyrics))
  }
)

interface IPlayer {
  currentSong: any
  playSongList: any[]
  playSongIndex: number
  lyricData: []
  lyricIndex: number
}
const initialState: IPlayer = {
  currentSong: {},
  playSongList: [
    {
      name: '起风了',
      id: 1330348068,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 12085562,
          name: '买辣椒也用券',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 42,
      crbt: null,
      cf: '',
      al: {
        id: 74715426,
        name: '起风了',
        picUrl: 'https://p1.music.126.net/diGAyEmpymX8G7JcnElncQ==/109951163699673355.jpg',
        tns: [],
        pic_str: '109951163699673355',
        pic: 109951163699673360
      },
      dt: 325868,
      h: {
        br: 320000,
        fid: 0,
        size: 13037236,
        vd: -77525,
        sr: 44100
      },
      m: {
        br: 192000,
        fid: 0,
        size: 7822359,
        vd: -74987,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 5214920,
        vd: -73504,
        sr: 44100
      },
      sq: {
        br: 985873,
        fid: 0,
        size: 40158105,
        vd: -77524,
        sr: 44100
      },
      hr: {
        br: 2832349,
        fid: 0,
        size: 115371553,
        vd: -77475,
        sr: 88200
      },
      a: null,
      cd: '1',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 536879104,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 42,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 10782615,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 1415923,
      publishTime: 0
    },
    {
      name: ' 幻听 ',
      id: 167655,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 5771,
          name: ' 许嵩 ',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '600902000009334954',
      fee: 1,
      v: 52,
      crbt: null,
      cf: '',
      al: {
        id: 16932,
        name: ' 梦游计 ',
        picUrl: 'https://p2.music.126.net/ifjKrYPuGzRHlbVDNScQfA==/109951166118946328.jpg',
        tns: [],
        pic_str: '109951166118946328',
        pic: 109951166118946340
      },
      dt: 273266,
      h: {
        br: 320000,
        fid: 0,
        size: 10932811,
        vd: -26180,
        sr: 44100
      },
      m: {
        br: 192000,
        fid: 0,
        size: 6559704,
        vd: -23577,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 4373151,
        vd: -21810,
        sr: 44100
      },
      sq: {
        br: 783967,
        fid: 0,
        size: 26779043,
        vd: -26177,
        sr: 44100
      },
      hr: null,
      a: null,
      cd: '1',
      no: 2,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 1,
      s_id: 0,
      mark: 8192,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 52,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 22036,
      mv: 304279,
      publishTime: 1341936000007
    }
  ],
  playSongIndex: -1,
  lyricData: [],
  lyricIndex: -1
}
const playerStore = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
    changeLyricAction(state, { payload }) {
      state.lyricData = payload
    },
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload
    },
    changePlaySongList(state, { payload }) {
      state.playSongList = payload
    },
    changePlaySongIndex(state, { payload }) {
      state.playSongIndex = payload
    }
  }
})

export const {
  changeCurrentSongAction,
  changeLyricAction,
  changeLyricIndexAction,
  changePlaySongList,
  changePlaySongIndex
} = playerStore.actions
export default playerStore.reducer
