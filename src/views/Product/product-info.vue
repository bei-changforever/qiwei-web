<template>
  <div class="product-info">
    <div class="product-info-container">
      <div class="product-content">
        <div class="product-left">
          <div class="big-image">
            <img :src="getAssetsFile('images', '主图1.png')" alt="">
          </div>
          <div class="small-image-control">
            <div class="prev">
              <el-icon>
                <ArrowLeft />
              </el-icon>
            </div>
            <div class="small-image">
              <div class="small-image-item" v-for="(item, index) in 5" :key="index">
                <img :src="getAssetsFile('images', '主图1.png')" alt="">
              </div>
            </div>
            <div class="next">
              <el-icon>
                <ArrowRight />
              </el-icon>
            </div>
          </div>
        </div>
        <div class="product-right">
          <div class="product-right-history">
            <div class="history-left">
              <div class="history-item">
                <img :src="getAssetsFile('icon', 'home.png')" alt="">
                首页
              </div>
              <span>/</span>
              <div class="history-item">
                产品中心
              </div>
              <span>/</span>
              <div class="history-item">
                彩妆
              </div>
              <span>/</span>
              <div class="history-item">
                唇妆
              </div>
              <span>/</span>
              <div class="history-item">
                小精灵魅惑唇膏
              </div>

            </div>
            <div class="history-right">
              <img :src="getAssetsFile('icon', 'reback.png')" alt="">
              返回上一页
            </div>
          </div>
          <div class="info">
            <div class="topic">小精灵魅惑唇膏</div>
            <div class="desc">小巧精灵的设计风格，携带方便；13色自由选择，多系列自由搭配，尽情释放女性该有的独特魅力；
              优雅而不失俏丽，打造人气星光唇。巴西棕榈蜡成分凸显时尚立体光感色泽，雪白凡士林具有很好
              的保湿效果，在皮肤表面形成一层保护膜，满蕴养肤滋润；即现魅色双唇。</div>
          </div>
          <div class="product-right-bottom">

            <el-button class="liuyan" :icon="ChatLineRound">在线留言</el-button>

            <el-dropdown @click="handleClick">
              <el-button class="share">
                <img :src="getAssetsFile('icon', 'share_pink.png')" alt=""> 分享
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>

                    <img :src="getAssetsFile('icon', '微信.png')" alt="">
                    &nbsp;
                    微信分享

                  </el-dropdown-item>

                  <el-dropdown-item>

                    <img :src="getAssetsFile('icon', '脸书.png')" alt="">
                    &nbsp;
                    脸书分享

                  </el-dropdown-item>

                  <el-dropdown-item>

                    <img :src="getAssetsFile('icon', '推特.png')" alt="">
                    &nbsp;
                    推特分享

                  </el-dropdown-item>
                  <el-dropdown-item>

                    <img :src="getAssetsFile('icon', '照片墙.png')" alt="">
                    &nbsp;
                    照片墙分享

                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
      </div>
      <div class="pre-next">
        <div class="last">上一个：眉线笔</div>
        <div class="n-next">下一个：散粉</div>
      </div>
      <div class="product-fk">
        <div class="topic">
         <div class="border">产品详情</div>  
        </div>
        <div class="job">
          <el-image :src="getAssetsFile('images', '详情页.png')" :fit="'fill'" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getAssetsFile } from '@/utils/tools'
import { ChatLineRound, Share } from '@element-plus/icons-vue'

const handleClick = () => {

}
</script>
<style scoped lang="scss">
.product-info {
  width: 100vw;
  background-color: white;
  padding-top: 10vh;
  padding-bottom: 10vh;
  box-sizing: border-box;

  .product-info-container {
    width: var(--base-width);
    margin: 0 auto;
    // background-color: pink;

    .product-content {
      width: 100%;
      display: flex;
      gap: 5vw;

      .product-left {
        width: 480px;
        // background-color: orange;

        .big-image {
          width: 480px;
          height: 480px;
          border-radius: 20px;
          border-color: #EBEBEB;

          img {
            width: 100%;
            height: 100%;
            object-fit: fill;
          }
        }

        .small-image-control {
          margin-top: 2vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;


          .prev {
            margin-right: 0.5vw;

          }

          .next {
            margin-left: 0.5vw;
          }

          .small-image {
            display: flex;
            align-items: center;
            gap: 0.7vw;

            .small-image-item {
              width: 70px;
              height: 70px;
              border-radius: 20px;
              border-color: #EBEBEB;

              img {
                width: 100%;
                height: 100%;
                object-fit: fill;
              }
            }
          }
        }



      }

      .product-right {
        width: calc(100% - 480px);
        // background-color: orange;

        .product-right-history {
          width: 100%;
          height: 5vh;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px dashed #F2F2F2;

          .history-left {
            width: 70%;
            display: flex;
            align-items: center;
            gap: 0.5vw;

            .history-item {
              min-width: 2vw;

              display: flex;
              align-items: center;
              font-family: Microsoft YaHei, Microsoft YaHei;
              font-weight: 400;
              font-size: 16px;
              color: #999999;

              img {
                width: 14px;
                height: 14px;
                object-fit: fill;
                margin-right: 0.2vw;
              }
            }

            span {
              color: #999999;
            }
          }

          .history-right {
            width: 30%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            font-family: Microsoft YaHei, Microsoft YaHei;
            font-weight: 400;
            font-size: 16px;
            color: #1D1D1D;
            gap: 0.5vw;

            img {
              width: 14px;
              height: 14px;
              object-fit: fill;
            }
          }

        }

        .info {
          margin-top: 5vh;
          width: 80%;

          .topic {

            font-family: Microsoft YaHei, Microsoft YaHei;
            font-weight: bold;
            font-size: 24px;
            color: #333333;
          }

          .desc {
            margin-top: 2vh;
            font-family: Microsoft YaHei, Microsoft YaHei;
            font-weight: 400;
            font-size: 16px;
            color: #333333;
            line-height: 31px;
          }
        }

        .product-right-bottom {

          width: 100%;
          display: flex;
          gap: 1vw;
          margin-top: 19vh;


          .liuyan {
            background-color: #F3A7A4;
            color: white;
            border-color: #F3A7A4;
            width: 124px;
            height: 48px;
          }

          .share {
            width: 90px;
            height: 48px;

            color: #F3A7A4;
            border-color: #F3A7A4;

            img {
              width: 14px;
              height: 14px;
              object-fit: fill;
              margin-right: 0.5vw;
            }
          }


        }
      }


    }

    .pre-next {
      width: 100%;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-family: Microsoft YaHei, Microsoft YaHei;
      font-weight: 400;
      font-size: 14px;
      color: #999999;
      line-height: 0px;

      .last {
        cursor: pointer;
      }

      .n-next {
        cursor: pointer;
      }
    }

    .product-fk {
      width: 100%;

      .topic {
        width: 100%;
        font-family: Microsoft YaHei, Microsoft YaHei;
        font-weight: 400;
        font-size: 16px;
        color: #F3A7A4;
        border-bottom: 2px solid #F2F2F2;
        .border {
          width: 80px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 2px solid #F3A7A4;
        }
       
      }

      .job {
        margin-top: 5vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

      }
    }
  }
}
</style>
