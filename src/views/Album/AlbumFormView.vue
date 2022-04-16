<template>
    <div class="text-3xl text-white font-semibold mb-12">
        Add Album
    </div>

    <form @submit.prevent="saveAlbum">
        <div class="space-y-4 mb-10">
            <div class="space-y-1">
                <label for="artist" class="text-white">Artist</label>
                <div class="flex space-x-2">
                    <select name="artist" v-model="album.artist" class="py-2 px-3 rounded shadow-2xl bg-neutral-100 w-4/5">
                        <option disabled value="">Select Artist</option>
                        <option v-for="artist in artistOptions" :key="artist._id" :value="artist._id">
                            {{ artist.name }}
                        </option>
                    </select>
                    <router-link :to="{ name: 'addArtist' }" class="w-1/5">
                        <BaseButton type="Success" class="bg-green-500 w-full" size="small">
                            <font-awesome-icon icon="plus"></font-awesome-icon>
                        </BaseButton>
                    </router-link>
                </div>
            </div>

            <div class="space-y-1">
                <label for="title" class="text-white">Name/Title</label>
                <input type="text" name="title" v-model="album.title" placeholder="My First Album" class="py-2 px-3 rounded shadow-2xl bg-neutral-100 w-full">
            </div>

            <div class="space-y-1">
                <label for="imageUrl" class="text-white">Image (URL)</label>
                <input type="text" name="imageUrl" v-model="album.imageUrl" placeholder="http:://image-album.com/example.jpg" class="py-2 px-3 rounded shadow-2xl bg-neutral-100 w-full">
            </div>

            <div class="space-y-1">
                <label for="publishYear" class="text-white">Publish Year</label>
                <input type="number" name="publishYear" v-model="album.publishYear" placeholder="2022" class="py-2 px-3 rounded shadow-2xl bg-neutral-100 w-full">
            </div>
            
            <div class="space-y-1">
                <label for="description" class="text-white">Description</label>
                <textarea name="description" v-model="album.description" class="py-2 px-3 rounded shadow-2xl bg-neutral-100 w-full" placeholder="Describe the album" rows="3"></textarea>
            </div>
        </div>

        <div>
            <BaseButton buttonType="submit" :loading="isSaveLoading" class="py-2 px-3 w-full bg-primary-blue text-white font-semibold uppercase rounded active:bg-sky-500 duration-200" type="Primary">Save</BaseButton>
        </div>
    </form>
</template>

<script>
import api from "../../plugins/axios"

export default {
    name: "album-form-view",
    data: () => ({
        album: {
            title: "",
            imageUrl: "",
            publishYear: "",
            description: "",
            artist: ""
        },
        artistOptions: [],
        isSaveLoading: false
    }),
    methods: {
        async saveAlbum() {
            this.isSaveLoading = true
            await api.post("album", this.album)
            this.isSaveLoading = false
        }
    },
    created() {
        api.get("artist").then(resp => {
            this.artistOptions = resp.data.data
        })
    }
}
</script>

<style>

</style>