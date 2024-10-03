<script setup lang="ts">
import HomeView from '@/views/Home/index.vue'
import { getAssetsFile } from '@/utils/tools'
const HeaderInfo = ['首页', '产品中心', '业务合作', '研发中心', '关于奇伟', '联系我们']
const IconInfo = [
  getAssetsFile('icon', 'search.png'),
  getAssetsFile('icon', 'share.png'),
  getAssetsFile('icon', 'collect.png')
]
</script>

<template>
  <div class="container-fluid main custom-style">
    <el-container>
      <el-affix :offset="0">
        <el-header>
          <CusHeader />
        </el-header>
      </el-affix>

      <el-main>
        <slot name="Main"> <HomeView /></slot>
      </el-main>
      <el-footer>
        <CusFooter />
      </el-footer>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.custom-style {
  padding: 0;
  width: 100%;
  :deep(.el-header) {
    width: 100%;
    height: var(--header-height);
    background-color: black;
    padding: 0;
    margin: 0 auto;
  }
  :deep(.el-main) {
    width: 100%;
    padding: 0;
    margin: 0 auto;
  }
  :deep(.el-footer) {
    width: 100%;
    height: var(--footer-height);
    padding: 0;
    background-color: #3a3a3a;
  }
}
</style>
