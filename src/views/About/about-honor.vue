<template>
  <div class="about-honor" id="about-honor">
    <div class="about-honor-base-container">
      <div class="about-base-container-top">
        <div class="T-left">
          <div class="topic">
            <div class="block"></div>
            <div class="text">PATENT</div>
          </div>
          <div class="name">专利技术</div>
        </div>
        <div class="T-right">
          <div class="swiper-btn">
            <div class="prev" @click="prev">
              <el-image :src="getAssetsFile('icon', 'left.png')" :fit="'fill'" />
            </div>
            <div class="next" @click="next">
              <el-image :src="getAssetsFile('icon', 'right.png')" :fit="'fill'" />
            </div>
          </div>
        </div>
      </div>
      <div class="about-base-container-bottom" v-if="PAGEWIDTH > 960">
        <!-- <div class="about-base-container-bottom-content" v-if="plist.length > 0">
          <div
            :class="['about-honor-content-item', activeIndex == index ? 'active' : '']"
            v-for="(item, index) in plist"
            :key="index"
            @click="handleSelect(index)"
          >
            <el-image :src="item.thumb" :fit="'fill'" @click="showImagePreview([item.thumb])" />
            <span>{{ item.name }}</span>
          </div>
        </div>

        <div class="about-base-container-bottom-content" v-else>
          <div
            :class="['about-honor-content-item', activeIndex == index ? 'active' : '']"
            v-for="(item, index) in list"
            :key="index"
            @click="handleSelect(index)"
          >
            <el-image :src="item.imgSrc" :fit="'fill'" @click="showImagePreview([item.imgSrc])" />
            <span>{{ item.title }}</span>
          </div>
        </div> -->

        <swiper class="mySwiper" @swiper="onSwiper" v-if="plist.length > 0">
          <swiper-slide v-for="(item, index) in plist" :key="index">
            <div class="about-base-container-bottom-content">
              <div
                :class="['about-honor-content-item', activeIndex == i ? 'active' : '']"
                v-for="(p, i) in item"
                :key="i"
                @click="handleSelect(i)"
              >
                <el-image :src="p.imgSrc" :fit="'fill'" @click="showImagePreview([p.imgSrc])" />
                <span>{{ p.title }}</span>
              </div>
            </div></swiper-slide
          >
        </swiper>
        <van-empty description="暂无数据" v-else />
      </div>
      <div class="mobile-base-container-bottom" v-else>
        <van-swipe :autoplay="3000" lazy-render v-if="plist.length > 0">
          <van-swipe-item v-for="(item, index) in plist" :key="index">
            <div class="about-honor-content-item" @click="showImagePreview([item.thumb])">
              <div class="image-box">
                <img :src="item.thumb" alt="" />
              </div>
              <div class="text">
                {{ item.name }}
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
        <van-empty description="暂无数据" v-else />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, toRefs, watch, onMounted } from 'vue'
import { getAssetsFile } from '@/utils/tools'
import { showImagePreview } from 'vant'
import { useCounterStore } from '@/stores/screenWidth'
import { getCert } from '@/api/index'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
const { screenWidth } = toRefs(useCounterStore())
const activeIndex = ref(0)
const list = ref([
  {
    title: '高新技术企业证书',
    imgSrc: getAssetsFile('images', '证书框1.png')
  },
  {
    title: '广东省日化商会常务理事单位',
    imgSrc: getAssetsFile('images', '证书框2.png')
  },
  {
    title: '科技发明成果证明',
    imgSrc: getAssetsFile('images', '证书框3.png')
  },
  {
    title: '名优高品证书（粉饼）',
    imgSrc: getAssetsFile('images', '证书框4.png')
  },
  {
    title: '市级企业技术中心',
    imgSrc: getAssetsFile('images', '证书框5.png')
  },
  {
    title: 'a-GMPC资质证书',
    imgSrc: getAssetsFile('images', '证书框6.png')
  },
  {
    title: 'c-ISO22716资质证书',
    imgSrc: getAssetsFile('images', '证书框7.png')
  },
  {
    title: '知识产权认证证书',
    imgSrc: getAssetsFile('images', '证书框8.png')
  },
  {
    title: '高新技术企业证书',
    imgSrc: getAssetsFile('images', '证书框1.png')
  },
  {
    title: '广东省日化商会常务理事单位',
    imgSrc: getAssetsFile('images', '证书框2.png')
  },
  {
    title: '科技发明成果证明',
    imgSrc: getAssetsFile('images', '证书框3.png')
  },
  {
    title: '名优高品证书（粉饼）',
    imgSrc: getAssetsFile('images', '证书框4.png')
  },
  {
    title: '市级企业技术中心',
    imgSrc: getAssetsFile('images', '证书框5.png')
  },
  {
    title: 'a-GMPC资质证书',
    imgSrc: getAssetsFile('images', '证书框6.png')
  },
  {
    title: 'c-ISO22716资质证书',
    imgSrc: getAssetsFile('images', '证书框7.png')
  },
  {
    title: '知识产权认证证书',
    imgSrc: getAssetsFile('images', '证书框8.png')
  }
])
const plist = ref([])
function chunkArray<T>(array: T[], size: number): T[][] {
  const result: T[][] = []
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size))
  }
  return result
}
const getPic = async () => {
  let res = await getCert(2)
  if (res.status == 1) {
    plist.value = chunkArray(res.data, 8)
  }
}

const swiperDom = ref(null)
const onSwiper = (swiper) => {
  swiperDom.value = swiper
}
const prev = () => {
  swiperDom.value.slidePrev()
}

const next = () => {
  swiperDom.value.slideNext()
}
const handleSelect = (index) => {
  activeIndex.value = index
}

onMounted(() => {
  getPic()
  // 数组分成8项一组
  // list.value = chunkArray(list.value, 8)
})

const PAGEWIDTH = ref(window.innerWidth)
//watch监听屏幕宽度的变化，进行侧边栏的收缩和展开
watch(
  () => screenWidth.value,
  (newVal, oldVal) => {
    PAGEWIDTH.value = newVal
  }
)
</script>
<style lang="scss" scoped>
.about-honor {
  width: 100vw;
  height: 100vh;
  padding-top: 6vh;
  box-sizing: border-box;
  background-color: white;
  .about-honor-base-container {
    margin: 0 auto;
    width: var(--base-width);
    transition: all 0.3s ease-in;
    zoom: 1;

    .about-base-container-top {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .T-left {
        .topic {
          width: 100%;
          height: 40px;
          display: flex;
          align-items: center;
          gap: 1vw;

          .text {
            font-weight: 400;
            font-size: var(--aside-fontSize);
            color: #f3a7a5;
          }

          .block {
            width: 6px;
            height: var(--aside-block);
            border-radius: 1px;
            background-color: #f3a7a5;
          }
        }

        .name {
          margin-top: 1vh;
          font-family:
            Microsoft YaHei,
            Microsoft YaHei;
          font-weight: bold;
          font-size: var(--topic-fontSize);
          color: #333333;
        }
      }

      .T-right {
        .swiper-btn {
          margin-top: 5vh;
          display: flex;
          gap: 1vw;

          :deep(.el-image) {
            width: 40px;
            height: 40px;
            cursor: pointer;
          }
        }
      }
    }

    .about-base-container-bottom {
      width: 100%;
      margin-top: 2vh;
      .about-base-container-bottom-content {
        width: 100%;

        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        gap: 1vw;
        .about-honor-content-item {
          width: 23.5%;
          height: 35vh;
          background-color: #f8f8f8;
          border-radius: 20px 20px 20px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1vw;
          box-sizing: border-box;
          cursor: pointer;
          font-family:
            Microsoft YaHei,
            Microsoft YaHei;
          font-weight: 400;
          font-size: 20px;
          color: #333333;

          &.active {
            color: #f3a7a5;
            background-color: #ffffff;
            box-shadow:
              rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
              rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
          }
        }
      }
    }
  }
}

@media (max-width: 960px) {
  .about-honor {
    width: 100vw;
    height: auto;
    // padding-top: 6vh;
    padding: 0;
    box-sizing: border-box;
    background-color: white;
    .about-honor-base-container {
      margin: 0 auto;
      width: var(--base-width);
      transition: all 0.3s ease-in;
      zoom: 1;
      padding: 2vh;
      box-sizinging: border-box;

      .about-base-container-top {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .T-left {
          .topic {
            width: 100%;
            height: 40px;
            display: none;
            align-items: center;
            gap: 1vw;

            .text {
              font-weight: 400;
              font-size: var(--aside-fontSize);
              color: #f3a7a5;
            }

            .block {
              width: 6px;
              height: var(--aside-block);
              border-radius: 1px;
              background-color: #f3a7a5;
            }
          }

          .name {
            margin-top: 1vh;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: bold;
            font-size: 18px;
            color: #333333;
          }
        }

        .T-right {
          .swiper-btn {
            margin-top: 5vh;
            display: none;
            gap: 1vw;

            :deep(.el-image) {
              width: 40px;
              height: 40px;
              cursor: pointer;
            }
          }
        }
      }

      .about-base-container-bottom {
        width: 100%;
        padding: 5vh;
        box-sizing: border-box;
        .about-base-container-bottom-content {
          width: 100%;

          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1vw;
          .about-honor-content-item {
            width: 24%;
            height: 32vh;
            background-color: #f8f8f8;
            border-radius: 20px 20px 20px 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 1vw;
            box-sizing: border-box;
            cursor: pointer;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 14px;
            color: #333333;

            &.active {
              color: #f3a7a5;
              background-color: #ffffff;
              box-shadow:
                rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
                rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
            }
          }
        }
      }

      .mobile-base-container-bottom {
        width: 100%;
        // background: pink;
        :deep(.van-swipe-item) {
          width: 100%;
          height: 500px;
          // background: orange;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .about-honor-content-item {
          width: 95%;
          height: 95%;
          background-color: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow:
            rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
            rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
          .image-box {
            width: 100%;
            height: 85%;
            img {
              width: 100%;
              height: 100%;
              object-fit: fill;
            }
          }
          .text {
            width: 100%;
            height: 15%;
            // background-color: pink;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 18px;
            color: #333333;
          }
        }
      }
    }
  }
}
</style>
