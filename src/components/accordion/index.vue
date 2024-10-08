<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="shell">
    <div class="box">
      <el-image :src="getAssetsFile('images', '核心优势选中1.png')" :fit="'cover'" />
      <div class="title">
        高<br />
        效<br />
        产<br />
        能
      </div>
      <div class="detail">
        <div class="ad">从创意到实现，全方位助力品牌从0-1的产品孵化之旅</div>
        <br />
        <div class=ab>了解详情 ></div>
      </div>
    </div>
    <div class="box">
      <el-image :src="getAssetsFile('images', '核心优势选中1.png')" :fit="'cover'" />
      <div class="title">
        高<br />
        效<br />
        产<br />
        能
      </div>
      <div class="detail">
        <div class="ad">从创意到实现，全方位助力品牌从0-1的产品孵化之旅</div>
        <br />
        <div class=ab>了解详情 ></div>
      </div>
    </div>
    <div class="box">
      <el-image :src="getAssetsFile('images', '核心优势选中1.png')" :fit="'cover'" />
      <div class="title">
        高<br />
        效<br />
        产<br />
        能
      </div>
      <div class="detail">
        <div class="ad">从创意到实现，全方位助力品牌从0-1的产品孵化之旅</div>
        <br />
        <div class=ab>了解详情 ></div>
      </div>
    </div>
    <div class="box">
      <el-image :src="getAssetsFile('images', '核心优势选中1.png')" :fit="'cover'" />
      <div class="title">
        高<br />
        效<br />
        产<br />
        能
      </div>
      <div class="detail">
        <div class="ad">从创意到实现，全方位助力品牌从0-1的产品孵化之旅</div>
        <br />
        <div class=ab>了解详情 ></div>
      </div>
    </div>
    <div class="box">
      <el-image :src="getAssetsFile('images', '核心优势选中1.png')" :fit="'cover'" />
      <div class="title">
        高<br />
        效<br />
        产<br />
        能
      </div>
      <div class="detail">
        <div class="ad">从创意到实现，全方位助力品牌从0-1的产品孵化之旅</div>
        <br />
        <div class=ab>了解详情 ></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getAssetsFile } from '@/utils/tools'
</script>
<style lang="scss" scoped>
.shell {
  width: 100%;
  height: 500px;
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
      background-color: rgba(0, 0, 0, 0.5);
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
</style>
