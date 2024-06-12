<template>
  <div class="app__sidebar left-0 top-0 h-dvh text-white max-w-xs w-full p-3 relative" v-if="!this.$route.fullPath.includes('login')">
    <div class="relative pb-2 mb-2">
      <span class="app__sidebar_headline">
        EuroTax<span>.EU</span>
      </span>
      <small class="app__sidebar_copy left-0"><br>by <b>kirchner partner GmbH</b></small>
    </div>
    <div class="app__sidebar_content">
      <div class="app__sidebar_user flex row gap-2.5 items-center">
        <img src="https://i.pravatar.cc/250" alt="" class="rounded-full w-9 h-9">
        <span class="h-auto">{{$t('hello')}} <b>{{this.tempUser.name}}</b>!</span>
      </div>
      <div class="app__sidebar_navigation mt-7">
        <ul>
          <li class="hover:cursor-pointer py-1">
            <a href="#" class="flex row items-center gap-3"><PencilIcon class="w-4 h-4"></PencilIcon>{{$t('editProfile')}}</a>
          </li>
          <li class="flex row items-center gap-4 py-1">
            <span class="flex row items-center gap-1"><GlobeAltIcon class="w-4 h-4"></GlobeAltIcon>{{$t('language')}}: </span>
            <select name="" id="" @change="changeLang($event)" class="bg-transparent">
              <option value="de">{{$t('languages.german')}}</option>
              <option value="lt">{{$t('languages.lithuanian')}}</option>
              <option value="en">{{$t('languages.english')}}</option>
            </select>
          </li>
        </ul>
      </div>
      <div class="app__sidebar_bottom absolute bottom-0 left-0 p-3 py-7 w-full">
        <a @click="logout()" href="#" class="flex row items-center gap-3"><ArrowRightEndOnRectangleIcon class="w-4 h-4"></ArrowRightEndOnRectangleIcon>{{$t('logOut')}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { PencilIcon, ArrowRightEndOnRectangleIcon, GlobeAltIcon } from '@heroicons/vue/24/solid'
export default {
  name: "AppSidebar",
  components: {
    PencilIcon,
    ArrowRightEndOnRectangleIcon,
    GlobeAltIcon
  },
  setup() {
    const {setLocale} = useI18n()
    const router = useRouter()

    return {
      setLocale,
      router
    }
  },
  data() {
    return {
      tempUser: {
        name: "Test",
        img: ""
      }
    }
  },
  methods: {
    changeLang(e) {
      this.setLocale(e.target.value)
    },
    logout() {
      this.$router.push({path: 'login'})
    }
  }
}
</script>

<style lang="scss" scoped>
.app__sidebar {
  background: #62c662;
  &_headline {
    font-size: 2.5rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: -3px;
    & > span {
      font-weight: 100;
    }
  }
  &_copy {
    font-size: .525rem;
    font-weight: 300;
    letter-spacing: 0;
    position: absolute;
    bottom: 8px;
    & > b  {
      font-size: .6rem;
    }
  }
  &_bottom {
    background: #4c9a4c;
  }
}
</style>