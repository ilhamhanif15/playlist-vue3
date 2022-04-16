<template>
    <div class="text-3xl text-white font-semibold mb-6">
        Add New Artist
    </div>

    <form @submit.prevent="saveArtist">
        <div class="space-y-4 mb-10">
            <div class="space-y-1">
                <label for="name" class="text-white">Name</label>
                <input type="text" name="name" v-model="artist.name" placeholder="Ed Sheeran" class="py-2 px-3 rounded shadow-2xl bg-neutral-100 w-full">
            </div>

            <div class="space-y-1">
                <label for="imageUrl" class="text-white">Image (URL)</label>
                <input type="text" name="imageUrl" v-model="artist.imageUrl" placeholder="https://www.image.com/test.png" class="py-2 px-3 rounded shadow-2xl bg-neutral-100 w-full">
            </div>
        </div>

        <div>
            <BaseButton
                buttonType="submit"
                :loading="isSaveLoading"
                :disabled="isSaveLoading"
                type="Primary"
                class="py-2 px-3 w-full bg-primary-blue text-white font-semibold uppercase rounded active:bg-sky-500 duration-200"
            >Save</BaseButton>
        </div>
    </form>
</template>

<script>
import api from '../../plugins/axios'

export default {
    name: "song-form-view",
    data: () => ({
        artist: {
            name: "",
            imageUrl: ""
        },
        isSaveLoading: false
    }),
    methods: {
        async saveArtist() {
            this.isSaveLoading = true
            await api.post('artist', this.artist)
            this.isSaveLoading = false
        }
    }
}
</script>

<style>

</style>