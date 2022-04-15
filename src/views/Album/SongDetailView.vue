<template>
    <div>
      <img :src="song.albumImageUrl" class="w-full h-full rounded-lg mb-7" alt="" srcset="">
      
      <div class="text-white space-y-1 mb-7">
        <div class="text-4xl font-semibold">
          Palette
        </div>
        <div class="text-lg">
          IU
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
        <div>02:30</div>
      </div>

      <div>
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

      <vue-plyr ref="plyr">
        <div class="plyr__video-embed" v-show="false">
          <iframe
            src="https://www.youtube.com/embed/d9IxdwEFk1c?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
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

export default {
    data: () => ({
      song: {
        albumImageUrl: "https://i.imgur.com/guFdJlB.jpeg"
      },
      isPlaying: false,
      progressPercentage: '0%',
      currentTimeString: "00:00"
    }),
    setup() {
      return {
        iconPlay,
        iconPause,
        iconNext,
        iconPrev,
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
      }
    },
    mounted() {
      this.$refs.plyr.player.on("timeupdate", e => {
        const currentTime = e.detail.plyr.currentTime

        this.progressPercentage = `${ currentTime/e.detail.plyr.duration * 100 }%`
        this.currentTimeString  = new Date(currentTime * 1000).toISOString().slice(14, 19)
      })
    }
}
</script>

<style>

</style>