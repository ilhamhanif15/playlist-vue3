<template>
    <router-link :to="{ name:'detailSong', params: { id: _id }, query: { youtubeUrl: youtubeUrl } }">
        <div class="px-2 py-3 rounded-lg shadow-2xl bg-primary-blue transform hover:scale-105 duration-200 hover:bg-sky-700 cursor-pointer group">
            <div class="flex justify-between">
                
                <div class="flex justify-start space-x-4">
                    <div>
                    <img :src="imageUrl" class="w-20 h-20 rounded-lg" alt="" srcset="">
                    </div>
                    <div class="text-white flex flex-col justify-between">
                        <div>
                            <div class="text-lg font-semibold">{{ title }}</div>
                            <div class="text-xs mb-3">{{ singer }}</div>
                        </div>
                        <!-- <div class="text-sm">{{ timeLength }}</div> -->
                    </div>
                </div>

                <div class="self-center">
                    <img :src="iconPlay" class="w-16 h-16" alt="" srcset="">
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
import iconPlay from "../../assets/icons/SVG/Play.svg"

export default {
    props: {
        _id: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String
        },
        title: {
            type: String
        },
        singer: {
            type: String
        },
        timeLength: {
            type: String
        },
        youtubeUrl: {
            type: String
        }
    },
    setup() {
        return {
            iconPlay
        }
    }
}
</script>

<style>

</style>