<template>
    <div>
      <img :src="album.imageUrl" class="w-full h-full rounded-lg mb-7" alt="" srcset="">
      
      <div class="text-white space-y-1 mb-7">
        <div class="text-4xl font-semibold">
          {{ song.title }}
        </div>
        <div class="text-lg">
          {{ album.artist.name }}
        </div>
      </div>
        
      <div class="relative pb-2">
        <div class="w-full h-1 bg-primary-blue rounded-lg absolute"></div>
        <div class="h-1 bg-sky-400 rounded-lg absolute" :style="{
          width: progressPercentage
        }"></div>
      </div>

      <div class="flex justify-between items-center text-white text-sm">
        <div>{{ currentTimeString }}</div>
        <div>{{ timeLengthString }}</div>
      </div>

      <div class="mb-16">
        <div class="flex justify-center items-center">
          <button>
            <img :src="iconPrev" class="w-20 h-20" alt="" srcset="">
          </button>
          <button @click="togglePlay">
            <img v-if="!isPlaying" :src="iconPlay" class="w-32 h-32" alt="" srcset="">
            <img v-else-if="isPlaying" :src="iconPause" class="w-32 h-32" alt="" srcset="">
          </button>
          <button>
            <img :src="iconNext" class="w-20 h-20" alt="" srcset="">
          </button>
        </div>
      </div>

      <div class="space-y-3">
        <div class="bg-primary-blue pl-0 pt-0 pb-0 px-3 rounded">
          <div class="flex justify-start items-start space-x-3">
            <div>
              <img :src="album.artist.imageUrl" class="w-28 h-28 rounded-l object-cover" alt="">
            </div>
            <div class="text-white py-3">
              <div class="text-xs">Artist</div>
              <div class="text font-bold">{{ album.artist.name }}</div>
            </div>
          </div>
        </div>
        
        <div class="bg-primary-blue pl-0 py-0 px-3 rounded">
          <div class="flex justify-start items-start space-x-3">
            <div>
              <img :src="album.imageUrl" class="w-28 h-28 rounded-l object-cover" alt="">
            </div>
            <div class="text-white py-3">
              <div class="space-y-2">
                <div>
                  <div class="text-xs">Album</div>
                  <div class="text font-bold">{{ album.title }}</div>
                </div>
                <div>
                  <div class="text-xs">Year</div>
                  <div class="text font-bold">{{ album.publishYear }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <vue-plyr ref="plyr">
        <div class="plyr__video-embed" v-show="false">
          <iframe
            :src="youtubeUrl"
            allowfullscreen
            allowtransparency
          ></iframe>
        </div>
      </vue-plyr>

    </div>
</template>

<script>
import iconPlay from "../../assets/icons/SVG/Play.svg"
import iconPause from "../../assets/icons/SVG/Pause.svg"
import iconNext from "../../assets/icons/SVG/Next.svg"
import iconPrev from "../../assets/icons/SVG/Prev.svg"
import { useAlbumStore } from "../../stores/album"
import api from "../../plugins/axios"

export default {
    data: () => ({
      album: {
        imageUrl: "",
        artist: {
          name: null
        }
      },
      song: {
        youtubeUrl: null
      },
      isPlaying: false,
      progressPercentage: '0%',
      currentTimeString: "00:00",
      timeLengthString: "00:00"
    }),
    setup() {
      return {
        iconPlay,
        iconPause,
        iconNext,
        iconPrev,
      }
    },
    computed: {
      youtubeUrl() {
        return `${this.$route.query.youtubeUrl}?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1`;
      }
    },
    methods: {
      togglePlay() {
        if (this.$refs.plyr.player.playing) {
          this.$refs.plyr.player.pause()
          this.isPlaying = false
        }
        else {
          this.$refs.plyr.player.play()
          this.isPlaying = true
        }
      },
      convertToTimeString(time) {
        return new Date(time * 1000).toISOString().slice(14, 19)
      }
    },
    created() {
      api.get(`song/${this.$route.params.id}`).then(resp => {
        const data = resp.data.data

        this.song   = data
        this.album  = data.album
      })
    },
    mounted() {
      this.$refs.plyr.player.on("timeupdate", e => {
        const currentTime = e.detail.plyr.currentTime

        this.progressPercentage = `${ currentTime/e.detail.plyr.duration * 100 }%`
        this.currentTimeString  = this.convertToTimeString(currentTime)
      })

      this.$refs.plyr.player.on("ready", e => {
        this.timeLengthString = this.convertToTimeString(e.detail.plyr.duration)
      })
    }
}
</script>

<style>

</style>