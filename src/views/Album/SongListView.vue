<template>
  <div class="flex justify-between item-">
    <div class="text-3xl text-white font-semibold mb-12">
      Songs
    </div>
    <div>
      <router-link :to="{ name: 'addSong' }" class="cursor-pointer">
        <font-awesome-icon icon="plus" class="text-white text-4xl" />
      </router-link>
    </div>
  </div>

  <div class="flex flex-col space-y-4">

    <div
      v-for="song in songs"
      :key="song"
    >
      <SongListCard
        :youtubeUrl="song.youtubeUrl"
        :_id="song._id"
        :title="song.title"
        :singer="album.artist.name"
        timeLength="3:10"
        :imageUrl="album.imageUrl"
      />
    </div>

  </div>

</template>

<script>
import { ref } from 'vue'
import SongListCard from "../../components/list/SongListCard.vue"
import api from "../../plugins/axios"
import { useRoute } from 'vue-router'
import { useAlbumStore } from "../../stores/album"

export default {
    name: "song-list-view",
    components: {
      SongListCard
    },
    setup() {
      const route = useRoute()
      const albumStore = useAlbumStore()

      const songs = ref([])
      const album = ref(null)

      const fetchSong = (albumId) => {
        return api.get(`album/${albumId}`).then(resp => {
          const data = resp.data.data
          album.value = data
          albumStore.choosenAlbum = data
          songs.value = data.songs
        })
      }

      fetchSong(route.params.id);


      return {
        songs,
        album
      }
    }
}
</script>

<style>

</style>