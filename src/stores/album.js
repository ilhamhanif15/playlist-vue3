import { defineStore } from 'pinia'

export const useAlbumStore = defineStore({
  id: 'album',
  state: () => ({
    choosenAlbum: {
        _id: null,
        songs: []
    },
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    getSong(songId) {
      return this.choosenAlbum.songs.find(x => x._id === songId)
    }
  }
})
