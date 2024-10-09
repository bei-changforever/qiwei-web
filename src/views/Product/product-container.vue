<template>
  <div class="product-container" @click.stop="parentClick">
    <div class="product-container-content">
      <div class="sift">
        <div class="sift-box-top">
          <div class="top">
            <div class="text">
              <div class="text-item active">彩妆</div>
              <div class="text-item">洗护</div>
              <div class="text-item">护肤</div>
              <div class="text-item">香氛</div>
              <div class="text-item">其他</div>
            </div>
            <div class="button">
              <div class="button-item active">全部</div>
              <div class="button-item">国内</div>
              <div class="button-item">国外</div>
            </div>
          </div>
          <div class="bottom">
            <div class="bottom-text-box">
              <div class="bottom-text-item" v-for="(item, index) in bottomTextArr" :key="index">
                <div
                  :class="['text-b', bottomTextItemIndex == index ? 'active' : '']"
                  @click.stop="handleSelect(index)"
                >
                  <span>{{ item.name }}</span>
                  <el-image
                    v-if="bottomTextItemIndex == index"
                    :src="getAssetsFile('icon', 'arrowup.png')"
                    :fit="'fill'"
                  />
                  <el-image v-else :src="getAssetsFile('icon', 'arrowdown.png')" :fit="'fill'" />
                </div>
                <div class="line" v-show="bottomTextItemIndex == index">
                  <div
                    :class="['line-button', br.isActive ? 'active' : 'none']"
                    v-for="(br, bri) in item.list"
                    :key="bri"
                    @click.stop="handleSelectchild(br)"
                  >
                    {{ br.name }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-box--ww-bottom">
        <div class="product-list">
          <div class="product-list-item" v-for="item in 8">
            <div class="ww-box">
              <div class="image">
                <!-- <el-image :src="getAssetsFile('images', '产品中心产品4.png')" /> -->
                <img :src="getAssetsFile('images', '产品中心产品4.png')" alt="" />
              </div>
              <div class="text">三色唇膏</div>
            </div>
          </div>
        </div>
        <div class="page-control">
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
            <el-button >确定</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { getAssetsFile } from '@/utils/tools'

const input = ref('')

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
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
  if (bottomTextItemIndex.value == index) {
    bottomTextItemIndex.value = -1
  } else {
    bottomTextItemIndex.value = index
  }
}

const handleSelectchild = (br) => {
  br.isActive = !br.isActive
}

const parentClick = () => {
  bottomTextItemIndex.value = -1
}
</script>
<style lang="scss" scoped>
.product-container {
  width: 100vw;
  // height: 120vh;
  background-color: white;
  padding-top: 10vh;
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

              .text-b {
                display: flex;
                align-items: center;
                justify-content: flex-start;
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
                bottom: -8vh;
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
          background-color: #F3A7A4;
          color: white;
          border: none;
        }
      }
    }
  }
}
</style>
