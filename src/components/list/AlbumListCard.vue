<template>
    <router-link :to="{ name:'albumSongs', params: { id: _id } }">
        <div class="px-2 py-3 rounded-lg shadow-2xl bg-primary-blue transform hover:scale-105 duration-200 hover:bg-sky-700 cursor-pointer group">
            <div class="flex justify-between">
                
                <div class="flex justify-start space-x-4">
                    <div>
                    <img :src="imageUrl" class="w-24 h-24 rounded-lg" alt="" srcset="">
                    </div>
                    <div class="text-white flex flex-col justify-between">
                        <div>
                            <div class="text-lg font-semibold">{{ title }}</div>
                            <div class="text-xs mb-3">{{ publishYear }}</div>
                        </div>
                        <div class="text-sm font-semibold">{{ singer }}</div>
                    </div>
                </div>

                <div>
                    <img :src="singerImageUrl" 
                        class="w-12 h-12 group-hover:w-24 group-hover:h-24 duration-300 ease-in rounded-full object-cover object-center" alt="" srcset="">
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    props: {
        _id: {
            type: String,
        },
        imageUrl: {
            type: String
        },
        title: {
            type: String
        },
        publishYear: {
            type: Number
        },
        singer: {
            type: String
        },
        singerImageUrl: {
            type: String
        }
    }
}
</script>

<style>

</style>