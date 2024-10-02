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
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
  :deep(.el-header) {
    height: var(--header-height);
    padding: 0;
    background-color: transparent;
  }
  :deep(.el-footer) {
    height: var(--footer-height);
    padding: 0;
    background-color: #3a3a3a;
  }
}
</style>
