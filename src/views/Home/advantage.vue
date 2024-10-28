<template>
  <div class="advantage" :style="{ 'background-color': config.background_hxys ? config.background_hxys : 'white' }">
    <div class="advantage-box">
      <div class="advantage-container" ref="advantagedom">
        <div class="T-left">
          <div :class="['topic', showAnimation &&  PAGEWIDTH > 960 ? 'animate__animated animate__jackInTheBox': '']">
            <div class="block"></div>
            <div class="text">ADVANTAGE</div>
          </div>
          <div :class="['name', showAnimation && PAGEWIDTH > 960 ? 'animate__animated animate__jackInTheBox' : '']">
            核心优势
          </div>
          <div :class="['desc', showAnimation && PAGEWIDTH > 960 ? 'animate__animated animate__slideInUp': '']">
            五大核心赋能，助力品牌共赢未来无限可能
          </div>
        </div>
        <div :class="['T-right', showAnimation && PAGEWIDTH > 960 ? 'animate__animated animate__slideInRight': '']">
          <div class="konw-more-about" @click="clickRouter">
            <div class="text">了解更多</div>
            <el-icon class="about-icon">
              <CirclePlusFilled />
            </el-icon>
          </div>
        </div>
      </div>
      <div
        :class="['accordion', showAnimation && PAGEWIDTH > 960 ? 'animate__animated animate__zoomIn': '']"
        v-if="PAGEWIDTH > 960"
      >
        <Accordion :list="list" />
      </div>
      <div class="accordion" v-else>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(item, index) in 5" :key="index">
            <img :src="getAssetsFile('images', '核心优势选中1.png')" alt="" />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, toRef, onBeforeMount, onMounted, ref, toRefs, watch } from 'vue'
import { getAssetsFile } from '@/utils/tools'
import { getBanner } from '@/api/index'
import Accordion from '@/components/accordion/index.vue'
import emitter from '@/utils/mitt'
import { useRouter } from 'vue-router'
import { useIntersectionObserver } from '@vueuse/core'
import { useCounterStore } from '@/stores/screenWidth'
const { screenWidth } = toRefs(useCounterStore())
import { useConfig } from '@/stores/config'
const { config } = toRefs(useConfig())
const router = useRouter()
const changePageShow = ref(false)
const showAnimation = ref(false)
const list = ref([])
const clickRouter = () => {
  router.push('/business')
  emitter.emit('DOMINDEX', 2)
}
const advantagedom = ref(null)

const getPic = async () => {
  let res = await getBanner(2)
  if (res.status == 1) {
    list.value = res.data
  }
}
onMounted(() => {
  getPic()
  useIntersectionObserver(
    advantagedom,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        showAnimation.value = true
      }
    },
    { threshold: 0.5 }
  )
})
const PAGEWIDTH = ref(window.innerWidth)
watch(
  () => screenWidth.value,
  (newVal, oldVal) => {
    PAGEWIDTH.value = newVal
  }
)
</script>
<style lang="scss" scoped>
.advantage {
  width: 100vw;
  height: 100vh;
  display: flex;
  // align-items: center;
  justify-content: center;
  background-color: #ffffff;
  /* 在需要滚动的容器上使用 scroll-snap-align 属性 */
  scroll-snap-align: start;
  padding-top: 15vh;
  .advantage-box {
    margin: 0 auto;
    width: var(--base-width);
    transition: all 0.3s ease-in;
    zoom: 1;

    .advantage-container {
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

        .desc {
          margin-top: 3vh;
          font-family:
            Microsoft YaHei,
            Microsoft YaHei;
          font-weight: 400;
          font-size: var(--desc-fontSize);
          color: #666666;
          line-height: var(--desc-lineHeight);
        }
      }

      .T-right {
        .konw-more-about {
          margin-top: 5vh;
          width: 166px;
          height: 46px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 1px solid #f3a7a5;
          cursor: pointer;
          .text {
            width: 80%;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 20px;
            color: #f3a7a5;
            text-align: center;
            text-indent: 0.5em;
          }

          .about-icon {
            color: #f3a7a5;
            font-size: 46px;
          }

          &:hover {
            background-color: #f3a7a5;
            .text {
              color: white;
            }

            .about-icon {
              color: white;
              font-size: 46px;
            }
          }
        }
      }
    }

    .accordion {
      margin-top: 2vh;
    }
  }
}
@media (min-width: 960px) and (max-width: 1220px) {
  .advantage {
    width: 100vw;
    height: 100vh;
    display: flex;
    // align-items: center;
    justify-content: center;

    /* 在需要滚动的容器上使用 scroll-snap-align 属性 */
    scroll-snap-align: start;
    padding-top: 15vh;
    box-sizing: border-box;
    // padding: 0;
    .advantage-box {
      margin: 0 auto;
      width: var(--base-width);
      transition: all 0.3s ease-in;
      zoom: 1;

      .advantage-container {
        width: 100%;
        display: flex;
        justify-content: space-between;
        // background-color: pink;
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

          .desc {
            margin-top: 2vh;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: var(--desc-fontSize);
            color: #666666;
            line-height: var(--desc-lineHeight);
          }
        }

        .T-right {
          .konw-more-about {
            margin-top: 5vh;
            width: 150px;
            height: 40px;
            border-radius: 50px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 1px solid #f3a7a5;

            .text {
              width: 80%;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: 18px;
              color: #f3a7a5;
              text-align: center;
              text-indent: 0.5em;
            }

            .about-icon {
              color: #f3a7a5;
              font-size: 40px;
            }
          }
        }
      }

      .accordion {
        margin-top: 3vh;
      }
    }
  }
}

@media (max-width: 960px) {
  .advantage {
    width: 100vw;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    /* 在需要滚动的容器上使用 scroll-snap-align 属性 */
    scroll-snap-align: start;
    // padding: 15vh;
    padding: 0;
    .advantage-box {
      margin: 0 auto;
      width: var(--base-width);
      transition: all 0.3s ease-in;
      zoom: 1;
      padding: 2vh;
      .advantage-container {
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

          .desc {
            margin-top: 1vh;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 16px;
            color: #666666;
            line-height: var(--desc-lineHeight);
          }
        }

        .T-right {
          .konw-more-about {
            margin-top: 5vh;
            width: 166px;
            height: 46px;
            border-radius: 50px;
            display: none;
            align-items: center;
            justify-content: space-between;
            border: 1px solid #f3a7a5;

            .text {
              width: 80%;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: 20px;
              color: #f3a7a5;
              text-align: center;
              text-indent: 0.5em;
            }

            .about-icon {
              color: #f3a7a5;
              font-size: 46px;
            }
          }
        }
      }

      .accordion {
        margin-top: 2vh;
      }
    }
  }
}
</style>
