<template>
  <div class="product-container">
    <div class="product-container-content">
      <div class="sift" v-if="PAGEWIDTH > 960">
        <div class="sift-box-top">
          <div class="top">
            <div class="text">
              <div
                :class="['text-item', top1Index == index ? 'active' : '']"
                v-for="(item, index) in productCategory"
                :key="item.id"
                @click="chooseTopindex(item, index)"
              >
                {{ item.name }}
              </div>
            </div>
            <div class="button">
              <div
                :class="['button-item', worldIndex == index ? 'active' : '']"
                v-for="(item, index) in list"
                @click="chooseWorldType(index)"
              >
                {{ item.name }}
              </div>
            </div>
          </div>
          <div class="bottom">
            <div class="bottom-text-box">
              <!-- @click="handleSelect(item, index)" -->
              <!-- @mouseenter.stop="handleSelect(index)"
                  @mouseleave.stop="parentClick" -->
              <div class="bottom-text-item" v-for="(item, index) in productChild" :key="index">
                <div
                  :class="['text-b', bottomTextItemIndex == index ? 'active' : '']"
                  @click.stop="handleSelect(item, index)"
                  @mouseenter.stop="mouseenterhandleSelect(item, index)"
                  @mouseleave.stop="parentClick"
                >
                  <span>{{ item.name }}</span>
                  <el-image
                    v-if="bottomTextItemIndex == index && show"
                    :src="getAssetsFile('icon', 'arrowup.png')"
                    :fit="'fill'"
                  />
                  <el-image v-else :src="getAssetsFile('icon', 'arrowdown.png')" :fit="'fill'" />

                  <div
                    class="line"
                    v-if="
                      bottomTextItemIndex == index &&
                      show &&
                      item.children &&
                      item.children.length > 0
                    "
                  >
                    <div
                      :class="['line-button', br.isActive ? 'active' : 'none']"
                      v-for="(br, bri) in item.children"
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
        <!-- {{ mobileTypeList }} -->
        <van-dropdown-menu>
          <van-dropdown-item
            v-if="mobileTypeList.length !== 0"
            ref="dropdown1"
            v-model="value1"
            :options="mobileTypeList"
            @click="onConfirm"
          />
          <van-dropdown-item
            ref="dropdown2"
            v-model="value2"
            :options="mobileList"
            @click="onConfirm"
          />
        </van-dropdown-menu>
      </div>
      <div class="product-box--ww-bottom">
        <div class="product-list" v-if="productList && productList.length > 0">
          <div
            class="product-list-item"
            v-for="(item, index) in productList"
            :key="index"
            @click="gotoProductInfo(item)"
          >
            <div class="ww-box">
              <div class="image">
                <van-image :src="item.thumb" lazy-load>
                  <template v-slot:loading>
                    <van-loading type="spinner" size="20" />
                  </template>
                </van-image>
                <!-- <img :src="item.thumb" alt="" /> -->
              </div>
              <div class="text">{{ item.name }}</div>
            </div>
          </div>
        </div>
        <van-empty description="暂无产品数据" v-else />
        <div class="page-control">
          <!-- <div class="page-number-control">
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
          </div> -->
          <el-pagination
            v-model:current-page="currentPage"
            background
            :page-size="1"
            :pager-count="5"
            layout="prev, pager, next"
            :total="renderToStreamot"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
          <div class="block"></div>
          <div class="jumpto">
            <div class="jump-text">跳转至</div>
            <div class="jump-input">
              <el-input v-model="input" />
            </div>
            <div class="jump-text">页</div>
          </div>
          <div class="button">
            <el-button @click="jumpTo">确定</el-button>
          </div>
        </div>
        <!-- <div class="mobile-page-control" v-if="PAGEWIDTH <= 960">
          <van-pagination v-model="currentPage" :total-items="24" :items-per-page="5" />
        </div> -->
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, toRefs, watch, onMounted, computed, nextTick } from 'vue'
import { getAssetsFile } from '@/utils/tools'
import { useRouter } from 'vue-router'
import { getProductCategory, getProductList } from '@/api/index'
import { useCounterStore } from '@/stores/screenWidth'
const { screenWidth } = toRefs(useCounterStore())

const router = useRouter()
const input = ref()
// const currentPage = ref(1)
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
const value1 = ref('3')

const option2 = [
  { text: '国内', value: 0 },
  { text: '国外', value: 1 }
]
const value2 = ref('1')

const onConfirm = () => {
  console.log('value1:', option1[value1.value])
  console.log('value2:', value2.value)
  mobileTypeList.value = []
  // 切换国内外
  if (Number(value2.value) == 1) {
    mobileList.value[0].children.forEach((item, index) => {
      let obj = {
        text: item.name,
        value: item.id
      }
      mobileTypeList.value.push(obj)
    })
    if (mobileList.value[0].children.length > 0) {
      selectItemID.value = value1.value
      getProductListData()
    } else {
      selectItemID.value = value2.value
      getProductListData()
    }

    // value1.value = mobileTypeList.value[0].value
  } else {
    mobileList.value[1].children.forEach((item, index) => {
      let obj = {
        text: item.name,
        value: item.id
      }
      mobileTypeList.value.push(obj)
    })

    // value1.value = mobileTypeList.value[0].value

    if (mobileList.value[1].children.length > 0) {
      selectItemID.value = value1.value
      getProductListData()
    } else {
      selectItemID.value = value2.value
      getProductListData()
    }
  }
}

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
  // 1 - 1 * 8 = 0
  // 2 - 1 * 8 = 8
  // 3 - 1 * 8 = 16
  offset.value = (val - 1) * 8
  getProductListData()
}

const jumpTo = () => {
  currentPage.value = Number(input.value)
  handleCurrentChange(currentPage.value)
  // console.log(currentPage.value)
}

const worldIndex = ref(0)
// 切换国内外产品
const chooseWorldType = (index) => {
  worldIndex.value = index
  if (list.value[worldIndex.value].children) {
    selectItemID.value = list.value[worldIndex.value].children[top1Index.value].id
    getProductListData()
  } else {
    selectItemID.value = list.value[worldIndex.value].id
    getProductListData()
  }
}

const top1Index = ref(0)

// 点击顶部彩妆、洗护.....一栏
const chooseTopindex = (item, index) => {
  top1Index.value = index
  selectItemID.value = item.id
  getProductListData()
}

// 哪一类展示下拉框
const bottomTextItemIndex = ref(-1)

const mouseenterhandleSelect = (item, index) => {
  show.value = true
  bottomTextItemIndex.value = index
  selectItemID.value = item.id
  // getProductListData()
}

const handleSelect = () => {
  getProductListData()
}

const handleSelectchild = (br, brindex) => {
  show.value = false
  parentList.value[top1Index.value].children.forEach((item, index) => {
    if (item.children) {
      item.children.forEach((child, childindex) => {
        child.isActive = false
      })
    }
  })
  selectItemID.value = br.id
  getProductListData()
  br.isActive = !br.isActive
}
// 是否展示下拉框
const show = ref(false)

// 关闭下拉框
const parentClick = () => {
  show.value = false
  bottomTextItemIndex.value = -1
}

const gotoProductInfo = (item) => {
  console.log(item)

  const href = router.resolve({
    //使用resolve
    path: '/product/product-info',
    query: {
      id: item.id
    }
  })
  window.open(href.href, '_blank')
}

const list = ref([])
const parentList = ref([])
const mobileList = ref([])
const mobileTypeList = ref([])
// 获取tab栏以及首页数据
const getProductCategoryData = async () => {
  mobileList.value = []
  mobileTypeList.value = []
  let res = await getProductCategory()
  if (res.status == 1) {
    list.value = res.data
    // 移动端数据
    res.data.forEach((item, index) => {
      let obj = {
        text: item.name,
        value: item.id,
        children: item.children ? item.children : []
      }
      mobileList.value.push(obj)
    })
    if (value2.value == '1') {
      mobileList.value[0].children.forEach((item, index) => {
        let obj = {
          text: item.name,
          value: item.id
        }
        mobileTypeList.value.push(obj)
      })

      value1.value = mobileTypeList.value[0].value
    } else {
      mobileList.value[1].children.forEach((item, index) => {
        let obj = {
          text: item.name,
          value: item.id
        }
        mobileTypeList.value.push(obj)
      })

      value1.value = mobileTypeList.value[0].value
    }

    // pc端
    if (list.value[worldIndex.value].children) {
      selectItemID.value = list.value[worldIndex.value].children[top1Index.value].id
      getProductListData()
    } else {
      selectItemID.value = list.value[worldIndex.value].id
      getProductListData()
    }
  }
}

// 从第X条查起，0代表第一条
const offset = ref(0)
const currentPage = ref(1)
// 查询x条
const limit = ref(8)
const totalPage = ref(0)
const productList = ref([])
const selectItemID = ref()
const getProductListData = async () => {
  let data = {
    category_id: selectItemID.value,
    offset: offset.value,
    limit: limit.value
  }
  let res = await getProductList(data)
  if (res.status == 1) {
    productList.value = res.data.list
    totalPage.value = res.data.total
  }
}

onMounted(() => {
  nextTick(() => {
    getProductCategoryData()
  })
})
// 顶部tab栏的数据
const productCategory = computed(() => {
  if (list.value.length > 0) {
    parentList.value = list.value[worldIndex.value].children
      ? list.value[worldIndex.value].children
      : []
    return parentList.value
  }
})
// 下拉框的数据
const productChild = computed(() => {
  if (parentList.value.length > 0 && parentList.value[top1Index.value].children) {
    parentList.value[top1Index.value].children.forEach((item, index) => {
      if (item.children) {
        item.children.forEach((child, childindex) => {
          child.isActive = false
        })
      }
    })
    return parentList.value[top1Index.value].children
      ? parentList.value[top1Index.value].children
      : []
  }
})

// const mobileTypeList = computed(() => {
//   if (Number(value2.value) == 1) {
//     return mobileList.value.filter((item) => item.id == '1')
//   } else {
//     return mobileList.value.filter((item) => item.id == '2')
//   }
// })

// 页数
const renderToStreamot = computed(() => {
  // 一页8条数据
  return totalPage.value ? Number(totalPage.value) / 8 : 0
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
              margin-left: 0.5vh;
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
