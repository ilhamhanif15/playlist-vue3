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

    <SongListCard
      title="Palette"
      singer="IU"
      timeLength="3:10"
      imageUrl="https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/IU_Palette_final.jpg/220px-IU_Palette_final.jpg"
    />
    
    <SongListCard
      title="Ending Scene"
      singer="IU"
      timeLength="3:10"
      imageUrl="https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/IU_Palette_final.jpg/220px-IU_Palette_final.jpg"
    />

  </div>

</template>

<script>
import SongListCard from "../../components/list/SongListCard.vue"

export default {
    name: "song-list-view",
    components: {
      SongListCard
    }
}
</script>

<style>

</style>