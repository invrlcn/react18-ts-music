import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getArtistList,
  getBanners,
  getHotRecommend,
  getNewAlbum,
  getPlayListDetail
} from '../service'

// 异步发送网络请求派发事件方式一:
// export const getBannersAction = createAsyncThunk('banner', async (arg, { dispatch }) => {
//   const res = await getBanners()
//   console.log(res, '---------')
//   dispatch(changeBannersActions(res.banners))
//   // return res.banners
// })

export const getBannersAction = createAsyncThunk('banner', async () => {
  const res = await getBanners()
  return res.banners
})

export const getSongItemAction = createAsyncThunk('song', async () => {
  const res = await getHotRecommend(8)
  return res.result
})

export const getNewAlbumAction = createAsyncThunk('newAlbum', async () => {
  const res = await getNewAlbum()
  return res.albums
})

export const getRankingAction = createAsyncThunk('ranking', async () => {
  const promises: Promise<any>[] = []
  const rankingId = [19723756, 3779629, 2884035]
  for (const id of rankingId) {
    promises.push(getPlayListDetail(id))
  }
  return Promise.all(promises).then((res) => {
    return res
  })
})

export const getArtistListAction = createAsyncThunk('artist', async () => {
  const res = await getArtistList(5)
  return res.artists
})

interface IRecommendData {
  banners: any[]
  songs: any[]
  newAlbums: any[]
  ranking: any[]
  artists: any[]
}
const initialState: IRecommendData = {
  banners: [],
  songs: [],
  newAlbums: [],
  ranking: [],
  artists: []
}

const recommendStore = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    // changeBannersActions(state, { payload }) {
    //   state.banners = payload
    // }
  },
  // 异步发送网络请求派发事件方式二:
  extraReducers: (builder) => {
    builder.addCase(getBannersAction.pending, () => {
      console.log('pending~')
    })
    builder.addCase(getBannersAction.fulfilled, (state, { payload }) => {
      state.banners = payload
    })
    builder.addCase(getBannersAction.rejected, () => {
      console.log('rejected~')
    })
    builder.addCase(getSongItemAction.fulfilled, (state, { payload }) => {
      state.songs = payload
    })
    builder.addCase(getNewAlbumAction.fulfilled, (state, { payload }) => {
      state.newAlbums = payload
    })
    builder.addCase(getRankingAction.fulfilled, (state, { payload }) => {
      state.ranking = payload
    })
    builder.addCase(getArtistListAction.fulfilled, (state, { payload }) => {
      state.artists = payload
    })
  }
})

// export const { changeBannersActions } = recommendStore.actions
export default recommendStore.reducer
