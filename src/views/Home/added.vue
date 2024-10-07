<template>
  <div class="added">
    <div class="added-container">
      <div class="business-container-left-item">
        <div class="topic">
          <div class="block"></div>
          <div class="text">added</div>
        </div>
        <div class="name">免费服务</div>
        <div class="fu-name">12项增值配套服务</div>
        <div class="desc">我们提供免费一站式全套服务保障，全方位助力客户项目成功落地。</div>
      </div>
      <div class="added-big-image-box">
        <el-image :src="getAssetsFile('images', '免费服务.png')" :fit="'fill'" />
        <div class="text-item">
          <div class="text">
            <span>公司注册</span>
            <span>品牌注册</span>
          </div>
          <div class="text">
            <span>品牌策划</span>
            <span>产品定位</span>
            <span>包装设计</span>
          </div>
          <div class="text">加工方案定制</div>
          <div class="text">来料检验</div>
          <div class="text">产品送检</div>
          <div class="text">双方产品备案</div>
          <div class="text">包材半成品及检验质量跟踪服务</div>
          <div class="text">
            <span>仓库贮存</span>
            <span>物流配送服务</span>
          </div>
          <div class="text">
            <span>品牌营销方案指导</span>
            <span>网络运营推广技术支持</span>
          </div>
          <div class="text">生产视频及图片拍摄</div>
          <div class="text">
            <span>产品拍摄</span>
            <span>详情页制作</span>
          </div>
          <div class="text">提供商品条码服务</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getAssetsFile } from '@/utils/tools'
</script>
<style lang="scss" scoped>
.added {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  .added-container {
    padding-top: 80px;
    width: var(--base-width);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .business-container-left-item {
      width: 100%;

      .topic {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        gap: 10px;

        .text {
          font-weight: 400;
          font-size: 22px;
          color: #f3a7a5;
        }

        .block {
          width: 6px;
          height: 16px;
          border-radius: 1px;
          background-color: #f3a7a5;
        }
      }

      .name {
        margin-top: 10px;
        font-family:
          Microsoft YaHei,
          Microsoft YaHei;
        font-weight: bold;
        font-size: 42px;
        color: #333333;
      }
      .fu-name {
        margin-top: 10px;
        font-family:
          Microsoft YaHei,
          Microsoft YaHei;
        font-weight: 400;
        font-size: 32px;
        color: #333333;
      }
      .desc {
        margin-top: 10px;
        font-family:
          Microsoft YaHei,
          Microsoft YaHei;
        font-weight: 400;
        font-size: 20px;
        color: #666666;
        line-height: 34px;
      }
    }
    .added-big-image-box {
      position: relative;
      margin-top: 2vw;
      width: 55vw;
      height: 25vw;

      :deep(.el-image) {
        width: 100%;
        height: 100%;
      }

      .text-item {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        .text {
          position: absolute;
          width: 24%;
          height: 33%;
          display: flex;
          align-items: center;
          flex-direction: column;
          
          justify-content: center;
          //   border: 1px solid red;
          color: #666666;
          font-family:
            Microsoft YaHei,
            Microsoft YaHei;
          &:nth-child(1) {
            top: 10%;
            left: 0;
          }

          &:nth-child(2) {
            top: 10%;
            left: 22%;
          }
          &:nth-child(3) {
            top: 10%;
            left: 43%;
          }
          &:nth-child(4) {
            top: 10%;
            left: 64.5%;
          }
          &:nth-child(5) {
            top: 46%;
            left: 0.5%;
          }
          &:nth-child(6) {
            top: 46%;
            left: 22%;
          }
          &:nth-child(7) {
            top: 46%;
            left: 43%;
          }
          &:nth-child(8) {
            top: 46%;
            left: 64.5%;
          }
          &:nth-child(9) {
            top: 88%;
            left: 0%;
          }
          &:nth-child(10) {
            top: 88%;
            left: 25%;
          }
          &:nth-child(11) {
            top: 88%;
            left: 50%;
          }
          &:nth-child(12) {
            top: 88%;
            left: 74%;
          }
        }
      }
    }
  }
}
</style>
