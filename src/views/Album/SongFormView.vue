<template>
    <div class="text-3xl text-white font-semibold mb-6">
        Add Song
    </div>

    <div class="mb-7">
        <template v-if="album">
            <AlbumListCard
                :_id="album._id"
                :title="album.title"
                :singer="album.artist.name"
                :publishYear="album.publishYear"
                :imageUrl="album.imageUrl"
                :singerImageUrl="album.artist.imageUrl"
            />
        </template>
    </div>
    
    <form @submit.prevent="saveSong">
        <div class="space-y-4 mb-10">
            <div class="space-y-1">
                <label for="title" class="text-white">Song Title</label>
                <input type="text" name="title" v-model="songForm.title" placeholder="First Love" class="py-2 px-3 rounded shadow-2xl bg-neutral-100 w-full">
            </div>

            <div class="space-y-1">
                <label for="youtube_url" class="text-white">Youtube Embed (URL)</label>
                <input type="text" name="youtube_url" v-model="songForm.youtubeUrl" placeholder="https://www.youtube.com/embed/8zsYZFvKniw" class="py-2 px-3 rounded shadow-2xl bg-neutral-100 w-full">
            </div>
        </div>

        <div>
            <BaseButton buttonType="submit" :loading="isSaveLoading" class="py-2 px-3 w-full bg-primary-blue text-white font-semibold uppercase rounded active:bg-sky-500 duration-200" type="Primary">Save</BaseButton>
        </div>
    </form>
</template>

<script>
import { reactive, ref } from 'vue'
import AlbumListCard from "../../components/list/AlbumListCard.vue"
import api from "../../plugins/axios"
import { useRouter, useRoute } from 'vue-router'

export default {
    name: "song-form-view",
    components: {
        AlbumListCard
    },
    setup() {
        const route     = useRoute()
        const showAlbum = ref(false)
        const album     = ref(null)

        const fetchAlbum = (albumId) => {
            return api.get(`album/${albumId}`).then(resp => {
                const data = resp.data.data
                album.value = data
                showAlbum.value = true
            })
        }

        fetchAlbum(route.params.id)

        // Song Form
        const songForm  = ref({
            title: "",
            youtubeUrl: "",
            album: route.params.id
        })
        const isSaveLoading = ref(false)
        const saveSong = async () => {
            isSaveLoading.value = true
            await api.post(`song`, songForm.value)
            isSaveLoading.value = false
        }

        return {
            album,
            showAlbum,
            songForm,
            isSaveLoading,
            saveSong
        }

    }
}
</script>

<style>

</style>