<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="shell">
    <!-- <div class="box">
      <el-image :src="getAssetsFile('images', '高效产能.png')" :fit="'cover'" />
      <div class="title">
        高<br />
        效<br />
        产<br />
        能
      </div>
      <div class="detail">
        <div class="ad">确保产品迅速上市，应对市场瞬息万变的挑战</div>
        <br />
        <div class="ab" @click.stop="clickRouter">了解详情 ></div>
      </div>
    </div>
    <div class="box">
      <el-image :src="getAssetsFile('images', '核心优势选中1.png')" :fit="'cover'" />
      <div class="title">
        助<br />
        力<br />
        品<br />
        牌
      </div>
      <div class="detail">
        <div class="ad">从创意到实现，全方位助力品牌从0-1的产品孵化之旅</div>
        <br />
        <div class="ab" @click.stop="clickRouter">了解详情 ></div>
      </div>
    </div>
    <div class="box">
      <el-image :src="getAssetsFile('images', '精准定位.png')" :fit="'cover'" />
      <div class="title">
        精<br />
        准<br />
        定<br />
        制
      </div>
      <div class="detail">
        <div class="ad">深度洞悉品牌需求，量身定制，满足品牌个性化，产品差异化</div>
        <br />
        <div class="ab" @click.stop="clickRouter">了解详情 ></div>
      </div>
    </div>
    <div class="box">
      <el-image :src="getAssetsFile('images', '科技赋能.png')" :fit="'cover'" />
      <div class="title">
        科<br />
        技<br />
        赋<br />
        能
      </div>
      <div class="detail">
        <div class="ad">持续探索技术革新，智造行业精品</div>
        <br />
        <div class="ab" @click.stop="clickRouter">了解详情 ></div>
      </div>
    </div>
    <div class="box">
      <el-image :src="getAssetsFile('images', '严苛质控.png')" :fit="'cover'" />
      <div class="title">
        严<br />
        苛<br />
        质<br />
        控
      </div>
      <div class="detail">
        <div class="ad">遵循质量管理体系，严苛标准铸就卓越品质，赢得市场信赖</div>
        <br />
        <div class="ab" @click.stop="clickRouter">了解详情 ></div>
      </div>
    </div> -->

    <div class="box" v-for="(item, i) in list" :key="i">
      <!-- <el-image :src="item.thumb" :fit="'cover'" /> -->
      <van-image :src="item.thumb" fit="cover" lazy-load>
        <template v-slot:loading>
          <van-loading type="spinner" size="20" />
        </template>
      </van-image>
      <div class="title">
        {{ item.name }}
      </div>
      <div class="detail">
        <div class="ad">{{ item.description }}</div>
        <br />
        <div class="ab" @click.stop="clickRouter">了解详情 ></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { getAssetsFile } from '@/utils/tools'
import { useRouter } from 'vue-router'
import emitter from '@/utils/mitt'
const props = defineProps({
  list: {
    type: Array,
    default: () => []
  }
})
const router = useRouter()
const clickRouter = () => {
  router.push('/business')
  emitter.emit('DOMINDEX', 2)
}
</script>
<style lang="scss" scoped>
.shell {
  width: 100%;
  height: 550px;
  display: flex;

  .box {
    position: relative;
    flex: 1;
    margin: 0 2px;
    overflow: hidden;
    transition: 0.5s;
    border-radius: 10px;
    cursor: pointer;

    :deep(.el-image) {
      width: 200%;
      height: 100%;
      object-fit: cover;
    }
    :deep(.van-image) {
      width: 200%;
      height: 100%;
    }

    .title {
      position: absolute;
      top: 0;
      left: 0;
      font-family:
        Microsoft YaHei,
        Microsoft YaHei;
      font-weight: 400;
      font-size: 30px;
      color: #ffffff;
      width: 100%;
      height: 100%;
      writing-mode: vertical-rl;
      letter-spacing: 2vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.5);
      transition: 0.3s;
    }

    .detail {
      position: absolute;
      bottom: 0;
      right: 0%;
      height: 0;
      width: 70%;
      font-family:
        Microsoft YaHei,
        Microsoft YaHei;
      font-weight: 400;
      font-size: 18px;
      color: #ffffff;
      background-image: url('../../assets/images/黑色渐变.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      .ad {
        // display: block;
        margin-top: 10px;
        margin-left: 10px;
      }

      .ab {
        margin-top: -20px;
        margin-left: 10px;
      }
    }

    &:hover {
      flex-basis: 40%;

      :deep(.el-image) {
        width: 100%;
        height: 100%;
      }

      :deep(.van-image) {
        width: 100%;
        height: 100%;
      }

      .title {
        width: 30%;
      }
      .detail {
        // width: 70%;
        height: 16%;
        transition: 1s;
      }
    }
  }
}

@media (min-width: 2133px) {
  .shell {
  width: 100%;
  height: 60vh;
  display: flex;

  .box {
    position: relative;
    flex: 1;
    margin: 0 0.5vh;
    overflow: hidden;
    transition: 0.5s;
    border-radius: 4vh;
    cursor: pointer;

    :deep(.el-image) {
      width: 200%;
      height: 100%;
      object-fit: cover;
    }
    :deep(.van-image) {
      width: 200%;
      height: 100%;
    }

    .title {
      position: absolute;
      top: 0;
      left: 0;
      font-family:
        Microsoft YaHei,
        Microsoft YaHei;
      font-weight: 400;
      font-size: 3rem;
      color: #ffffff;
      width: 100%;
      height: 100%;
      writing-mode: vertical-rl;
      letter-spacing: 2vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.5);
      transition: 0.3s;
    }

    .detail {
      position: absolute;
      bottom: 0;
      right: 0%;
      height: 0;
      width: 70%;
      font-family:
        Microsoft YaHei,
        Microsoft YaHei;
      font-weight: 400;
      font-size: 1.2rem;
      color: #ffffff;
      background-image: url('../../assets/images/黑色渐变.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      .ad {
        // display: block;
        margin-top: 1vh;
        margin-left: 1vh;
      }

      .ab {
        margin-top: -2vh;
        margin-left: 1vh;
      }
    }

    &:hover {
      flex-basis: 40%;

      :deep(.el-image) {
        width: 100%;
        height: 100%;
      }

      :deep(.van-image) {
        width: 100%;
        height: 100%;
      }

      .title {
        width: 30%;
      }
      .detail {
        // width: 70%;
        height: 16%;
        transition: 1s;
      }
    }
  }
}
}
@media (min-width: 1440px) and (max-width: 1520px) {
  .shell {
    width: 100%;
    height: 450px;
    display: flex;

    .box {
      position: relative;
      flex: 1;
      margin: 0 2px;
      overflow: hidden;
      transition: 0.5s;
      cursor: pointer;
      :deep(.van-image) {
        width: 200%;
        height: 100%;
      }
      :deep(.el-image) {
        width: 200%;
        height: 100%;
        object-fit: cover;
      }

      .title {
        position: absolute;
        top: 0;
        left: 0;
        font-family:
          Microsoft YaHei,
          Microsoft YaHei;
        font-weight: 400;
        font-size: 30px;
        color: #ffffff;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.5);
        transition: 0.3s;
      }

      .detail {
        position: absolute;
        bottom: 0;
        right: 0%;
        height: 0;
        width: 70%;
        font-family:
          Microsoft YaHei,
          Microsoft YaHei;
        font-weight: 400;
        font-size: 18px;
        color: #ffffff;
        background-image: url('../../assets/images/黑色渐变.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        .ad {
          // display: block;
          margin-top: 10px;
          margin-left: 10px;
        }

        .ab {
          margin-top: -20px;
          margin-left: 10px;
        }
      }

      &:hover {
        flex-basis: 40%;

        :deep(.el-image) {
          width: 100%;
          height: 100%;
        }

        .title {
          width: 30%;
        }
        .detail {
          // width: 70%;
          height: 20%;
          transition: 1s;
        }
      }
    }
  }
}
@media (min-width: 1220px) and (max-width: 1440px) {
  .shell {
    width: 100%;
    height: 450px;
    display: flex;

    .box {
      position: relative;
      flex: 1;
      margin: 0 2px;
      overflow: hidden;
      transition: 0.5s;
      cursor: pointer;

      :deep(.el-image) {
        width: 200%;
        height: 100%;
        object-fit: cover;
      }
      :deep(.van-image) {
        width: 200%;
        height: 100%;
        object-fit: cover;
      }
      .title {
        position: absolute;
        top: 0;
        left: 0;
        font-family:
          Microsoft YaHei,
          Microsoft YaHei;
        font-weight: 400;
        font-size: 30px;
        color: #ffffff;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.5);
        transition: 0.3s;
      }

      .detail {
        position: absolute;
        bottom: 0;
        right: 0%;
        height: 0;
        width: 70%;
        font-family:
          Microsoft YaHei,
          Microsoft YaHei;
        font-weight: 400;
        font-size: 16px;
        color: #ffffff;
        background-image: url('../../assets/images/黑色渐变.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        .ad {
          // display: block;
          margin-top: 10px;
          margin-left: 10px;
        }

        .ab {
          margin-top: -20px;
          margin-left: 10px;
        }
      }

      &:hover {
        flex-basis: 40%;

        :deep(.el-image) {
          width: 100%;
          height: 100%;
        }

        .title {
          width: 30%;
        }
        .detail {
          // width: 70%;
          height: 20%;
          transition: 1s;
        }
      }
    }
  }
}

@media (min-width: 960px) and (max-width: 1220px) {
  .shell {
    width: 100%;
    height: 420px;
    display: flex;

    .box {
      position: relative;
      flex: 1;
      margin: 0 2px;
      overflow: hidden;
      transition: 0.5s;
      cursor: pointer;

      :deep(.el-image) {
        width: 200%;
        height: 100%;
        object-fit: cover;
      }

      :deep(.van-image) {
        width: 200%;
        height: 100%;
        object-fit: cover;
      }

      .title {
        position: absolute;
        top: 0;
        left: 0;
        font-family:
          Microsoft YaHei,
          Microsoft YaHei;
        font-weight: 400;
        font-size: 25px;
        color: #ffffff;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.5);
        transition: 0.3s;
      }

      .detail {
        position: absolute;
        bottom: 0;
        right: 0%;
        height: 0;
        width: 70%;
        font-family:
          Microsoft YaHei,
          Microsoft YaHei;
        font-weight: 400;
        font-size: 14px;
        color: #ffffff;
        // background-color: rgba(0, 0, 0, 0.5);
        // background-image: linear-gradient(to right, #000000, #545454);
        background-image: url('../../assets/images/黑色渐变.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        .ad {
          // display: block;
          margin-top: 10px;
          margin-left: 10px;
        }

        .ab {
          margin-top: -20px;
          margin-left: 10px;
        }
      }

      &:hover {
        flex-basis: 40%;

        :deep(.el-image) {
          width: 100%;
          height: 100%;
        }

        .title {
          width: 30%;
        }
        .detail {
          // width: 70%;
          height: 20%;
          transition: 1s;
        }
      }
    }
  }
}
</style>
