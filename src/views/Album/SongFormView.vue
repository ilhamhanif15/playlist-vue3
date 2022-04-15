<template>
    <div class="text-3xl text-white font-semibold mb-6">
        Add Song
    </div>

    <div class="mb-7">
        <AlbumListCard
            title="Palette"
            singer="IU"
            publishYear="2017"
            imageUrl="https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/IU_Palette_final.jpg/220px-IU_Palette_final.jpg"
            singerImageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRybjsuu6vJJKvB_LYmWwJI9Jpn_J5Xr9x34g&usqp=CAU"
        />
    </div>

    <div class="space-y-4 mb-10">
        <div class="space-y-1">
            <label for="title" class="text-white">Song Title</label>
            <input type="text" name="title" placeholder="First Love" class="py-2 px-3 rounded shadow-2xl bg-neutral-100 w-full">
        </div>

        <div class="space-y-1">
            <label for="title" class="text-white">Youtube Embed (URL)</label>
            <input type="text" name="title" placeholder="https://www.youtube.com/embed/8zsYZFvKniw" class="py-2 px-3 rounded shadow-2xl bg-neutral-100 w-full">
        </div>
    </div>

    <div>
        <button class="py-2 px-3 w-full bg-primary-blue text-white font-semibold uppercase rounded active:bg-sky-500 duration-200">Save</button>
    </div>
</template>

<script>
import AlbumListCard from "../../components/list/AlbumListCard.vue"

export default {
    name: "song-form-view",
    components: {
        AlbumListCard
    }
}
</script>

<style>

</style>