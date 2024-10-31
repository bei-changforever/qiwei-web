<template>
  <div
    class="quality"
    :style="{
      'background-color': config && config.background_brand ? config.background_brand : 'white'
    }"
  >
    <div class="quality-container" ref="qualityContainer">
      <div class="advantage-container">
        <div
          :class="[
            'T-left',
            showAnimation && PAGEWIDTH > 960 ? 'animate__animated animate__slideInLeft' : ''
          ]"
        >
          <div class="name">{{ config.home_brand_title }}</div>
          <div class="desc">
            <p v-for="item in renderDesc(config && config.home_brand_description)">{{ item }}</p>
          </div>
        </div>
        <div
          :class="[
            'T-right',
            showAnimation && PAGEWIDTH > 960 ? 'animate__animated animate__slideInRight' : ''
          ]"
        >
          <div class="konw-more-about">
            <div class="text">了解更多</div>
            <el-icon class="about-icon">
              <CirclePlusFilled />
            </el-icon>
          </div>
        </div>
      </div>
      <div
        :class="[
          'position-box',
          showAnimation && PAGEWIDTH > 960 ? 'animate__animated animate__zoomIn' : ''
        ]"
        v-if="PAGEWIDTH > 960"
      >
        <template v-for="(item, index) in list" :key="index" v-show="list.length > 0">
          <div class="square-box" v-if="bigActiveIndex === index">
            <div class="square-box-left">
              <!-- <div class="square-box-left-item" v-for="(item, index) in 9" :key="index">
    <div :class="['item-info', `itemIndex${index + 1}`]">
      <div class="image-box">
        <el-image :src="item.thumb" :fit="'fill'" />
   
      </div>
    </div>
  </div> -->

              <div class="square-box-left-item">
                <div :class="['item-info', `itemIndex${1}`]">
                  <div class="image-box">
                    <!-- <el-image :src="getAssetsFile('images', `合作品牌${4}.png`)" :fit="'fill'" /> -->
                  </div>
                </div>
              </div>

              <div class="square-box-left-item">
                <div :class="['item-info', `itemIndex${2}`]">
                  <div class="image-box">
                    <!-- <el-image :src="getAssetsFile('images', `合作品牌${9}.png`)" :fit="'fill'" /> -->
                  </div>
                </div>
              </div>

              <div class="square-box-left-item">
                <div :class="['item-info', `itemIndex${3}`]">
                  <div class="image-box">
                    <!-- <el-image :src="getAssetsFile('images', `合作品牌${4}.png`)" :fit="'fill'" /> -->
                  </div>
                </div>
              </div>

              <div class="square-box-left-item">
                <div :class="['item-info', `itemIndex${4}`]">
                  <div class="image-box">
                    <!-- <el-image :src="getAssetsFile('images', `合作品牌${9}.png`)" :fit="'fill'" /> -->
                  </div>
                </div>
              </div>

              <div class="square-box-left-item">
                <div :class="['item-info', `itemIndex${5}`]">
                  <div class="image-box">
                    <!-- <el-image :src="getAssetsFile('images', `合作品牌${4}.png`)" :fit="'fill'" /> -->
                  </div>
                </div>
              </div>
              <div class="square-box-left-item">
                <div :class="['item-info', `itemIndex${6}`]">
                  <div class="image-box">
                    <el-image :src="item[10].thumb" :fit="'fill'" />

                    <!-- 10 -->
                  </div>
                </div>
              </div>
              <div class="square-box-left-item">
                <div :class="['item-info', `itemIndex${7}`]">
                  <div class="image-box">
                    <!-- <el-image :src="getAssetsFile('images', `合作品牌${4}.png`)" :fit="'fill'" /> -->
                  </div>
                </div>
              </div>
              <div class="square-box-left-item">
                <div :class="['item-info', `itemIndex${8}`]">
                  <div class="image-box">
                    <!-- <el-image :src="getAssetsFile('images', `合作品牌${4}.png`)" :fit="'fill'" /> -->
                    <el-image :src="item[9].thumb" :fit="'fill'" />
                    <!-- 9 -->
                  </div>
                </div>
              </div>
              <div class="square-box-left-item">
                <div :class="['item-info', `itemIndex${9}`]">
                  <div class="image-box">
                    <!-- <el-image :src="getAssetsFile('images', `合作品牌${4}.png`)" :fit="'fill'" /> -->
                  </div>
                </div>
              </div>
            </div>

            <div class="square-box-top">
              <!-- <div class="square-box-top-item" v-for="(item, index) in 9" :key="index">
    <div :class="['item-info', `itemIndex${index + 1}`]">
      <div class="image-box">

        {{ index }}
      </div>
    </div>
  </div> -->

              <div class="square-box-top-item">
                <div :class="['item-info', `itemIndex${1}`]">
                  <div class="image-box">
                    <!-- <el-image :src="getAssetsFile('images', `合作品牌${10}.png`)" :fit="'fill'" /> -->
                    <el-image :src="item[19].thumb" :fit="'fill'" />
                    <!-- 20 -->
                  </div>
                </div>
              </div>

              <div class="square-box-top-item">
                <div :class="['item-info', `itemIndex${2}`]">
                  <div class="image-box">
                    <!-- <el-image :src="getAssetsFile('images', `合作品牌${17}.png`)" :fit="'fill'" /> -->
                    <el-image :src="item[18].thumb" :fit="'fill'" />
                    <!-- 19 -->
                  </div>
                </div>
              </div>
              <div class="square-box-top-item">
                <div :class="['item-info', `itemIndex${3}`]">
                  <div class="image-box">
                    <!-- <el-image :src="getAssetsFile('images', `合作品牌${11}.png`)" :fit="'fill'" /> -->
                    <el-image :src="item[17].thumb" :fit="'fill'" />
                    <!-- 18 -->
                  </div>
                </div>
              </div>
              <div class="square-box-top-item">
                <div :class="['item-info', `itemIndex${4}`]">
                  <div class="image-box">
                    <!-- <el-image :src="getAssetsFile('images', `合作品牌${16}.png`)" :fit="'fill'" /> -->
                    <el-image :src="item[16].thumb" :fit="'fill'" />
                    <!-- 17 -->
                  </div>
                </div>
              </div>
              <div class="square-box-top-item">
                <div :class="['item-info', `itemIndex${5}`]" style="background-color: #ccefe7">
                  <div class="image-box">
                    <!-- <el-image :src="getAssetsFile('images', `合作品牌${18}.png`)" :fit="'fill'" /> -->
                    <el-image :src="item[15].thumb" :fit="'fill'" />
                    <!-- 16 -->
                  </div>
                </div>
              </div>
              <div class="square-box-top-item">
                <div :class="['item-info', `itemIndex${6}`]">
                  <div class="image-box">
                    <!-- <el-image :src="getAssetsFile('images', `合作品牌${20}.png`)" :fit="'fill'" /> -->
                    <el-image :src="item[14].thumb" :fit="'fill'" />
                    <!-- 15 -->
                  </div>
                </div>
              </div>
              <div class="square-box-top-item">
                <div :class="['item-info', `itemIndex${7}`]">
                  <div class="image-box">
                    <!-- <el-image :src="getAssetsFile('images', `合作品牌${7}.png`)" :fit="'fill'" /> -->
                  </div>
                </div>
              </div>
              <div class="square-box-top-item">
                <div :class="['item-info', `itemIndex${8}`]">
                  <div class="image-box">
                    <!-- <el-image :src="getAssetsFile('images', `合作品牌${7}.png`)" :fit="'fill'" /> -->
                    <el-image :src="item[12].thumb" :fit="'fill'" />
                    <!-- 13 -->
                  </div>
                </div>
              </div>
              <div class="square-box-top-item">
                <div :class="['item-info', `itemIndex${9}`]">
                  <div class="image-box">
                    <!-- <el-image :src="getAssetsFile('images', `合作品牌${19}.png`)" :fit="'fill'" /> -->
                    <el-image :src="item[13].thumb" :fit="'fill'" />
                    <!-- 14 -->
                  </div>
                </div>
              </div>
            </div>

            <!-- 标记 -->
            <div class="square-box-bottom">
              <!-- <div class="square-box-bottom-item" v-for="(item, index) in 9" :key="index">
    <div :class="['item-info', `itemIndex${index + 1}`]">
      <div class="image-box">
        <el-image :src="item.thumb" :fit="'fill'" />

        
      </div>
    </div>
  </div> -->
              <div class="square-box-bottom-item">
                <div :class="['item-info', `itemIndex${1}`]">
                  <div class="image-box">
                    <!-- <el-image :src="getAssetsFile('images', `合作品牌${1}.png`)" :fit="'fill'" /> -->
                    <el-image :src="item[0].thumb" :fit="'fill'" />
                    <!-- 1 -->
                  </div>
                </div>
              </div>
              <div class="square-box-bottom-item">
                <div :class="['item-info', `itemIndex${2}`]">
                  <div class="image-box">
                    <!-- <el-image :src="getAssetsFile('images', `合作品牌${12}.png`)" :fit="'fill'" /> -->
                    <el-image :src="item[1].thumb" :fit="'fill'" />
                    <!-- 2 -->
                  </div>
                </div>
              </div>
              <div class="square-box-bottom-item">
                <div :class="['item-info', `itemIndex${3}`]">
                  <div class="image-box">
                    <!-- <el-image :src="getAssetsFile('images', `合作品牌${12}.png`)" :fit="'fill'" /> -->
                  </div>
                </div>
              </div>
              <div class="square-box-bottom-item">
                <div :class="['item-info', `itemIndex${4}`]">
                  <div class="image-box">
                    <!-- <el-image :src="getAssetsFile('images', `合作品牌${8}.png`)" :fit="'fill'" /> -->
                    <el-image :src="item[2].thumb" :fit="'fill'" />
                    <!-- 3 -->
                  </div>
                </div>
              </div>
              <div class="square-box-bottom-item">
                <div :class="['item-info', `itemIndex${5}`]" style="background-color: #024997">
                  <div class="image-box">
                    <!-- <el-image :src="getAssetsFile('images', `合作品牌${3}.png`)" :fit="'fill'" /> -->
                    <el-image :src="item[3].thumb" :fit="'fill'" />
                    <!-- 4 -->
                  </div>
                </div>
              </div>
              <div class="square-box-bottom-item">
                <div :class="['item-info', `itemIndex${6}`]">
                  <div class="image-box">
                    <!-- <el-image :src="getAssetsFile('images', `合作品牌${5}.png`)" :fit="'fill'" /> -->
                    <el-image :src="item[4].thumb" :fit="'fill'" />
                    <!-- 5 -->
                  </div>
                </div>
              </div>
              <div class="square-box-bottom-item">
                <div :class="['item-info', `itemIndex${7}`]">
                  <div class="image-box">
                    <!-- <el-image :src="getAssetsFile('images', `合作品牌${6}.png`)" :fit="'fill'" /> -->
                    <el-image :src="item[5].thumb" :fit="'fill'" />
                    <!-- 6 -->
                  </div>
                </div>
              </div>
              <div class="square-box-bottom-item">
                <div :class="['item-info', `itemIndex${8}`]">
                  <div class="image-box">
                    <!-- <el-image :src="getAssetsFile('images', `合作品牌${13}.png`)" :fit="'fill'" /> -->
                    <el-image :src="item[6].thumb" :fit="'fill'" />
                    <!-- 7 -->
                  </div>
                </div>
              </div>
              <div class="square-box-bottom-item">
                <div :class="['item-info', `itemIndex${9}`]">
                  <div class="image-box">
                    <!-- <el-image :src="getAssetsFile('images', `合作品牌${14}.png`)" :fit="'fill'" /> -->
                    <el-image :src="item[7].thumb" :fit="'fill'" />
                    <!-- 8 -->
                  </div>
                </div>
              </div>
            </div>

            <div class="square-box-right">
              <!-- <div class="square-box-right-item" v-for="(item, index) in 9" :key="index">
    <div :class="['item-info', `itemIndex${index + 1}`]">
      <div class="image-box">
        <el-image :src="item.thumb" :fit="'fill'" />

      </div>
    </div>
  </div> -->

              <div class="square-box-right-item">
                <div :class="['item-info', `itemIndex${1}`]">
                  <div class="image-box">
                    <!-- <el-image :src="getAssetsFile('images', `合作品牌${5}.png`)" :fit="'fill'" /> -->
                  </div>
                </div>
              </div>

              <div class="square-box-right-item">
                <div :class="['item-info', `itemIndex${2}`]">
                  <div class="image-box">
                    <!-- <el-image :src="getAssetsFile('images', `合作品牌${15}.png`)" :fit="'fill'" /> -->
                    <el-image :src="item[11].thumb" :fit="'fill'" />
                    <!-- 12 -->
                  </div>
                </div>
              </div>

              <div class="square-box-right-item">
                <div :class="['item-info', `itemIndex${3}`]">
                  <div class="image-box">
                    <!-- <el-image :src="getAssetsFile('images', `合作品牌${15}.png`)" :fit="'fill'" /> -->
                  </div>
                </div>
              </div>

              <div class="square-box-right-item">
                <div :class="['item-info', `itemIndex${4}`]">
                  <div class="image-box">
                    <!-- <el-image :src="getAssetsFile('images', `合作品牌${2}.png`)" :fit="'fill'" /> -->
                    <el-image :src="item[10].thumb" :fit="'fill'" />
                    <!-- 11 -->
                  </div>
                </div>
              </div>

              <div class="square-box-right-item">
                <div :class="['item-info', `itemIndex${5}`]">
                  <div class="image-box">
                    <!-- <el-image :src="getAssetsFile('images', `合作品牌${15}.png`)" :fit="'fill'" /> -->
                  </div>
                </div>
              </div>

              <div class="square-box-right-item">
                <div :class="['item-info', `itemIndex${6}`]">
                  <div class="image-box">
                    <!-- <el-image :src="getAssetsFile('images', `合作品牌${15}.png`)" :fit="'fill'" /> -->
                  </div>
                </div>
              </div>

              <div class="square-box-right-item">
                <div :class="['item-info', `itemIndex${7}`]">
                  <div class="image-box">
                    <!-- <el-image :src="getAssetsFile('images', `合作品牌${15}.png`)" :fit="'fill'" /> -->
                  </div>
                </div>
              </div>

              <div class="square-box-right-item">
                <div :class="['item-info', `itemIndex${8}`]">
                  <div class="image-box">
                    <!-- <el-image :src="getAssetsFile('images', `合作品牌${15}.png`)" :fit="'fill'" /> -->
                  </div>
                </div>
              </div>

              <div class="square-box-right-item">
                <div :class="['item-info', `itemIndex${9}`]">
                  <div class="image-box">
                    <!-- <el-image :src="getAssetsFile('images', `合作品牌${15}.png`)" :fit="'fill'" /> -->
                  </div>
                </div>
              </div>
            </div>

            <div class="square-box-center"></div>

            <div class="texttopic">
              <span class="topic">品牌保障</span><br />
              <span class="detail">Quality Assurance</span>
            </div>
            <div class="textdetail"></div>
          </div>
        </template>

        <div class="pagenavigation">
          <div
            :class="['pagenavigation-item', bigActiveIndex == index ? 'active' : '']"
            v-for="(item, index) in list"
            @click="handleSelect(index)"
          ></div>
        </div>
      </div>
      <div class="moom-box" v-else>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="skyblue" lazy-render>
          <van-swipe-item v-for="(item, index) in groupeDataMobileData" :key="index">
            <div class="image-box">
              <div class="image" v-for="(p, i) in item" :key="i">
                <img :src="p.thumb" alt="" />
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, toRefs, watch } from 'vue'
import { getAssetsFile } from '@/utils/tools'
import emitter from '@/utils/mitt'
import { useIntersectionObserver } from '@vueuse/core'
import { useCounterStore } from '@/stores/screenWidth'
import { getBanner } from '@/api/index'
import { useConfig } from '@/stores/config'
const { config } = toRefs(useConfig())
const { screenWidth } = toRefs(useCounterStore())
const activeIndex = ref(0)
const changePageShow = ref(false)
const showAnimation = ref(false)
const qualityContainer = ref(null)
const bigActiveIndex = ref(0)
function groupByN(arr: any[], n: number): any[][] {
  return arr.reduce((acc, _, i, src) => {
    if (i % n === 0) acc.push(src.slice(i, i + n))
    return acc
  }, [])
}

const renderDesc = (text) => {
  const lines = text.split('<br/>')
  return lines
}

function groupAndFillData(arr: any[], groupCount: number, groupSize: number): any[][] {
  // 初始分组
  const initialGroups = Array.from({ length: groupCount }, (_, i) =>
    arr.slice(i * groupSize, (i + 1) * groupSize)
  )

  // 补充数据
  const allData = [...arr]
  for (let i = 0; i < initialGroups.length; i++) {
    while (initialGroups[i].length < groupSize && allData.length > 0) {
      const randomIndex = Math.floor(Math.random() * allData.length)
      initialGroups[i].push(allData.splice(randomIndex, 1)[0])
    }
  }

  return initialGroups
}

function chunkArray<T>(array: T[], size: number): T[][] {
  const result: T[][] = []
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size))
  }
  return result
}

const handleSelect = (index: number) => {
  bigActiveIndex.value = index
}
const list = ref([])
const groupedData = ref([])
const groupeDataMobileData = ref([])
const getPic = async () => {
  let res = await getBanner(3)
  // console.log(res)
  if (res.status == 1) {
    // 9条数据为1组
    list.value = res.data
    // list.value.push(...res.data)
    list.value = chunkArray(list.value, 20)
    // list.value = res.data
    // console.log(list.value);

    groupedData.value = groupAndFillData(res.data, 4, 9)
    groupeDataMobileData.value = groupByN(res.data, 6)
  }
}
onMounted(() => {
  getPic()
  useIntersectionObserver(
    qualityContainer,
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
.quality {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  // align-items: center;
  justify-content: center;
  padding-top: 20vh;
  background-color: white;
  // background-color: pink;

  /* 在需要滚动的容器上使用 scroll-snap-align 属性 */
  scroll-snap-align: start;
  .quality-container {
    width: var(--base-width);
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .advantage-container {
      position: absolute;
      top: 10vh;
      width: var(--base-width);
      display: flex;
      justify-content: space-between;

      .T-left {
        .name {
          margin-top: 1vh;
          font-family:
            Microsoft YaHei,
            Microsoft YaHei;
          font-weight: bold;
          font-size: 42px;
          color: #333333;
        }

        .desc {
          margin-top: 2vh;
          width: 59%;
          font-family:
            Microsoft YaHei,
            Microsoft YaHei;
          font-weight: 400;
          font-size: 20px;
          color: #666666;
          line-height: 34px;
        }
      }

      .T-right {
        .konw-more-about {
          margin-top: 1vh;
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

    .position-box {
      position: relative;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      // background-color: orange;

      .pagenavigation {
        position: absolute;
        bottom: 8vh;
        // width: 30%;
        padding: 20px;
        display: flex;
        gap: 1vw;
        // height: 50px;
        // background-color: orange;
        .pagenavigation-item {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background-color: transparent;
          border: 1px solid #e1e1e1;
          cursor: pointer;
          &.active {
            border: none;
            background-color: #f3a7a4;
          }
        }
      }
    }

    .square-box {
      // margin-bottom: -5vh;
      position: relative;
      width: 850px;
      height: 850px;
      // border: 1px solid red;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      transform: rotate(45deg);
      transform-origin: center center;
      :deep(.el-image) {
        transform: rotate(-45deg);
        transform-origin: center center;
      }

      .square-box-center {
        position: absolute;
        width: 30%;
        height: 30%;
        background-color: #f3a7a4;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }

      .texttopic {
        position: absolute;
        width: 30%;
        transform: rotate(-45deg);
        transform-origin: center center;
        text-align: center;
        .topic {
          font-family:
            Microsoft YaHei,
            Microsoft YaHei;
          font-weight: bold;
          font-size: 50px;
          color: #ffffff;
        }

        .detail {
          font-family:
            Microsoft YaHei,
            Microsoft YaHei;
          font-weight: 400;
          font-size: 20px;
          color: #ffffff;
        }
      }

      .square-box-left {
        width: 50%;
        height: 50%;
        display: flex;
        flex-wrap: wrap;
        font-size: 20px;
        .square-box-left-item {
          width: 33%;
          height: 33%;
          padding: 5px;
          box-sizing: border-box;
          .item-info {
            width: 100%;
            height: 100%;

            border-radius: 5px;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            cursor: pointer;
            transition: 0.3s;
            &:hover {
              transform: scale(1.1);
            }

            &.itemIndex1 {
              background-color: transparent;
              box-shadow: none;
              display: none;
              .image-box {
                display: none;
              }
            }

            &.itemIndex2 {
              background-color: transparent;
              box-shadow: none;
              display: none;
              .image-box {
                display: none;
              }
            }

            &.itemIndex3 {
              background-color: transparent;
              box-shadow: none;
              display: none;
              .image-box {
                display: none;
              }
            }

            &.itemIndex4 {
              background-color: transparent;
              box-shadow: none;
              display: none;
              .image-box {
                display: none;
              }
            }

            &.itemIndex5 {
              background-color: transparent;
              box-shadow: none;
              display: none;
              .image-box {
                display: none;
              }
            }

            &.itemIndex7 {
              background-color: transparent;
              box-shadow: none;
              display: none;
              .image-box {
                display: none;
              }
            }

            &.itemIndex9 {
              background-color: transparent;
              box-shadow: none;
              display: none;
              .image-box {
                display: none;
              }
            }
          }
        }
      }

      .square-box-top {
        width: 50%;
        height: 50%;
        display: flex;
        flex-wrap: wrap;
        font-size: 20px;
        .square-box-top-item {
          width: 33%;
          height: 33%;
          padding: 5px;
          box-sizing: border-box;

          .item-info {
            border-radius: 5px;
            width: 100%;
            height: 100%;

            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            cursor: pointer;
            transition: 0.3s;
            &:hover {
              transform: scale(1.1);
            }
            &.itemIndex7 {
              background-color: transparent;
              box-shadow: none;
              display: none;
              .image-box {
                display: none;
              }
            }
          }
        }
      }

      .square-box-right {
        width: 50%;
        height: 50%;
        display: flex;
        flex-wrap: wrap;
        font-size: 20px;
        .square-box-right-item {
          width: 33%;
          height: 33%;
          padding: 5px;
          box-sizing: border-box;

          .item-info {
            cursor: pointer;
            border-radius: 5px;
            width: 100%;
            height: 100%;

            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            transition: 0.3s;
            &:hover {
              transform: scale(1.1);
            }
            &.itemIndex1 {
              background-color: transparent;
              box-shadow: none;
              display: none;
              .image-box {
                display: none;
              }
            }

            &.itemIndex3 {
              background-color: transparent;
              box-shadow: none;
              display: none;
              .image-box {
                display: none;
              }
            }

            &.itemIndex5 {
              background-color: transparent;
              box-shadow: none;
              display: none;
              .image-box {
                display: none;
              }
            }

            &.itemIndex6 {
              background-color: transparent;
              box-shadow: none;
              display: none;
              .image-box {
                display: none;
              }
            }

            &.itemIndex7 {
              background-color: transparent;
              box-shadow: none;
              display: none;
              .image-box {
                display: none;
              }
            }

            &.itemIndex8 {
              background-color: transparent;
              box-shadow: none;
              display: none;
              .image-box {
                display: none;
              }
            }

            &.itemIndex9 {
              background-color: transparent;
              box-shadow: none;
              display: none;
              .image-box {
                display: none;
              }
            }
          }
        }
      }

      .square-box-bottom {
        width: 50%;
        height: 50%;
        display: flex;
        flex-wrap: wrap;
        font-size: 20px;
        // background-color: pink;
        .square-box-bottom-item {
          width: 33%;
          height: 33%;
          padding: 5px;
          box-sizing: border-box;

          .item-info {
            cursor: pointer;
            border-radius: 5px;
            width: 100%;
            height: 100%;

            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            transition: 0.3s;
            &:hover {
              transform: scale(1.1);
            }
            &.itemIndex3 {
              background-color: transparent;
              box-shadow: none;
              display: none;
              .image-box {
                display: none;
              }
            }
          }
        }
      }
    }
  }
}

@media (min-width: 1440px) and (max-width: 1520px) {
  .quality {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    // align-items: center;
    justify-content: center;
    padding-top: 15vh;
    background-color: white;

    /* 在需要滚动的容器上使用 scroll-snap-align 属性 */
    scroll-snap-align: start;
    .quality-container {
      width: var(--base-width);
      margin: 0 auto;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .advantage-container {
        position: absolute;
        top: 15vh;
        width: var(--base-width);
        display: flex;
        justify-content: space-between;

        .T-left {
          .name {
            margin-top: 1vh;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: bold;
            font-size: 42px;
            color: #333333;
          }

          .desc {
            margin-top: 2vh;
            width: 59%;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 20px;
            color: #666666;
            line-height: 34px;
          }
        }

        .T-right {
          .konw-more-about {
            margin-top: 1vh;
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
          }
        }
      }

      .position-box {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        //   background-color: pink;

        .pagenavigation {
          position: absolute;
          bottom: -6vh;
          // width: 30%;
          padding: 20px;
          display: flex;
          gap: 1vw;
          // height: 50px;
          // background-color: orange;
          .pagenavigation-item {
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background-color: transparent;
            border: 1px solid #e1e1e1;
            cursor: pointer;
            &.active {
              border: none;
              background-color: #f3a7a4;
            }
          }
        }
      }

      .square-box {
        margin-bottom: -10vh;
        position: relative;
        width: 650px;
        height: 650px;
        // border: 1px solid red;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        transform: rotate(45deg);
        transform-origin: center center;
        :deep(.el-image) {
          transform: rotate(-45deg);
          transform-origin: center center;
        }

        .square-box-center {
          position: absolute;
          width: 30%;
          height: 30%;
          background-color: #f3a7a4;
          border-radius: 5px;
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .texttopic {
          position: absolute;
          width: 30%;
          transform: rotate(-45deg);
          transform-origin: center center;
          text-align: center;
          .topic {
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: bold;
            font-size: 40px;
            color: #ffffff;
          }

          .detail {
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 14px;
            color: #ffffff;
          }
        }

        .square-box-left {
          width: 50%;
          height: 50%;
          display: flex;
          flex-wrap: wrap;

          .square-box-left-item {
            width: 33%;
            height: 33%;
            padding: 5px;
            box-sizing: border-box;
            .item-info {
              width: 100%;
              height: 100%;

              border-radius: 5px;
              box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
              cursor: pointer;
              transition: 0.3s;
              &:hover {
                transform: scale(1.1);
              }

              &.itemIndex1 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }

              &.itemIndex2 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }

              &.itemIndex3 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }

              &.itemIndex4 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }

              &.itemIndex5 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }

              &.itemIndex7 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }

              &.itemIndex9 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }
            }
          }
        }

        .square-box-top {
          width: 50%;
          height: 50%;
          display: flex;
          flex-wrap: wrap;
          .square-box-top-item {
            width: 33%;
            height: 33%;
            padding: 5px;
            box-sizing: border-box;

            .item-info {
              border-radius: 5px;
              width: 100%;
              height: 100%;

              box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
              cursor: pointer;
              transition: 0.3s;
              &:hover {
                transform: scale(1.1);
              }
              &.itemIndex7 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }
            }
          }
        }

        .square-box-right {
          width: 50%;
          height: 50%;
          display: flex;
          flex-wrap: wrap;
          .square-box-right-item {
            width: 33%;
            height: 33%;
            padding: 5px;
            box-sizing: border-box;

            .item-info {
              cursor: pointer;
              border-radius: 5px;
              width: 100%;
              height: 100%;

              box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
              transition: 0.3s;
              &:hover {
                transform: scale(1.1);
              }
              &.itemIndex1 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }

              &.itemIndex3 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }

              &.itemIndex5 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }

              &.itemIndex6 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }

              &.itemIndex7 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }

              &.itemIndex8 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }

              &.itemIndex9 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }
            }
          }
        }

        .square-box-bottom {
          width: 50%;
          height: 50%;
          display: flex;
          flex-wrap: wrap;
          .square-box-bottom-item {
            width: 33%;
            height: 33%;
            padding: 5px;
            box-sizing: border-box;

            .item-info {
              cursor: pointer;
              border-radius: 5px;
              width: 100%;
              height: 100%;

              box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
              transition: 0.3s;
              &:hover {
                transform: scale(1.1);
              }
              &.itemIndex3 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }
            }
          }
        }
      }
    }
  }
}

@media (min-width: 1220px) and (max-width: 1440px) {
  .quality {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    // align-items: center;
    justify-content: center;
    padding-top: 15vh;
    background-color: white;

    /* 在需要滚动的容器上使用 scroll-snap-align 属性 */
    scroll-snap-align: start;
    .quality-container {
      width: var(--base-width);
      margin: 0 auto;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .advantage-container {
        position: absolute;
        top: 15vh;
        width: var(--base-width);
        display: flex;
        justify-content: space-between;

        .T-left {
          .name {
            margin-top: 1vh;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: bold;
            font-size: 42px;
            color: #333333;
          }

          .desc {
            margin-top: 1vh;
            width: 59%;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 20px;
            color: #666666;
            line-height: 34px;
          }
        }

        .T-right {
          .konw-more-about {
            margin-top: 1vh;
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
          }
        }
      }

      .position-box {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        //   background-color: pink;

        .pagenavigation {
          position: absolute;
          bottom: -5vh;
          // width: 30%;
          padding: 20px;
          display: flex;
          gap: 1vw;
          // height: 50px;
          // background-color: orange;
          .pagenavigation-item {
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background-color: transparent;
            border: 1px solid #e1e1e1;
            cursor: pointer;
            &.active {
              border: none;
              background-color: #f3a7a4;
            }
          }
        }
      }

      .square-box {
        margin-bottom: -10vh;
        position: relative;
        width: 700px;
        height: 700px;
        // border: 1px solid red;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        transform: rotate(45deg);
        transform-origin: center center;
        :deep(.el-image) {
          transform: rotate(-45deg);
          transform-origin: center center;
        }

        .square-box-center {
          position: absolute;
          width: 30%;
          height: 30%;
          background-color: #f3a7a4;
          border-radius: 5px;
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .texttopic {
          position: absolute;
          width: 30%;
          transform: rotate(-45deg);
          transform-origin: center center;
          text-align: center;
          .topic {
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: bold;
            font-size: 40px;
            color: #ffffff;
          }

          .detail {
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 14px;
            color: #ffffff;
          }
        }

        .square-box-left {
          width: 50%;
          height: 50%;
          display: flex;
          flex-wrap: wrap;
          .square-box-left-item {
            width: 33%;
            height: 33%;
            padding: 5px;
            box-sizing: border-box;
            .item-info {
              width: 100%;
              height: 100%;

              border-radius: 5px;
              box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
              cursor: pointer;
              transition: 0.3s;
              &:hover {
                transform: scale(1.1);
              }

              &.itemIndex1 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }

              &.itemIndex2 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }

              &.itemIndex3 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }

              &.itemIndex4 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }

              &.itemIndex5 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }

              &.itemIndex7 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }

              &.itemIndex9 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }
            }
          }
        }

        .square-box-top {
          width: 50%;
          height: 50%;
          display: flex;
          flex-wrap: wrap;
          .square-box-top-item {
            width: 33%;
            height: 33%;
            padding: 5px;
            box-sizing: border-box;

            .item-info {
              border-radius: 5px;
              width: 100%;
              height: 100%;

              box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
              cursor: pointer;
              transition: 0.3s;
              &:hover {
                transform: scale(1.1);
              }
              &.itemIndex7 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }
            }
          }
        }

        .square-box-right {
          width: 50%;
          height: 50%;
          display: flex;
          flex-wrap: wrap;
          .square-box-right-item {
            width: 33%;
            height: 33%;
            padding: 5px;
            box-sizing: border-box;

            .item-info {
              cursor: pointer;
              border-radius: 5px;
              width: 100%;
              height: 100%;

              box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
              transition: 0.3s;
              &:hover {
                transform: scale(1.1);
              }
              &.itemIndex1 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }

              &.itemIndex3 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }

              &.itemIndex5 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }

              &.itemIndex6 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }

              &.itemIndex7 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }

              &.itemIndex8 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }

              &.itemIndex9 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }
            }
          }
        }

        .square-box-bottom {
          width: 50%;
          height: 50%;
          display: flex;
          flex-wrap: wrap;
          .square-box-bottom-item {
            width: 33%;
            height: 33%;
            padding: 5px;
            box-sizing: border-box;

            .item-info {
              cursor: pointer;
              border-radius: 5px;
              width: 100%;
              height: 100%;

              box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
              transition: 0.3s;
              &:hover {
                transform: scale(1.1);
              }
              &.itemIndex3 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }
            }
          }
        }
      }
    }
  }
}

@media (min-width: 960px) and (max-width: 1220px) {
  .quality {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    // align-items: center;
    justify-content: center;
    padding-top: 10vh;
    background-color: white;

    /* 在需要滚动的容器上使用 scroll-snap-align 属性 */
    scroll-snap-align: start;
    .quality-container {
      width: var(--base-width);
      margin: 0 auto;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .advantage-container {
        position: absolute;
        top: 10vh;
        width: var(--base-width);
        display: flex;
        justify-content: space-between;
        // display: none;
        .T-left {
          .name {
            // margin-top: 1vh;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: bold;
            font-size: var(--topic-fontSize);
            color: #333333;
          }

          .desc {
            margin-top: 2vh;
            width: 59%;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: var(--desc-fontSize);
            color: #666666;
            line-height: 34px;
          }
        }

        .T-right {
          .konw-more-about {
            margin-top: 1vh;
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
          }
        }
      }

      .position-box {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        // background-color: pink;

        .pagenavigation {
          position: absolute;
          bottom: -2vh;
          // width: 30%;
          padding: 20px;
          display: flex;
          gap: 1vw;
          // height: 50px;
          // background-color: orange;
          .pagenavigation-item {
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background-color: transparent;
            border: 1px solid #e1e1e1;
            cursor: pointer;
            &.active {
              border: none;
              background-color: #f3a7a4;
            }
          }
        }
      }

      .square-box {
        // margin-bottom: -5vh;
        position: relative;
        width: 600px;
        height: 600px;
        // border: 1px solid red;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        transform: rotate(45deg);
        transform-origin: center center;
        :deep(.el-image) {
          transform: rotate(-45deg);
          transform-origin: center center;
        }

        .square-box-center {
          position: absolute;
          width: 30%;
          height: 30%;
          background-color: #f3a7a4;
          border-radius: 5px;
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .texttopic {
          position: absolute;
          width: 30%;
          transform: rotate(-45deg);
          transform-origin: center center;
          text-align: center;
          .topic {
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: bold;
            font-size: 30px;
            color: #ffffff;
          }

          .detail {
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 18px;
            color: #ffffff;
          }
        }

        .square-box-left {
          width: 50%;
          height: 50%;
          display: flex;
          flex-wrap: wrap;
          .square-box-left-item {
            width: 33%;
            height: 33%;
            padding: 5px;
            box-sizing: border-box;
            .item-info {
              width: 100%;
              height: 100%;

              border-radius: 5px;
              box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
              cursor: pointer;
              transition: 0.3s;
              &:hover {
                transform: scale(1.1);
              }

              &.itemIndex1 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }

              &.itemIndex2 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }

              &.itemIndex3 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }

              &.itemIndex4 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }

              &.itemIndex5 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }

              &.itemIndex7 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }

              &.itemIndex9 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }
            }
          }
        }

        .square-box-top {
          width: 50%;
          height: 50%;
          display: flex;
          flex-wrap: wrap;
          .square-box-top-item {
            width: 33%;
            height: 33%;
            padding: 5px;
            box-sizing: border-box;

            .item-info {
              border-radius: 5px;
              width: 100%;
              height: 100%;

              box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
              cursor: pointer;
              transition: 0.3s;
              &:hover {
                transform: scale(1.1);
              }
              &.itemIndex7 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }
            }
          }
        }

        .square-box-right {
          width: 50%;
          height: 50%;
          display: flex;
          flex-wrap: wrap;
          .square-box-right-item {
            width: 33%;
            height: 33%;
            padding: 5px;
            box-sizing: border-box;

            .item-info {
              cursor: pointer;
              border-radius: 5px;
              width: 100%;
              height: 100%;

              box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
              transition: 0.3s;
              &:hover {
                transform: scale(1.1);
              }
              &.itemIndex1 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }

              &.itemIndex3 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }

              &.itemIndex5 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }

              &.itemIndex6 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }

              &.itemIndex7 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }

              &.itemIndex8 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }

              &.itemIndex9 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }
            }
          }
        }

        .square-box-bottom {
          width: 50%;
          height: 50%;
          display: flex;
          flex-wrap: wrap;
          .square-box-bottom-item {
            width: 33%;
            height: 33%;
            padding: 5px;
            box-sizing: border-box;

            .item-info {
              cursor: pointer;
              border-radius: 5px;
              width: 100%;
              height: 100%;

              box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
              transition: 0.3s;
              &:hover {
                transform: scale(1.1);
              }
              &.itemIndex3 {
                background-color: transparent;
                box-shadow: none;
                display: none;
                .image-box {
                  display: none;
                }
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 960px) {
  .quality {
    // position: relative;
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    // align-items: center;
    // justify-content: center;
    // padding-top: 15vh;
    background-color: white;
    // border: 1px solid red;
    padding: 0;
    /* 在需要滚动的容器上使用 scroll-snap-align 属性 */
    // scroll-snap-align: start;
    .quality-container {
      margin: 0 auto;
      width: var(--base-width);
      transition: all 0.3s ease-in;
      zoom: 1;
      padding: 2vh;
      box-sizing: border-box;
      .advantage-container {
        // position: absolute;
        // top: 15vh;
        position: static;
        width: 100%;
        display: flex;
        justify-content: space-between;

        .T-left {
          width: 100%;
          // background-color: orange;
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
            width: 100%;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 14px;
            color: #666666;
            line-height: 24px;
          }
        }

        .T-right {
          .konw-more-about {
            margin-top: 1vh;
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
      .moom-box {
        margin-top: 1vh;
        width: 100%;
        .image-box {
          width: 100%;
          // background-color: skyblue;
          display: flex;
          flex-wrap: wrap;
          .image {
            width: 33%;
            height: 45%;
            img {
              width: 100%;
              height: 100%;
              object-fit: fill;
            }
          }
        }
      }
    }
  }
}
</style>
