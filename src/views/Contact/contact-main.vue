<template>
  <div class="contact-main">
    <div class="contact-base-container">
      <div class="about-base-container-top">
        <div class="T-left">
          <div class="topic">
            <div class="block"></div>
            <div class="text">CONTACT</div>
          </div>
          <div class="name">联系奇伟</div>
        </div>
      </div>
      <div class="base-top">
        <div class="contact-left">
          <div class="contact-left-content">
            <div class="image">
              <img :src="getAssetsFile('images', '公司图片.png')" alt="" />
            </div>
            <div class="contact-detail">
              <div class="contact-detail-top">
                <div class="title">汕头市奇伟实业有限公司</div>
                <div class="right-title">
                  到这里去
                  <img :src="getAssetsFile('images', '定位.png')" alt="" />
                </div>
              </div>
              <div class="contact-detail-bottom">
                <div class="contact-bottom-left">
                  <div class="title">
                    <span class="topic">地址：</span>
                    <br />
                    <span class="info">汕头市潮南区峡山街道 广汕公路308号</span>
                  </div>
                  <div class="title">
                    <span class="topic">电话：</span>
                    <br />
                    <span class="info">136-4306-1556</span>
                  </div>
                </div>
                <div class="contact-bottom-right">
                  <img :src="getAssetsFile('images', '企业wx二维码.png')" alt="" />
                  <div class="title">企业微信号</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="contact-right">
          <div class="form-top">
            <div class="title">
              <span style="color: #f56c6c; margin-right: 2px">*</span><span>您的基本信息</span>
            </div>
            <div class="desc">
              我们诚邀您填写个人基本信息，便于我们选择匹配度最高的团队为您提供服务。
            </div>
          </div>
          <el-form
            ref="ruleFormRef"
            :model="form"
            label-width="auto"
            :rules="rules"
            :label-position="'top'"
            style="max-width: 100%"
            status-icon
          >
            <el-form-item label="您是？" prop="occupation">
              <el-select v-model="form.occupation" placeholder="请选择">
                <el-option
                  v-for="(item, indx) in selectOption"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="您的具体问题：" prop="question">
              <el-input v-model="form.question" clearable/>
            </el-form-item>
            <el-form-item label="您的姓名" prop="name">
              <el-input v-model="form.name" placeholder="请填写您的姓名" clearable/>
            </el-form-item>
            <el-form-item>
              <div class="row">
                <el-input v-model="form.Companyname" placeholder="请填写您的公司名称" clearable/>
                <el-input v-model="form.delivery" placeholder="请填写您的职位" clearable/>
              </div>
            </el-form-item>
            <el-form-item>
              <div class="row">
                <el-input v-model="form.Brandname" placeholder="请填写您公司的品牌名称" clearable/>
                <el-input v-model="form.phonenumber" placeholder="请填写您的联系方式" clearable/>
              </div>
            </el-form-item>
          </el-form>

          <div class="button">提交留言</div>
        </div>
      </div>
      <div class="base-bottom">
        <!-- <div class="bottom-map" ref="mapRef"></div> -->
        <baidu-map
          class="bm-view"
          :zoom="25"
          :center="{ lng: 116.43836142559879, lat: 23.24771330479027 }"
        >
          <bm-overlay
            pane="labelPane"
            :class="{ sample: true, active }"
            @draw="draw"
            @mouseover="active = true"
            @mouseleave="active = false"
          >
            <div class="info-box">
              <div class="image">
                <img :src="getAssetsFile('images', 'map位置.png')" alt="" />
              </div>
              <div class="text-box">
                <div class="text">奇伟实业有限公司</div>
                <div class="icon">
                  <img :src="getAssetsFile('images', '导航按钮.png')" alt="" />
                </div>
              </div>
            </div>
          </bm-overlay>
        </baidu-map>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue'
import { getAssetsFile } from '@/utils/tools'
import type { ComponentSize, FormInstance, FormRules } from 'element-plus'
// do not use same name with ref
const ruleFormRef = ref<FormInstance>()
interface RuleForm {
  question: string
  occupation: string
  name: string
  Companyname: string
  delivery: string
  Brandname: string
  phonenumber: number
}

const form = reactive({
  question: '',
  occupation: '',
  name: '',
  Companyname: '',
  delivery: '',
  Brandname: '',
  phonenumber: ''
})

const selectOption = [
  {
    label: '品牌方',
    value: '品牌方'
  },

  {
    label: 'OEM',
    value: 'OEM'
  },
  {
    label: 'ODM工厂',
    value: 'ODM工厂'
  },
  {
    label: '原料商',
    value: '原料商'
  },
  {
    label: '代理商',
    value: '代理商'
  },
  {
    label: '电商',
    value: '电商'
  },
  {
    label: '渠道商',
    value: '渠道商'
  },
  {
    label: '高校/研究院/协会机构',
    value: '高校/研究院/协会机构'
  },
  {
    label: '其他',
    value: '其他'
  }
]

const rules = reactive<FormRules<RuleForm>>({
  name: [{ required: true, message: '请输入您的姓名', trigger: 'blur' }],
  question: [
    {
      required: true,
      message: '请输入您的具体问题',
      trigger: 'blur'
    }
  ],
  occupation: [
    {
      required: true,
      message: 'Please select Activity count',
      trigger: 'change'
    }
  ],
  Companyname: [
    {
      required: false,
      message: 'Please select activity resource',
      trigger: 'blur'
    }
  ],
  delivery: [{ required: false, trigger: 'blur' }],
  Brandname: [{ required: false, trigger: 'blur' }],
  phonenumber: [{ type: 'number', required: false, trigger: 'blur' }]
})

const onSubmit = () => {
  console.log('submit!')
}
const active = ref(false)

const draw = ({ el, BMap, map }) => {
  const pixel = map.pointToOverlayPixel(new BMap.Point(116.43836142559879, 23.24771330479027)) // 返回的坐标为覆盖物的左上角坐标。
  el.style.left = pixel.x - 20 + 'px' // 最终坐标 = 覆盖物坐标 - 覆盖物宽度/2。 // 居中显示
  el.style.top = pixel.y - 50 + 'px'
}
</script>
<style lang="scss" scoped>
.contact-main {
  width: 100vw;
  padding-top: 5vh;
  padding-bottom: 5vh;
  box-sizing: border-box;

  .contact-base-container {
    margin: 0 auto;
    width: var(--base-width);
    transition: all 0.3s ease-in;
    zoom: 1;

    .about-base-container-top {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .T-left {
        .topic {
          width: 100%;
          height: 40px;
          display: flex;
          align-items: center;
          gap: 1vw;

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

    .base-top {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 5vh;

      .contact-left {
        // width: 30%;
        width: 480px;

        .contact-left-content {
          width: 100%;
          background-color: white;
          border-radius: 20px;
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

          .image {
            width: 100%;
            height: 320px;

            img {
              width: 100%;
              height: 100%;
              object-fit: fill;
            }
          }

          .contact-detail {
            margin-top: 2vh;
            width: 100%;

            .contact-detail-top {
              width: 100%;
              padding: 10px;
              box-sizing: border-box;
              display: flex;
              justify-content: space-between;

              .title {
                font-family:
                  Microsoft YaHei,
                  Microsoft YaHei;
                font-weight: bold;
                font-size: 24px;
                color: #333333;
              }

              .right-title {
                display: flex;
                align-items: center;
                gap: 0.5vw;
                cursor: pointer;

                img {
                  width: 14px;
                  height: 16px;
                  object-fit: fill;
                }
              }
            }

            .contact-detail-bottom {
              margin-top: 5vh;
              display: flex;
              width: 100%;
              padding: 10px;
              box-sizing: border-box;
              justify-content: space-between;

              .contact-bottom-left {
                width: 60%;
                display: flex;
                flex-direction: column;
                gap: 2vh;

                .title {
                  .topic {
                    font-family:
                      Microsoft YaHei,
                      Microsoft YaHei;
                    font-weight: 400;
                    font-size: 16px;
                    color: #333333;
                  }

                  .info {
                    font-family:
                      Microsoft YaHei,
                      Microsoft YaHei;
                    font-weight: bold;
                    font-size: 20px;
                    color: #333333;
                  }
                }
              }

              .contact-bottom-right {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-end;
              }
            }
          }
        }
      }

      .contact-right {
        width: 50%;
        // background-color: pink;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .form-top {
          width: 100%;

          .title {
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 18px;
            color: #333333;
          }

          .desc {
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 16px;
            color: #333333;
          }
        }

        :deep(.el-input) {
          height: 60px;
        }

        :deep(.el-select) {
          height: 60px;
          //   background-color: orange;
        }

        :deep(.el-select__wrapper.el-tooltip__trigger) {
          height: 60px;
        }

        // :deep(.el-option) {
        //     height: 60px;
        // }

        .row {
          width: 100%;
          display: flex;
          gap: 1vw;
        }

        .button {
          width: 210px;
          height: 50px;
          border-radius: 10px 10px 10px 10px;
          background-color: #f3a7a5;
          font-family:
            Microsoft YaHei,
            Microsoft YaHei;
          font-weight: 400;
          font-size: 16px;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
      }
    }

    .base-bottom {
      margin-top: 5vh;
      width: 100%;
      height: 500px;

      .bm-view {
        width: 100%;
        height: 100%;
      }

      //   .info-map {
      //     position: absolute;
      //     // width: 120px;
      //     // height: 40px;
      //     // line-height: 40px;
      //     // background: rgba(0, 0, 0, 0.5);
      //     overflow: hidden;
      //     // box-shadow: 0 0 5px #000;
      //     color: #fff;
      //     text-align: center;
      //     padding: 10px;

      //     .info-box {
      //       display: flex;

      //       .text-box {
      //         display: flex;
      //         width: 150px;
      //         height: 30px;
      //         background-color: rgba(0, 0, 0, 0.5);
      //         border-radius: 5px 5px 5px 5px;
      //       }
      //     }
      //   }
    }
  }
}

.sample {
  position: absolute;
  //   width: 120px;
  //   height: 40px;
  //   line-height: 40px;
  //   background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  //   box-shadow: 0 0 5px #000;
  color: #fff;
  text-align: center;
  padding: 10px;

  .info-box {
    display: flex;
    align-items: center;
    gap: 0.5vw;

    .text-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 200px;
      height: 30px;
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 5px 5px 5px 5px;

      .text {
        margin-left: 20px;
      }
    }
  }
}

@media (max-width: 960px) {
  .contact-main {
    width: 100vw;
    padding: 0;
    box-sizing: border-box;
    background-color: white;

    .contact-base-container {
      margin: 0 auto;
      width: var(--base-width);
      transition: all 0.3s ease-in;
      zoom: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      // padding: 2vh;
      // box-sizing: border-box;
      .about-base-container-top {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .T-left {
          padding: 2vh;
          padding-bottom: 0;
          box-sizing: border-box;
          .topic {
            width: 100%;
            height: 40px;
            display: none;
            align-items: center;
            gap: 1vw;

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
            font-size: 18px;
            color: #333333;
          }
        }
      }

      .base-top {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5vh;
        margin-top: 2vh;

        .contact-left {
          // width: 30%;
          width: 90%;

          .contact-left-content {
            width: 100%;
            background-color: white;
            border-radius: 20px;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

            .image {
              width: 100%;
              height: 320px;

              img {
                width: 100%;
                height: 100%;
                object-fit: fill;
              }
            }

            .contact-detail {
              margin-top: 2vh;
              width: 100%;

              .contact-detail-top {
                width: 100%;
                padding: 10px;
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;

                .title {
                  font-family:
                    Microsoft YaHei,
                    Microsoft YaHei;
                  font-weight: bold;
                  font-size: 18px;
                  color: #333333;
                }

                .right-title {
                  display: flex;
                  align-items: center;
                  gap: 0.5vw;
                  cursor: pointer;
                  font-size: 14px;
                  img {
                    width: 14px;
                    height: 16px;
                    object-fit: fill;
                  }
                }
              }

              .contact-detail-bottom {
                margin-top: 5vh;
                display: flex;
                width: 100%;
                padding: 10px;
                box-sizing: border-box;
                justify-content: space-between;

                .contact-bottom-left {
                  width: 60%;
                  display: flex;
                  flex-direction: column;
                  gap: 2vh;

                  .title {
                    .topic {
                      font-family:
                        Microsoft YaHei,
                        Microsoft YaHei;
                      font-weight: 400;
                      font-size: 16px;
                      color: #333333;
                    }

                    .info {
                      font-family:
                        Microsoft YaHei,
                        Microsoft YaHei;
                      font-weight: bold;
                      font-size: 14px;
                      color: #333333;
                    }
                  }
                }

                .contact-bottom-right {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: flex-end;
                }
              }
            }
          }
        }

        .contact-right {
          width: 90%;
          // background-color: pink;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .form-top {
            width: 100%;

            .title {
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: 18px;
              color: #333333;
            }

            .desc {
              font-family:
                Microsoft YaHei,
                Microsoft YaHei;
              font-weight: 400;
              font-size: 16px;
              color: #333333;
            }
          }

          :deep(.el-input) {
            height: 60px;
          }

          :deep(.el-select) {
            height: 60px;
          }

          :deep(.el-select__wrapper.el-tooltip__trigger) {
            height: 60px;
          }

          .row {
            width: 100%;
            display: flex;
            gap: 1vw;
          }

          .button {
            margin: 0 auto;
            width: 210px;
            height: 50px;
            border-radius: 10px 10px 10px 10px;
            background-color: #f3a7a5;
            font-family:
              Microsoft YaHei,
              Microsoft YaHei;
            font-weight: 400;
            font-size: 16px;
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }
        }
      }

      .base-bottom {
        margin-top: 5vh;
        width: 90%;
        height: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
        // background-color: pink;
        // border: 1px solid red;

        .bm-view {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
