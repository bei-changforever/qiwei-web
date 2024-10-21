<template>
  <div class="product-container" @click.stop="parentClick">
    <div class="product-container-content">
      <div class="sift" v-if="PAGEWIDTH > 960">
        <div class="sift-box-top">
          <div class="top">
            <div class="text">
              <div
                :class="['text-item', top1Index == index ? 'active' : '']"
                v-for="(item, index) in topiList"
                @click="chooseTopindex(index)"
              >
                {{ item }}
              </div>
            </div>
            <div class="button">
              <div
                :class="['button-item', worldIndex == index ? 'active' : '']"
                v-for="(item, index) in worldlist"
                @click="chooseWorldType(index)"
              >
                {{ item }}
              </div>
            </div>
          </div>
          <div class="bottom">
            <div class="bottom-text-box">
              <div class="bottom-text-item" v-for="(item, index) in bottomTextArr" :key="index">
                <div
                  :class="['text-b', bottomTextItemIndex == index && show ? 'active' : '']"
                  @mouseenter.stop="handleSelect(index)"
                  @mouseleave.stop="parentClick"
                >
                  <span>{{ item.name }}</span>
                  <el-image
                    v-if="bottomTextItemIndex == index"
                    :src="getAssetsFile('icon', 'arrowup.png')"
                    :fit="'fill'"
                  />
                  <el-image v-else :src="getAssetsFile('icon', 'arrowdown.png')" :fit="'fill'" />

                  <div class="line" v-show="bottomTextItemIndex == index">
                    <div
                      :class="['line-button', br.isActive ? 'active' : 'none']"
                      v-for="(br, bri) in item.list"
                      :key="bri"
                      @click.stop="handleSelectchild(br, bri)"
                    >
                      {{ br.name }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mobile-sift" v-else>
        <van-dropdown-menu swipe-threshold="4">
          <van-dropdown-item v-model="value1" :options="option1" @click="onConfirm" />
          <van-dropdown-item v-model="value2" :options="option2" @click="onConfirm" />
        </van-dropdown-menu>
      </div>
      <div class="product-box--ww-bottom">
        <div class="product-list">
          <div class="product-list-item" v-for="item in 8" @click="gotoProductInfo">
            <div class="ww-box">
              <div class="image">
                <!-- <el-image :src="getAssetsFile('images', '产品中心产品4.png')" /> -->
                <img :src="getAssetsFile('images', '产品中心产品4.png')" alt="" />
              </div>
              <div class="text">三色唇膏</div>
            </div>
          </div>
        </div>
        <div class="page-control" v-if="PAGEWIDTH > 960">
          <div class="page-number-control">
            <div class="left-icon">
              <el-icon>
                <ArrowLeft />
              </el-icon>
            </div>

            <div class="number-block">
              <div class="number-item" v-for="(item, index) in 5" :key="index">{{ index + 1 }}</div>
            </div>

            <div class="right-icon">
              <el-icon>
                <ArrowRight />
              </el-icon>
            </div>
          </div>
          <div class="block"></div>
          <div class="jumpto">
            <div class="jump-text">跳转至</div>
            <div class="jump-input">
              <el-input v-model="input" />
            </div>
            <div class="jump-text">页</div>
          </div>
          <div class="button">
            <el-button>确定</el-button>
          </div>
        </div>
        <div class="mobile-page-control" v-else>
          <van-pagination v-model="currentPage" :total-items="24" :items-per-page="5" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, toRefs, watch } from 'vue'
import { getAssetsFile } from '@/utils/tools'
import { useRouter } from 'vue-router'

import { useCounterStore } from '@/stores/screenWidth'
const { screenWidth } = toRefs(useCounterStore())

const router = useRouter()
const input = ref('')
const currentPage = ref(1)
const option1 = [
  { text: '彩妆', value: 0 },
  { text: '洗护', value: 1 },
  { text: '护肤', value: 2 },
  {
    text: '香氛',
    value: 3
  },
  {
    text: '其他',
    value: 4
  }
]
const value1 = ref(0)

const option2 = [
  { text: '全部', value: 0 },
  { text: '国内', value: 1 },
  { text: '国外', value: 2 }
]
const value2 = ref(0)

const onConfirm = () => {}

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}

const worldlist = ['全部', '国内', '国外']
const worldIndex = ref(0)

const chooseWorldType = (index) => {
  worldIndex.value = index
}

const topiList = ['彩妆', '洗护', '护肤', '香氛', '其他']
const top1Index = ref(0)
const chooseTopindex = (index) => {
  top1Index.value = index
}

const bottomTextItemIndex = ref(-1)
const bottomTextArr = ref([
  {
    name: '底妆',
    list: [
      {
        isActive: false,
        name: '口红'
      },
      {
        isActive: false,
        name: '唇釉'
      },
      {
        isActive: false,
        name: '固体唇釉'
      }
    ]
  },
  {
    name: '眉妆',
    list: [
      {
        isActive: false,
        name: '口红'
      },
      {
        isActive: false,
        name: '唇釉'
      },
      {
        isActive: false,
        name: '固体唇釉'
      }
    ]
  },
  {
    name: '眼妆',
    list: [
      {
        isActive: false,
        name: '口红'
      },
      {
        isActive: false,
        name: '唇釉'
      },
      {
        isActive: false,
        name: '固体唇釉'
      }
    ]
  },
  {
    name: '唇妆',
    list: [
      {
        isActive: false,
        name: '口红'
      },
      {
        isActive: false,
        name: '唇釉'
      },
      {
        isActive: false,
        name: '固体唇釉'
      }
    ]
  },
  {
    name: '定妆',
    list: [
      {
        isActive: false,
        name: '口红'
      },
      {
        isActive: false,
        name: '唇釉'
      },
      {
        isActive: false,
        name: '固体唇釉'
      }
    ]
  },
  {
    name: '卸妆',
    list: [
      {
        isActive: false,
        name: '口红'
      },
      {
        isActive: false,
        name: '唇釉'
      },
      {
        isActive: false,
        name: '固体唇釉'
      }
    ]
  },
  {
    name: '其他',
    list: [
      {
        isActive: false,
        name: '口红'
      },
      {
        isActive: false,
        name: '唇釉'
      },
      {
        isActive: false,
        name: '固体唇釉'
      }
    ]
  }
])

const handleSelect = (index) => {
  show.value = true
  bottomTextItemIndex.value = index
}

const handleSelectchild = (br, brindex) => {
  bottomTextArr.value.forEach((item, index) => {
    item.list.forEach((li, liindex) => {
      li.isActive = false
    })
  })
  br.isActive = !br.isActive
}
const show = ref(false)

const parentClick = () => {
  bottomTextItemIndex.value = -1
  show.value = false
}

const gotoProductInfo = () => {
  const href = router.resolve({
    //使用resolve
    path: '/product/product-info'
  })
  // console.log(href);
  // console.log(window.location.href);
  
  // router.push('/product/product-info')
  window.open(href.href, '_blank')
}

const PAGEWIDTH = ref(window.innerWidth)
watch(
  () => screenWidth.value,
  (newVal, oldVal) => {
    PAGEWIDTH.value = newVal
  }
)
</script>
<style lang="scss" scoped>
.product-container {
  width: 100vw;
  // height: 120vh;
  background-color: white;
  padding-top: 5vh;
  padding-bottom: 10vh;
  box-sizing: border-box;

  .product-container-content {
    width: var(--base-width);
    margin: 0 auto;
    // background-color: pink;

    .sift {
      width: 100%;
      height: 120px;
      padding: 2vw;
      padding-top: 0;
      padding-bottom: 0;
      box-sizing: border-box;
      border-radius: 20px 20px 20px 20px;
      background-color: #f6f9ff;

      .sift-box-top {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        .top {
          width: 100%;
          height: 50%;
          display: flex;
          justify-content: space-between;

          border-bottom: 1px solid #e5e5e5;

          .text {
            width: 50%;

            display: flex;
            align-items: center;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 18px;
            color: #333333;

            gap: 3vw;

            .text-item {
              width: 5vw;
              display: flex;
              align-items: center;
              justify-content: center;
              white-space: nowrap;
              cursor: pointer;

              &.active {
                color: #f3a7a4;
              }
            }
          }

          .button {
            width: 50%;

            display: flex;
            align-items: center;
            justify-content: flex-end;
            margin-right: 1vw;

            .button-item {
              cursor: pointer;
              width: 72px;
              height: 24px;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: 14px;
              color: #333333;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 50px;

              &.active {
                background-color: #2d2d2d;
                color: #ffffff;
              }
            }
          }
        }

        .bottom {
          width: 100%;
          height: 50%;

          .bottom-text-box {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            gap: 3vw;

            .bottom-text-item {
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 5vw;
              height: 100%;
              // border: 1px solid red;

              white-space: nowrap;
              .text-b {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5vw;
                cursor: pointer;

                width: 100%;
                height: 100%;
                transition: all 0.3s;

                &.active {
                  background-color: #f9f9f9;

                  span {
                    color: #f3a7a4;
                  }
                }

                span {
                  font-family:
                    Microsoft YaHei,
                    Microsoft YaHei;
                  font-weight: 400;
                  font-size: 16px;
                  color: #333333;
                  user-select: none;
                }
              }

              .line {
                position: absolute;
                left: 0;
                bottom: -8.1vh;
                padding: 20px;
                background-color: #f4f6f7;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 2vw;
                z-index: 2;
                transition: all 0.3s;

                .line-button {
                  font-family:
                    Microsoft YaHei,
                    Microsoft YaHei;
                  font-weight: 400;
                  font-size: 14px;

                  color: #333333;
                  width: 94px;
                  height: 38px;
                  border-radius: 19px 19px 19px 19px;
                  background-color: white;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  cursor: pointer;

                  &.active {
                    color: #f3a7a4;
                  }
                }

                &.none {
                  display: none;
                }

                &.active {
                  display: flex;
                  color: #f3a7a4;
                }
              }
            }
          }
        }
      }
    }

    .product-box--ww-bottom {
      margin-top: 2vh;
      width: 100%;
      height: auto;

      .product-list {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 1vw;

        .product-list-item {
          width: 24%;
          height: 49%;

          display: flex;
          flex-direction: column;

          .ww-box {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            cursor: pointer;
            .image {
              width: 100%;
              height: calc(100% - 60px);

              img {
                width: 100%;
                height: 100%;
                object-fit: fill;
              }
            }

            .text {
              width: 100%;
              height: 60px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: 16px;
              color: #333333;
              background-color: #f8f8f8;
              border-radius: 0px 0px 20px 20px;
            }
          }
        }
      }
    }

    .page-control {
      margin-top: 5vh;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1vw;
      .page-number-control {
        display: flex;
        align-items: center;
        justify-content: center;
        .left-icon {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #dfdfdf;
          font-size: 12px;
          cursor: pointer;
        }
        .number-block {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1vw;
          .number-item {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30px;
            height: 30px;
            border-radius: 4px 4px 4px 4px;
            border: 1px solid #dfdfdf;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 12px;
            color: #666666;
            background-color: white;
            cursor: pointer;
            &.active {
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: 12px;
              color: #ffffff;
              background-color: #f3a7a4;
            }
          }
        }

        .right-icon {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #dfdfdf;
          font-size: 12px;
          cursor: pointer;
        }
      }

      .block {
        width: 2px;
        height: 16px;
        background-color: #dfdfdf;
      }

      .jumpto {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #dfdfdf;
        font-size: 12px;
        gap: 1vw;

        :deep(.el-input) {
          width: 30px;
          height: 30px;
        }
      }
      .button {
        :deep(.el-button) {
          background-color: #f3a7a4;
          color: white;
          border: none;
        }
      }
    }
  }
}

@media (max-width: 960px) {
  .product-container {
    // margin-top: 9vh;
    width: 100vw;
    height: auto;
    background-color: #eff2f5;
    // padding-top: 10vh;
    // padding-bottom: 10vh;
    padding: 0;
    box-sizing: border-box;

    .product-container-content {
      width: var(--base-width);
      margin: 0 auto;
      // background-color: pink;

      .product-box--ww-bottom {
        padding: 2vh;
        padding-top: 0;
        box-sizing: border-box;
        width: 100%;
        height: auto;

        .product-list {
          width: 100%;
          height: 100%;
          display: flex;
          flex-wrap: wrap;
          gap: 1vw;

          .product-list-item {
            margin: 0 auto;
            width: 47%;
            // height: 47%;

            display: flex;
            flex-direction: column;
            margin-bottom: 1vh;

            .ww-box {
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              cursor: pointer;
              .image {
                width: 100%;
                height: calc(100% - 60px);

                img {
                  width: 100%;
                  height: 100%;
                  object-fit: fill;
                }
              }

              .text {
                width: 100%;
                height: 60px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family:
                  Microsoft YaHei,
                  Microsoft YaHei;
                font-weight: 400;
                font-size: 16px;
                color: #333333;
                background-color: #f8f8f8;
                border-radius: 0px 0px 20px 20px;
              }
            }
          }
        }
      }

      .page-control {
        margin-top: 5vh;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1vw;
        .page-number-control {
          display: flex;
          align-items: center;
          justify-content: center;
          .left-icon {
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #dfdfdf;
            font-size: 12px;
            cursor: pointer;
          }
          .number-block {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1vw;
            .number-item {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 30px;
              height: 30px;
              border-radius: 4px 4px 4px 4px;
              border: 1px solid #dfdfdf;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: 12px;
              color: #666666;
              background-color: white;
              cursor: pointer;
              &.active {
                font-family:
                  Microsoft YaHei,
                  Microsoft YaHei;
                font-weight: 400;
                font-size: 12px;
                color: #ffffff;
                background-color: #f3a7a4;
              }
            }
          }

          .right-icon {
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #dfdfdf;
            font-size: 12px;
            cursor: pointer;
          }
        }

        .block {
          width: 2px;
          height: 16px;
          background-color: #dfdfdf;
        }

        .jumpto {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #dfdfdf;
          font-size: 12px;
          gap: 1vw;

          :deep(.el-input) {
            width: 30px;
            height: 30px;
          }
        }
        .button {
          :deep(.el-button) {
            background-color: #f3a7a4;
            color: white;
            border: none;
          }
        }
      }

      .mobile-page-control {
        margin-top: 2vh;
      }
    }
  }
}
</style>
