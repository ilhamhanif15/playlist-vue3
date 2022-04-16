import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/album/:id/songs',
      name: 'albumSongs',
      component: () => import('../views/Album/SongListView.vue')
    },
    {
      path: '/album/add',
      name: 'addAlbum',
      component: () => import('../views/Album/AlbumFormView.vue')
    },
    {
      path: '/album/:id/add-song',
      name: 'addSong',
      component: () => import('../views/Album/SongFormView.vue')
    },
    {
      path: '/songs/:id',
      name: 'detailSong',
      component: () => import('../views/Album/SongDetailView.vue')
    },
    {
      path: '/artists/add',
      name: 'addArtist',
      component: () => import('../views/Artist/ArtistFormView.vue')
    },
  ]
})

export default router
