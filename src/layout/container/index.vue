<template>
  <div class="common-layout">
    <el-container>
      <el-affix :offset="0">
        <el-header>
          <slot name="Header"></slot>
        </el-header>
      </el-affix>
      <el-main>
        <slot name="Main"></slot>
      </el-main>
      <el-footer>
        <slot name="Footer"></slot>
      </el-footer>
    </el-container>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.common-layout {
  border: 1px solid red;
  :deep(.el-header) {
    margin: 0 auto;
    width: var(--header-width);
    height: var(--header-height);
    padding: 0;
  }
}
</style>
