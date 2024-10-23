<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="header" v-if="!isPproduct">
    <div
      class="fixed-box"
      :style="{ backgroundColor: slideChangeBakColor ? activeBackgroundColor : 'transparent' }"
    >
      <div :class="['header-content', isDark ? 'is-dark' : 'is-white']">
        <div class="logo">
          <!-- <el-image :src="getAssetsFile('icon', activeBackgroundColor == '#000000' ? 'LOGO.png' : 'logo_black.png')"
            :fit="'fill'" /> -->
          <el-image
            :src="getAssetsFile('icon', isDark ? 'LOGO.png' : 'logo_black.png')"
            :fit="'fill'"
          />
        </div>
        <!-- <div :class="['text']">
          <div
            v-for="(item, index) in HeaderInfo"
            :class="['text-item', activeIndex == index ? 'active' : '']"
            :key="index"
            @click="handleSelect(index)"
            @mouseenter="handleMouseenter(index)"
            @mouseleave="handleMouseleave(index)"
          >
            <span>{{ item }}</span>
            <div class="gbk" v-if="(index == 2 || index == 3 || index == 4) && show">
              <div class="gbk-content" @mouseleave="show = false">
                <div
                  :class="['gbk-item', selfIndex == index ? 'active' : '']"
                  v-for="(item, i) in list[index]"
                  @click="selfHandleSelect(i)"
                >
                  <div class="line" v-if="selfIndex == index"></div>
                  {{ item }}
                </div>
              </div>
            </div>
          </div>
        </div> -->
        <div class="text">
          <div class="text-item">
            <span :class="route.name == 'home' ? 'active' : ''" @click="handleSelect(0)">首页</span>
          </div>
          <div class="text-item">
            <span :class="route.name == 'product-detail' ? 'active' : ''" @click="handleSelect(1)"
              >产品中心</span
            >
          </div>
          <div
            class="text-item"
            @mouseenter.stop="handleMouseenter(0)"
            @mouseleave.stop="show1 = false"
          >
            <span :class="route.name == 'business' ? 'active' : ''" @click="handleSelect(2)"
              >业务合作</span
            >
            <div class="gbk" v-if="show1">
              <div class="gbk-content">
                <div
                  :class="['gbk-item', selfIndex == i ? 'active' : '']"
                  v-for="(item, i) in selfitem"
                  @click="selfHandleSelect('业务合作', i)"
                >
                  <div class="line" v-if="selfIndex == i"></div>
                  {{ item }}
                </div>
              </div>
            </div>
          </div>
          <div
            class="text-item"
            @mouseenter.stop="handleMouseenter(1)"
            @mouseleave.stop="show2 = false"
          >
            <span :class="route.name == 'develop' ? 'active' : ''" @click="handleSelect(3)"
              >研发中心</span
            >
            <div class="gbk" v-if="show2">
              <div class="gbk-content">
                <div
                  :class="['gbk-item', selfIndex2 == i ? 'active' : '']"
                  v-for="(item, i) in selfitem2"
                  @click="selfHandleSelect('研发中心', i)"
                >
                  <div class="line" v-if="selfIndex2 == i"></div>
                  {{ item }}
                </div>
              </div>
            </div>
          </div>
          <div
            class="text-item"
            @mouseenter.stop="handleMouseenter(2)"
            @mouseleave.stop="show3 = false"
          >
            <span :class="route.name == 'about' ? 'active' : ''" @click="handleSelect(4)"
              >关于奇伟</span
            >
            <div class="gbk" v-if="show3">
              <div class="gbk-content">
                <div
                  :class="['gbk-item', selfIndex3 == i ? 'active' : '']"
                  v-for="(item, i) in selfitem3"
                  @click="selfHandleSelect('关于奇伟', i)"
                >
                  <div class="line" v-if="selfIndex3 == i"></div>
                  {{ item }}
                </div>
              </div>
            </div>
          </div>
          <div class="text-item">
            <span :class="route.name == 'contact' ? 'active' : ''" @click="handleSelect(5)"
              >联系我们</span
            >
          </div>
        </div>
        <div class="icon" v-if="isDark">
          <el-image
            class="unactive-image"
            v-for="(item, index) in IconInfo"
            :key="index"
            :src="item"
            :fit="'fill'"
            @click="showSearch(index)"
          />
          <div class="active" @click="changeMobilePhone">≡</div>
        </div>
        <div class="icon" v-else>
          <el-image
            class="unactive-image"
            v-for="(item, index) in blackIconInfo"
            :key="index"
            :src="item"
            :fit="'fill'"
            @click="showSearch(index)"
          />
          <div class="dark-active" @click="changeMobilePhone">≡</div>
        </div>
      </div>
    </div>
  </div>
  <div class="header" v-else>
    <div
      class="fixed-box"
      :style="{ backgroundColor: slideChangeBakColor ? activeBackgroundColor : 'transparent' }"
    >
      <div :class="['header-content', 'is-white']">
        <div class="logo">
          <!-- <el-image :src="getAssetsFile('icon', activeBackgroundColor == '#000000' ? 'LOGO.png' : 'logo_black.png')"
            :fit="'fill'" /> -->
          <el-image :src="getAssetsFile('icon', 'logo_black.png')" :fit="'fill'" />
        </div>

        <div class="text">
          <div class="text-item">
            <span :class="route.name == 'home' ? 'active' : ''" @click="handleSelect(0)">首页</span>
          </div>
          <div class="text-item">
            <span :class="route.name == 'product-detail' ? 'active' : ''" @click="handleSelect(1)"
              >产品中心</span
            >
          </div>
          <div
            class="text-item"
            @mouseenter.stop="handleMouseenter(0)"
            @mouseleave.stop="show1 = false"
          >
            <span :class="route.name == 'business' ? 'active' : ''" @click="handleSelect(2)"
              >业务合作</span
            >
            <div class="gbk" v-if="show1">
              <div class="gbk-content">
                <div
                  :class="['gbk-item', selfIndex == i ? 'active' : '']"
                  v-for="(item, i) in selfitem"
                  @click="selfHandleSelect('业务合作', i)"
                >
                  <div class="line" v-if="selfIndex == i"></div>
                  {{ item }}
                </div>
              </div>
            </div>
          </div>
          <div
            class="text-item"
            @mouseenter.stop="handleMouseenter(1)"
            @mouseleave.stop="show2 = false"
          >
            <span :class="route.name == 'develop' ? 'active' : ''" @click="handleSelect(3)"
              >研发中心</span
            >
            <div class="gbk" v-if="show2">
              <div class="gbk-content">
                <div
                  :class="['gbk-item', selfIndex2 == i ? 'active' : '']"
                  v-for="(item, i) in selfitem2"
                  @click="selfHandleSelect('研发中心', i)"
                >
                  <div class="line" v-if="selfIndex2 == i"></div>
                  {{ item }}
                </div>
              </div>
            </div>
          </div>
          <div
            class="text-item"
            @mouseenter.stop="handleMouseenter(2)"
            @mouseleave.stop="show3 = false"
          >
            <span :class="route.name == 'about' ? 'active' : ''" @click="handleSelect(4)"
              >关于奇伟</span
            >
            <div class="gbk" v-if="show3">
              <div class="gbk-content">
                <div
                  :class="['gbk-item', selfIndex3 == i ? 'active' : '']"
                  v-for="(item, i) in selfitem3"
                  @click="selfHandleSelect('关于奇伟', i)"
                >
                  <div class="line" v-if="selfIndex3 == i"></div>
                  {{ item }}
                </div>
              </div>
            </div>
          </div>
          <div class="text-item">
            <span :class="route.name == 'contact' ? 'active' : ''" @click="handleSelect(5)"
              >联系我们</span
            >
          </div>
        </div>

        <div class="icon">
          <el-image
            class="unactive-image"
            v-for="(item, index) in blackIconInfo"
            :key="index"
            :src="item"
            :fit="'fill'"
            @click="showSearch(index)"
          />
          <div class="dark-active" @click="changeMobilePhone">≡</div>
        </div>
      </div>
    </div>
  </div>

</template>
<script setup>
import { ref, onMounted, watch } from 'vue'
import { getAssetsFile } from '@/utils/tools'
import { useRouter, useRoute } from 'vue-router'
import emitter from '@/utils/mitt'
import { ElMessage } from 'element-plus'
const route = useRoute()
const router = useRouter()
const showDialog = ref(false)
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
  },
  isPproduct: {
    type: Boolean,
    default: false
  }
})
console.log(route)
const HeaderInfo = ['首页', '产品中心', '业务合作', '研发中心', '关于奇伟', '联系我们']

const selfitem = ['业务范围', '服务原则', '全球供应链', '合作模式']
const selfitem2 = ['研发中心', '科学配方理念', '大数据平台', '专利技术']
const selfitem3 = ['关于奇伟', '公司沿革', '荣誉资质', '全球足迹']
const list = [selfitem, selfitem2, selfitem3]
const selfIndex = ref(-1)
const selfIndex2 = ref(-1)
const selfIndex3 = ref(-1)
const show1 = ref(false)
const show2 = ref(false)

const show3 = ref(false)
const selfHandleSelect = (str, index) => {
  if (str == '业务合作') {
    selfIndex.value = index
    selfIndex2.value = -1
    selfIndex3.value = -1
    if (route.path == '/business') {
      emitter.emit('TOGGLEPAGE', index)
      return
    } else {
      router.push('/business')
      setTimeout(() => {
        emitter.emit('TOGGLEPAGE', index)
      }, 300)
    }
  }
  if (str == '研发中心') {
    selfIndex2.value = index
    selfIndex.value = -1
    selfIndex3.value = -1
    if (route.path == '/develop') {
      emitter.emit('TOGGLEPAGE', index)
      return
    } else {
      router.push('/develop')
      setTimeout(() => {
        emitter.emit('TOGGLEPAGE', index)
      }, 300)
    }
  }
  if (str == '关于奇伟') {
    selfIndex3.value = index
    selfIndex.value = -1
    selfIndex2.value = -1
    if (route.path == '/about') {
      emitter.emit('TOGGLEPAGE', index)
      return
    } else {
      router.push('/about')
      setTimeout(() => {
        emitter.emit('TOGGLEPAGE', index)
      }, 300)
    }
  }
}
const handleMouseenter = (index) => {
  if (index == 0) {
    show1.value = true
    show2.value = false
    show3.value = false
  }
  if (index == 1) {
    show1.value = false
    show2.value = true
    show3.value = false
  }

  if (index == 2) {
    show1.value = false
    show2.value = false
    show3.value = true
  }
}

const showSearch = (index) => {
  console.log(index)
  if (index == 0) {
    emitter.emit('SHOWSEARCH', true)
  
  } else if (index == 1) {
    let url = window.location.href // 当前页面链接
    navigator.clipboard.writeText(url)
    ElMessage({
      message: '页面链接复制成功',
      type: 'success'
    })
  } else if (index == 2) {
    let url = window.location.href
    AddFavorite('奇伟', url)
  }
}

const handleMouseleave = (index) => {
  // console.log(index);
  if (index !== 2) {
    // show.value = false
  }
}

const changeMobilePhone = () => {
  console.log('点击')

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

const handleSelect = (key) => {
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

function AddFavorite(sURL, sTitle) {
  var sTitle = ''
  var sURL = location.href
  if (window.sidebar) return true
  try {
    window.external.addFavorite(sURL, sTitle)
  } catch (e) {
    ElMessage({
      message: '请使用Ctrl+D进行添加'
    })
  }
  return false
}

console.log('mounted===>', route.name)
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
  zoom: 1;
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
        // background: pink;
        .text-item {
          position: relative;
          white-space: nowrap;
          font-weight: 400;
          font-size: 14px;
          cursor: pointer;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          // background: orange;
          border-bottom: 0;
          border: none;
          .active {
            color: #f3a7a5;
            border-bottom: 3px solid #f3a7a5;
          }

          .gbk {
            width: 200px;
            height: 176px;
            bottom: -176px;
            left: 50%;
            transform: translateX(-50%);
            position: absolute;
            background-color: white;
            border-radius: 0px 0px 10px 10px;
            box-shadow:
              rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
              rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

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
                border-bottom: 1px solid #f2f2f2;
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

      &.is-product {
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
