<template>
  <div class="home">


    <div class="home-product">
      <div class="home-product-container">
        <div class="aside">
          <div class="block"></div>
          <div class="text">PRODUCT</div>
        </div>
        <div class="topic">
          <div class="left">热门产品</div>
          <div class="right">
            <div v-for="(item, index) in productType" class="right-item">{{ item }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>




</template>
<script setup lang="ts">
import { getAssetsFile } from '@/utils/tools'
import { ref } from 'vue'
const productType = ['底纹', '彩妆', '护肤', '清洁', '隔离']



</script>
<style lang="scss" scoped>
.home {
  width: 100%;

  .home-product {
    width: 100%;
    height: 980px;
    background-color: pink;

    .home-product-container {
      margin: 0 auto;
      width: var(--base-width);
      background-color: skyblue;

      .aside {
        display: flex;

        .text {
          font-weight: 400;
          font-size: 22px;
          color: #f3a7a5;
        }

        .block {
          width: 6px;
          height: 16px;
          background-color: #f3a7a5;
          border-radius: 1px;
        }
      }
    }
  }
}
</style>
