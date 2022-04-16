<template>
  <div class="flex justify-between item-">
    <div class="text-3xl text-white font-semibold mb-12">
      Albums
    </div>
    <div>
      <router-link :to="{ name: 'addAlbum' }" class="cursor-pointer">
        <font-awesome-icon icon="plus" class="text-white text-4xl" />
      </router-link>
    </div>
  </div>

  <div class="flex flex-col space-y-4">

    <div
      v-for="album in albums"
      :key="album._id"
    >
      <AlbumListCard
        :_id="album._id"
        :title="album.title"
        :singer="album.artist.name"
        :publishYear="album.publishYear"
        :imageUrl="album.imageUrl"
        :singerImageUrl="album.artist.imageUrl"
      />
    </div>

  </div>
</template>

<script>
import AlbumListCard from "../components/list/AlbumListCard.vue"
import iconPlus from "../assets/icons/SVG/Plus.svg"
import api from "../plugins/axios"
import { ref } from 'vue'

export default {
  name: "home-view",
  components: {
    AlbumListCard
  },
  setup() {
    
    const albums = ref([])
    const fetchAlbums = () => {
      return api.get("album").then(resp => {
        const data = resp.data.data
        albums.value = data
      })
    }

    fetchAlbums()

    return {
      iconPlus,
      albums
    }
  }
}
</script>

<style>

</style>