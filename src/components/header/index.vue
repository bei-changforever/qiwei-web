<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="header">
    <div class="fixed-box" :style="{ backgroundColor: slideChangeBakColor ? activeBackgroundColor : 'transparent' }">
      <div :class="['header-content', isDark ? 'is-dark' : 'is-white']">
        <div class="logo">
          <!-- <el-image :src="getAssetsFile('icon', activeBackgroundColor == '#000000' ? 'LOGO.png' : 'logo_black.png')"
            :fit="'fill'" /> -->
          <el-image :src="getAssetsFile('icon', isDark ? 'LOGO.png' : 'logo_black.png')" :fit="'fill'" />
        </div>
        <div :class="['text']">
          <div v-for="(item, index) in HeaderInfo" :class="['text-item', activeIndex == index ? 'active' : '']"
            :key="index" @click="handleSelect(index)" @mouseenter="handleMouseenter(index)"
            @mouseleave="handleMouseleave(index)">
            {{ item }}
            <div class="gbk" v-if="index == 2 && show && route.path == '/business'">
              <div class="gbk-content" @mouseleave="show = false">

                <div :class="['gbk-item', selfIndex == index ? 'active' : '']" v-for="(item, index) in selfitem"
                  @click="selfHandleSelect(index)">
                  <div class="line" v-if="selfIndex == index"></div> {{ item }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="icon" v-if="isDark">
          <el-image class="unactive-image" v-for="(item, index) in IconInfo" :key="index" :src="item" :fit="'fill'" />
          <div class="active" @click="changeMobilePhone">≡</div>
        </div>
        <div class="icon" v-else>
          <el-image class="unactive-image" v-for="(item, index) in blackIconInfo" :key="index" :src="item"
            :fit="'fill'" />
          <div class="dark-active" @click="changeMobilePhone">≡</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { getAssetsFile } from '@/utils/tools'
import { useRouter, useRoute } from 'vue-router'
import emitter from '@/utils/mitt'
const route = useRoute()
const router = useRouter()
/** props
 * @params
 * activeIndex: 当前选中的菜单索引
 * slideChangeBakColor: 是否开启背景色渐变
 * activeBackgroundColor: 背景色渐变颜色
 * isDark: 是否为暗黑模式
 */
const props = defineProps({
  swiperActiveIndex: {
    type: Number,
    default: 0
  },
  slideChangeBakColor: {
    type: Boolean,
    default: false
  },
  activeBackgroundColor: {
    type: String,
    default: '#000000'
  },
  isDark: {
    type: Boolean,
    default: true
  }
})

const HeaderInfo = ['首页', '产品中心', '业务合作', '研发中心', '关于奇伟', '联系我们']

const selfitem = ['业务范围', '服务原则', '全球供应链', '合作模式']
const selfIndex = ref(-1)
const show = ref(false)
const selfHandleSelect = (index) => {
  selfIndex.value = index
  emitter.emit('TOGGLEPAGE', selfIndex.value)
}
const handleMouseenter = (index) => {

  if (index == 2) {
    show.value = true
  }

}

const handleMouseleave = (index) => {
  // console.log(index);
  if (index !== 2) {
    show.value = false
  }

}

const changeMobilePhone = () => {
  console.log('点击');

  emitter.emit('TOGGLEMOBILEPHONE', true)
}

const IconInfo = [
  getAssetsFile('icon', 'search.png'),
  getAssetsFile('icon', 'share.png'),
  getAssetsFile('icon', 'collect.png')
]

const blackIconInfo = [
  getAssetsFile('icon', 'search_black.png'),
  getAssetsFile('icon', 'share_black.png'),
  getAssetsFile('icon', 'collect_black.png')
]

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

watch(
  () => route.path,
  (newVal, oldVal) => {
    console.log(newVal);

    if (newVal == '/') {
      router.push('/')
      activeIndex.value = 0
    }
    if (newVal == '/product/product-detail') {
      router.push('/product/product-detail')
      activeIndex.value = 1
    }
    if (newVal == '/business') {
      router.push('/business')
      activeIndex.value = 2
    }
    if (newVal == '/develop') {
      router.push('/develop')
      activeIndex.value = 3
    }
    if (newVal == '/about') {
      router.push('/about')
      activeIndex.value = 4
    }
    if (newVal == '/contact') {
      router.push('/contact')
      activeIndex.value = 5
    }
  },
  {
    deep: true,
    immediate: true
  }
)
</script>
<style lang="scss" scoped>
.header {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .fixed-box {
    width: 100%;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;

    .header-content {
      width: var(--base-width);
      height: var(--header-height);
      display: flex;
      align-items: center;

      .logo {
        width: 15%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        :deep(.el-image) {
          width: 223px;
          height: 54px;
          cursor: pointer;
        }
      }

      .text {
        width: 78%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10%;

        .text-item {
          position: relative;
          white-space: nowrap;
          font-weight: 400;
          font-size: 14px;
          cursor: pointer;
          // overflow: hidden;

          // &:hover {
          //   overflow: visible;
          // }

          &.active {
            color: #f3a7a5;
            border-bottom: 3px solid #f3a7a5;
          }

          .gbk {
            width: 200px;
            height: 176px;
            bottom: -200px;
            left: 50%;
            transform: translateX(-50%);
            position: absolute;
            background-color: white;
            border-radius: 0px 0px 10px 10px;
            box-shadow: 0 0 12px 1 #000000;

            .gbk-content {
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              color: black;

              .gbk-item {
                width: 90%;
                height: 24%;
                // background-color: orange;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                border-bottom: 1px solid #F2F2F2;
                gap: 0.2vw;

                .line {
                  width: 8px;
                  height: 2px;
                  background-color: #f3a7a5;
                }

                &.active {
                  color: #f3a7a5;
                }


                &:last-child {
                  border-bottom: 0;
                }
              }
            }
          }
        }
      }

      .icon {
        width: 15%;
        height: 100%;

        :deep(.el-image) {
          width: 20px;
          height: 20px;
        }

        cursor: pointer;
        display: flex;
        gap: 10%;
        align-items: center;
        justify-content: flex-end;

        .active {
          display: none;
        }

        .dark-active {
          display: none;
        }
      }

      &.is-dark {
        .text {
          .text-item {
            color: white;

            &.active {
              color: #f3a7a5;
              border-bottom: 3px solid #f3a7a5;
            }
          }
        }
      }

      &.is-white {
        .text {
          .text-item {
            color: black;

            &.active {
              color: #f3a7a5;
              border-bottom: 3px solid #f3a7a5;
            }
          }
        }
      }
    }
  }
}

@media (min-width: 960px) and (max-width: 1220px) {
  .header {
    .fixed-box {
      .header-content {
        .logo {
          width: 20%;
        }

        .text {
          width: 60%;
          gap: 5%;
        }

        .icon {
          width: 20%;
        }
      }
    }
  }
}

@media (max-width: 960px) {
  .header {
    .fixed-box {
      .header-content {
        padding: 10px;
        box-sizing: border-box;

        .logo {
          width: 80%;

          :deep(.el-image) {
            width: 150px;
            height: 45px;
            cursor: pointer;
          }
        }

        .text {
          display: none !important;
        }

        .icon {
          width: 20%;

          .unactive-image {
            display: none;
          }

          .active {
            width: 40px;
            height: 40px;
            border: 2px solid white;
            border-radius: 2px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            color: white;
            cursor: pointer;
          }

          .dark-active {
            width: 40px;
            height: 40px;
            border: 2px solid #000000;
            border-radius: 2px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            color: #000000;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
