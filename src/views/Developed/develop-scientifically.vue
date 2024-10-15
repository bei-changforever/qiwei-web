<template>
  <div class="develop-scientificall">
    <div class="develop-scientificall-base-container">
      <div class="develop-container-top">
        <div class="develop-container-left">
          <div class="develop-container-left-item">
            <div class="topic">
              <div class="block"></div>
              <div class="text">SCIENCE</div>
            </div>
            <div class="name">科学配方理念</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.develop-scientificall {
  width: 100vw;
  height: 100vh;

  .develop-scientificall-base-container {
    margin: 0 auto;
    width: var(--base-width);
    transition: all 0.3s ease-in;
    zoom: 1;
    .develop-container-top {
      width: 100%;
      display: flex;

      .develop-container-left {
        width: 50%;

        .develop-container-left-item {
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
  }
}
</style>
