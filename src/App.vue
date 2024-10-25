<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick, reactive } from 'vue'
import { RouterView } from 'vue-router'
import { useRouter, useRoute } from 'vue-router'
import emitter from '@/utils/mitt'
import { showDialog } from 'vant'
import { Search } from '@element-plus/icons-vue'
import { useCounterStore } from '@/stores/screenWidth'
import { useConfig } from '@/stores/config'
import { getBaseInfo } from '@/api/index'
const { setScreenWidth } = useCounterStore()
const { setconfig } = useConfig()
const route = useRoute()
const router = useRouter()
const changeBackGroundColor = ref(false)
const activeColor = ref('#000000')
const isProduct = ref(false)
const isDarkPage = ref(true)
const showTop = ref(false)
const screenWidth = ref(window.innerWidth)

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: ''
})

const onSubmit = () => {
  console.log('submit!')
}

const initConfig = async () => {
  let res = await getBaseInfo()
  if (res.status == 1) {
    setconfig(res.data)
    document.title = res.data.web_name
  }
}
const handleResize = () => {
  screenWidth.value =
    window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
  setScreenWidth(screenWidth.value)
  // setScreenCompatibility()
}

/**
 * 需要适配的稿纸尺寸
 * 默认尺寸1920*1080（根据实际情况修改）
 * @type {{width: number, height: number}}
 */
const sketch = {
  width: 1920,
  height: 1080
}

/**
 * 设置屏幕兼容性
 */
const setScreenCompatibility = () => {
  // 计算屏幕实际分辨率宽高比例为 R
  const R = window.innerWidth / window.innerHeight
  // 计算设计稿分辨率宽度与屏幕实际分辨率宽度比 Rw
  const Rw = sketch.width / window.innerWidth
  // 计算设计稿分辨率高度与屏幕实际分辨率高度比 为 Rh
  const Rh = sketch.height / window.innerHeight
  let width = sketch.width
  let height = sketch.width / R
  let scale = 1 / Rw
  if (Rw < Rh) {
    width = sketch.height * R
    height = sketch.height
    scale = 1 / Rh
  }
  // 设置body拉伸（尺寸）
  document.body.style.width = width + 'px'
  document.body.style.height = height + 'px'
  // 设置body缩放
  document.body.style.transform = `scale(${scale})`
  document.body.style.transformOrigin = '0 0'
  document.body.style.MozTransform = `scale(${scale})`
  document.body.style.MozTransformOrigin = '0 0'
}
onMounted(() => {
  nextTick(() => {
    initConfig()
    if (route.name == 'product-detail' || route.name == 'product-info') {
      isProduct.value = true
    }
    emitter.on('*', (index, data) => {
      if (index == 'changHeaderBack') {
        isDarkPage.value = data.isDark
        activeColor.value = data.activeBackgroundColor
        changeBackGroundColor.value = data.slideChangeBakColor
      } else if (index == 'DOMINDEX') {
        isProduct.value = false
        if (data == 0) {
          isDarkPage.value = true
          changeBackGroundColor.value = false
          activeColor.value = '#000000'
        }
        if (data == 1) {
          isProduct.value = true
        }
        if (data == 2 || data == 3 || data == 4) {
          isProduct.value = false
          isDarkPage.value = true
          activeColor.value = 'white'
          changeBackGroundColor.value = false
        }
      } else if (index == 'SHOWSEARCH') {
        showSearch.value = data
      } else if (index == 'TOGGLEMOBILEPHONE') {
        showTop.value = data
      } else {
        return
      }
    })
  })

  window.addEventListener('resize', handleResize)
})

const HeaderInfo = ['首页', '产品中心', '业务合作', '研发中心', '关于奇伟', '联系我们']
const onClickCloseIcon = () => {
  showTop.value = false
}

const activeIndex = ref(0)

const handleSelect = (key) => {
  showTop.value = false
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

const showSearch = ref(false)
const search = () => {
  console.log(form.name)

  showSearch.value = false

  showDialog({
    title: '搜索内容',
    message: '暂无此收录'
  }).then(() => {
    // on close
  })
}
onUnmounted(() => {
  emitter.off('*')
})

watch(
  () => route.path,
  (newVal, oldVal) => {
    console.log(newVal)

    if (newVal == '/product/product-detail' || newVal == '/product/product-info') {
      isProduct.value = true
    } else {
      isProduct.value = false
    }
  },
  {
    deep: true,
    immediate: true
  }
)
</script>

<template>
  <!-- 顶部弹出 -->
  <!-- <van-popup v-model:show="showSearch" position="top" :style="{ height: '8%' }">
    <el-form :model="form" label-width="auto" style="max-width: 100%">
      <el-form-item>
        <div class="search-box">
          <el-input v-model="form.name" placeholder="请输入关键字" clearable>
            <template #prefix>
              <el-icon><Search /></el-icon>
            </template>
          </el-input>
          <el-button type="primary" @click="search">搜索</el-button>
        </div>
      </el-form-item>
    </el-form>
  </van-popup> -->
  <header id="header">
    <CusHeader
      :slideChangeBakColor="changeBackGroundColor"
      :isDark="isDarkPage"
      :activeBackgroundColor="activeColor"
      :isPproduct="isProduct"
    />
  </header>

  <van-popup
    v-model:show="showTop"
    position="right"
    @click-close-icon="onClickCloseIcon"
    closeable
    :overlay="true"
    :style="{
      width: '60%',
      height: '100%'
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
    </div>
  </van-popup>
  <!-- <van-dialog v-model:show="showDialog" title="搜索内容" show-cancel-button> </van-dialog> -->
  <router-view v-slot="{ Component }">
    <transition>
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<style lang="scss" scoped>
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
.search-box {
  width: 100%;
  display: flex;
  gap: 1vw;
  padding: 2vh;
  box-sizing: border-box;
}
</style>
