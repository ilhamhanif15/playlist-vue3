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

    <AlbumListCard
      title="Palette"
      singer="IU"
      publishYear="2017"
      imageUrl="https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/IU_Palette_final.jpg/220px-IU_Palette_final.jpg"
      singerImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRybjsuu6vJJKvB_LYmWwJI9Jpn_J5Xr9x34g&usqp=CAU"
    />
    
    <AlbumListCard
      title="Divide"
      singer="Ed Sheeran"
      publishYear="2017"
      imageUrl="https://upload.wikimedia.org/wikipedia/id/thumb/4/45/Divide_cover.png/220px-Divide_cover.png"
      singerImageUrl="https://i.scdn.co/image/ab6761610000e5eb12a2ef08d00dd7451a6dbed6"
    />

  </div>
</template>

<script>
import AlbumListCard from "../components/list/AlbumListCard.vue"
import iconPlus from "../assets/icons/SVG/Plus.svg"

export default {
  name: "home-view",
  components: {
    AlbumListCard
  },
  setup() {
    return {
      iconPlus
    }
  }
}
</script>

<style>

</style>