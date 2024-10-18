<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { RouterView } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'
import emitter from '@/utils/mitt'
import { isMobile } from '@/utils/equipment'
import { useCounterStore } from '@/stores/screenWidth'
const { setScreenWidth } = useCounterStore()
const route = useRoute()
const router = useRouter()
const changeBackGroundColor = ref(false)
const activeColor = ref('#000000')
const isDarkPage = ref(true)
const showTop = ref(false)
const screenWidth = ref(window.innerWidth)
const handleResize = () => {
  screenWidth.value =
    window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  setScreenWidth(screenWidth.value)
}
onMounted(() => {
  emitter.on('*', (index: any, data: any) => {
    // console.log('监听到事件', index)

    if (index == 'changHeaderBack') {
      isDarkPage.value = data.isDark
      activeColor.value = data.activeBackgroundColor
      changeBackGroundColor.value = data.slideChangeBakColor
    } else if (index == 'DOMINDEX') {
      if (data == 0) {
        isDarkPage.value = true
        changeBackGroundColor.value = false
        activeColor.value = '#000000'
      }
      if (data == 1 || data == 2 || data == 3 || data == 4) {
        // console.log('执行')

        isDarkPage.value = true
        activeColor.value = 'white'
        changeBackGroundColor.value = false
      }
    } else if (index == 'TOGGLEMOBILEPHONE') {
      console.log('监听')

      showTop.value = data
    } else {
      return
    }
  })
  window.addEventListener('resize', handleResize)
})

const HeaderInfo = ['首页', '产品中心', '业务合作', '研发中心', '关于奇伟', '联系我们']
const onClickCloseIcon = () => {
  showTop.value = false
}

const activeIndex = ref(0)

const handleSelect = (key: number) => {
  showTop.value = false;
  switch (key) {
    case 0:
      activeIndex.value = 0
      router.push('/')
      emitter.emit('DOMINDEX', activeIndex.value)
      break
    case 1:
      activeIndex.value = 1
      router.push('/product/product-detail')
      emitter.emit('DOMINDEX', activeIndex.value)
      break
    case 2:
      activeIndex.value = 2
      router.push('/business')
      emitter.emit('DOMINDEX', activeIndex.value)
      break
    case 3:
      activeIndex.value = 3
      router.push('/develop')
      emitter.emit('DOMINDEX', activeIndex.value)
      break
    case 4:
      activeIndex.value = 4
      router.push('/about')
      emitter.emit('DOMINDEX', activeIndex.value)
      break
    case 5:
      activeIndex.value = 5
      router.push('/contact')
      emitter.emit('DOMINDEX', activeIndex.value)
      break
    default:
      break
  }
}

onUnmounted(() => {
  emitter.off('*')
})
</script>

<template>
  <header id="header">
    <CusHeader
      :slideChangeBakColor="changeBackGroundColor"
      :isDark="isDarkPage"
      :activeBackgroundColor="activeColor"
    />
  </header>
  <!-- <CusMainContainer/> -->
  <van-popup
    v-model:show="showTop"
    position="right"
    @click-close-icon="onClickCloseIcon"
    closeable
    :overlay="false"
    :style="{
      width: '60%',
      height: '100%',
      zIndex: 99
    }"
  >
    <div class="phone-mobile">
      <div class="conent">
        <van-cell-group>
          <van-cell
            v-for="(item, index) in HeaderInfo"
            :title="item"
            is-link
            @click="handleSelect(index)"
          />
        </van-cell-group>
      </div>

      <!-- <div class="conent">
        <div
          :class="['contet-item', activeIndex == index ? 'active' : '']"
          v-for="(item, index) in HeaderInfo"
          @click="handleSelect(index)"
        >
          {{ item }}
        </div>
      </div> -->
    </div>
  </van-popup>
  <router-view v-slot="{ Component }">
    <transition name="router_animate">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<style lang="scss" scoped>
.router_animate-enter-active {
  // animation: fadeIn 1s;
}
.router_animate-leave-active {
  // animation: fadeOut 1s;
}

.phone-mobile {
  width: 100%;
  height: 100%;
  background-color: white;

  .conent {
    width: 100%;
    height: 100%;
    // padding: 2vh;
    // box-sizing: border-box;
    // background-color: pink;
    display: flex;
    // flex-direction: column;
    align-items: center;
    justify-content: center;
    // van-cell van-cell--clickable

    :deep(.van-cell-group) {
    
      padding: 2vh;
      box-sizing: border-box;
      width: 100%;
      height: auto;
      // background-color: pink;
    }

    :deep(.van-cell) {
      width: 100%;
      // height: 20%;
      margin-bottom: 5vh;
    }

    .contet-item {
      height: 15%;
      font-size: 18px;
      cursor: pointer;

      &.active {
        color: #f3a7a5;
      }

      &:hover {
        color: #f3a7a5;
      }
    }
  }
}
</style>
