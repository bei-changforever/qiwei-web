<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { RouterView } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'
import emitter from '@/utils/mitt'
const route = useRoute()
const router = useRouter()

const changeBackGroundColor = ref(false)
const activeColor = ref('#000000')
const isDarkPage = ref(true)
const showTop = ref(false)
onMounted(() => {

  emitter.on('*', (index: any, data: any) => {

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
      if (data == 1 || data == 4) {
        isDarkPage.value = true
        activeColor.value = 'white'
        changeBackGroundColor.value = false
      }
    } else if (index == 'TOGGLEMOBILEPHONE') {
      console.log("监听");

      showTop.value = data
    }
    else {
      return
    }
  })
})

const HeaderInfo = ['首页', '产品中心', '业务合作', '研发中心', '关于奇伟', '联系我们']
const onClickCloseIcon = () => {
  showTop.value = false
}


const activeIndex = ref(0)

const handleSelect = (key: number) => {
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
// console.log(route.path);

// watch(
//   () => route.path,
//   (newVal, oldVal) => {
//     console.log(newVal);

//     if (newVal == '/') {
//       router.push('/')
//       activeIndex.value = 0
//     }
//     if (newVal == '/product/product-detail') {
//       router.push('/product/product-detail')
//       activeIndex.value = 1
//     }
//     if (newVal == '/business') {
//       router.push('/business')
//       activeIndex.value = 2
//     }
//     if (newVal == '/develop') {
//       router.push('/develop')
//       activeIndex.value = 3
//     }
//     if (newVal == '/about') {
//       router.push('/about')
//       activeIndex.value = 4
//     }
//     if (newVal == '/contact') {
//       router.push('/contact')
//       activeIndex.value = 5
//     }
//   },
//   {
//     deep: true,
//     immediate: true
//   }
// )
onUnmounted(() => {
  emitter.off('*')
})
</script>

<template>
  <header id="header">
    <CusHeader :slideChangeBakColor="changeBackGroundColor" :isDark="isDarkPage" :activeBackgroundColor="activeColor" />
  </header>
  <!-- <CusMainContainer/> -->
  <van-popup v-model:show="showTop" position="right" @click-close-icon="onClickCloseIcon" closeable :overlay="false"
    :style="{
      width: '30%', height: '100%', zIndex: 99
    }">

    <div class="phone-mobile">

      <div class="conent">

        <div :class="['contet-item', activeIndex == index ? 'active' : '']" v-for="(item, index) in HeaderInfo"
          @click="handleSelect(index)">
          {{ item }}
        </div>
      </div>
    </div>

  </van-popup>
  <RouterView />
</template>s

<style lang="scss" scoped>
.phone-mobile {
  width: 100%;
  height: 100%;
  background-color: white;

  .conent {
    width: 100%;
    height: 100%;
    padding: 10vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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
