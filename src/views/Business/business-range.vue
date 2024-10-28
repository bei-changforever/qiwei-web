<template>
  <div class="business-range">
    <div class="business-range-container">
      <div class="control-button">
        <div
          :class="['control-button-item', activeIndex == index ? 'active' : '']"
          v-for="(item, index) in list"
          :key="index"
          @click="handleSelect(index)"
        >
          {{ item }}
        </div>
      </div>

      <div class="business-container-top">
        <div class="business-container-left">
          <div class="business-container-left-item">
            <div class="topic">
              <div class="block"></div>
              <div class="text">BUSINESS</div>
            </div>
            <div class="name">业务范围</div>
          </div>
        </div>

        <div class="business-container-right">
          <div class="business-container-right-item" v-for="(item, index) in list2" :key="index">
            <div
              :class="['text', typeIndex == index ? 'active' : '']"
              @click="selfHandleSelect(index)"
            >
              {{ item.name }}
            </div>
            <div class="line" v-show="index !== list2.length - 1"></div>
          </div>
        </div>
      </div>

      <div class="business-container-bottom">
        <div
          class="business-container-bottom-item"
          v-for="(item, index) in list3"
          :key="index"
          v-if="list3.length > 0"
          @click="gotoProductInfo(item, index)"
        >
          <!-- <el-image :src="item.thumb" :fit="'fill'" /> -->
          <van-image :src="item.thumb" lazy-load fit="fill">
            <template v-slot:loading>
              <van-loading type="spinner" size="20" />
            </template>
          </van-image>
        </div>
        <div class="empty-box" v-else>
          <van-empty description="暂无数据" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { getAssetsFile } from '@/utils/tools'
import emitter from '@/utils/mitt'
import { useRouter } from 'vue-router'
import { getBusinessCategory, getBusinessScope } from '@/api/index'
const list = ['业务范围', '服务原则', '合作模式', '全球供应链']
const list2 = ref(['彩妆产品', '洗护产品', '护肤产品', '香氛产品'])
const list3 = ref([
  getAssetsFile('images', '口红系列.png'),
  getAssetsFile('images', '唇釉系列.png'),
  getAssetsFile('images', '粉底系列.png'),
  getAssetsFile('images', '气垫系列.png'),
  getAssetsFile('images', '腮红系列.png'),
  getAssetsFile('images', '定妆系列.png'),
  getAssetsFile('images', '隔离系列.png'),
  getAssetsFile('images', '眉笔系列.png'),
  getAssetsFile('images', '眼影系列.png'),
  getAssetsFile('images', '妆前系列.png'),
  getAssetsFile('images', '卸妆系列.png'),
  getAssetsFile('images', '眼线笔系列.png'),
  getAssetsFile('images', '睫毛育系列.png')
])
const router = useRouter()
const activeIndex = ref(0)

const typeIndex = ref(0)
const handleSelect = (index) => {
  if (activeIndex.value == index) {
    return
  } else {
    activeIndex.value = index
    emitter.emit('tagViewsShowModel', activeIndex.value)
  }
}

const gotoProductInfo = (item, index) => {
  // console.log(item)
  router.push({
    path: '/product/product-detail',
    query: { id: item.id }
  })
}

const getList = async () => {
  let id = list2.value[typeIndex.value].id
  let res = await getBusinessScope(id)
  if (res.status == 1) {
    list3.value = res.data
  }
}
const getRange = async () => {
  let res = await getBusinessCategory()
  if (res.status == 1) {
    list2.value = res.data
    getList()
  }
}
const selfHandleSelect = (index) => {
  typeIndex.value = index
  getList()
}

onMounted(() => {
  getRange()
})
</script>
<style lang="scss" scoped>
.business-range {
  width: 100vw;
  height: 100vh;
  padding-top: 12vh;
  background-color: white;

  .business-range-container {
    margin: 0 auto;
    width: var(--base-width);
    transition: all 0.3s ease-in;
    zoom: 1;

    .control-button {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1vw;
      margin-bottom: 5vh;

      .control-button-item {
        width: 150px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family:
          Microsoft YaHei,
          Microsoft YaHei;
        font-weight: 400;
        font-size: 14px;
        color: #999999;
        background-color: #f6f9ff;
        border-radius: 20px 20px 20px 20px;
        cursor: pointer;

        &.active {
          background-color: #f3a7a5;
          color: white;
        }
      }
    }

    .business-container-top {
      width: 100%;
      display: flex;

      .business-container-left {
        width: 50%;

        .business-container-left-item {
          .topic {
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
            gap: 10px;

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
      }

      .business-container-right {
        width: 50%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 1vw;

        .business-container-right-item {
          margin-top: 4vh;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 1vw;
          cursor: pointer;

          .text {
            width: 80px;
            height: 32px;

            border-radius: 18px 18px 18px 18px;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 14px;
            color: #333333;
            display: flex;
            align-items: center;
            justify-content: center;

            &.active {
              background-color: #2d2d2d;
              color: white;
            }
          }

          .line {
            width: 18px;
            height: 1px;
            background: #e0e0e0;
            border-radius: 0px 0px 0px 0px;
          }
        }
      }
    }

    .business-container-bottom {
      margin: 3vh auto;
      width: 97%;
      display: flex;
      align-items: center;
      //   justify-content: center;
      //   background-color: pink;
      flex-wrap: wrap;
      gap: 0.5vw;

      .empty-box {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      //   padding-left: 4.5vw;
      .business-container-bottom-item {
        width: 24%;
        height: 100px;
        height: auto;

        :deep(.el-image) {
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
        :deep(.van-image) {
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
      }
    }
  }
}

@media (max-width: 960px) {
  .business-range {
    width: 100vw;
    height: auto;
    // padding-top: 12vh;
    padding: 0;
    background-color: white;

    .business-range-container {
      margin: 0 auto;
      width: 100%;
      transition: all 0.3s ease-in;
      zoom: 1;
      padding: 2vh;
      box-sizing: border-box;

      .control-button {
        width: 100%;
        display: none;
        align-items: center;
        justify-content: center;
        gap: 1vw;
        // margin-bottom: 5vh;

        .control-button-item {
          width: 150px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family:
            Microsoft YaHei,
            Microsoft YaHei;
          font-weight: 400;
          font-size: 14px;
          color: #999999;
          background-color: #f6f9ff;
          border-radius: 20px 20px 20px 20px;
          cursor: pointer;

          &.active {
            background-color: #f3a7a5;
            color: white;
          }
        }
      }

      .business-container-top {
        width: 100%;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        // border: 1px solid red;

        .business-container-left {
          width: 100%;
          height: 50%;

          .business-container-left-item {
            .topic {
              width: 100%;
              height: 40px;
              display: none;
              align-items: center;
              gap: 10px;

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
              // margin-top: 1vh;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: bold;
              font-size: 20px;
              color: #333333;
            }
          }
        }

        .business-container-right {
          padding: 0;
          width: 100%;
          height: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2.5vw;
          // background-color: orange;

          .business-container-right-item {
            margin-top: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            .text {
              width: 80px;
              height: 32px;
              border-radius: 18px 18px 18px 18px;
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: 14px;
              color: #333333;
              display: flex;
              align-items: center;
              justify-content: center;

              &.active {
                background-color: #2d2d2d;
                color: white;
              }
            }

            .line {
              display: none;
              width: 18px;
              height: 1px;
              background: #e0e0e0;
              border-radius: 0px 0px 0px 0px;
            }
          }
        }
      }

      .business-container-bottom {
        margin: 1vh auto;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 0.5vh;

        .business-container-bottom-item {
          width: 49%;
          height: auto;

          :deep(.el-image) {
            width: 100%;
            height: 100%;
            cursor: pointer;
          }
          :deep(.van-image) {
            width: 100%;
            height: 100%;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
