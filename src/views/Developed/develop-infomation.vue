<template>
    <div class="develop-infomation">
        <div class="develop-infomation-base-container">
            <div class="develop-infomation-container-top">
                <div class="left">
                    <div class="develop-container-top">
                        <div class="develop-container-left">
                            <div class="develop-container-left-item">
                                <div class="topic">
                                    <div class="block"></div>
                                    <div class="text">INFORMATION</div>
                                </div>
                                <div class="name">大数据平台</div>
                                <div class="desc">获取信息即获取价值，获取信息即获取未来，先获取信息即比别人更早获得机会</div>
                            </div>
                        </div>
                    </div>
                    <div class="develop-container-bottom">
                        <div class="title">
                            三库建设
                        </div>
                        <div class="desc">三库建设是为了更好的实现奇伟研产中心核心竞争力，即四大标准：技术标准、制造标准、品牌标准和服务标准的实现。
                            <br />
                            <div style="width: 0;height: 10px;"></div>
                            三库建设是公司科研和工作人员进行技术研究、产品开发、业务拓展和学习提升的理想场所三库建设是为奇伟客户提供增
                            值服务、为同行提供优质供应链的化妆品行业信息沙龙。
                            <br />
                            <div style="width: 0;height: 10px;"></div>
                            作用是研发中心、市场部、业务部在市场竞争中快速反应，统一想法、明确方法、落实做法，优先把握市场机会，各项工
                            作化被动为主动。
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="right-item">
                        <el-image :src="getAssetsFile('images', '产品库.png')" :fit="'fill'" />
                        <div class="text">产品库</div>
                        <div class="desc">
                            <span>产品库</span>
                            <span>推广目录内料简，推广目录成品简</span>
                        </div>
                    </div>
                    <div class="right-item">
                        <el-image :src="getAssetsFile('images', '提案库.png')" :fit="'fill'" />
                        <div class="text">提案库</div>
                        <div class="desc">
                            <span>提案库</span>
                            <span>专线类提客库，趋势类提客库，客户类提客库，外来提客库</span>
                        </div>
                    </div>
                    <div class="right-item">
                        <el-image :src="getAssetsFile('images', '信息库.png')" :fit="'fill'" />
                        <div class="text">信息库</div>
                        <div class="desc">
                            <span>信息库</span>
                            <span>OEM同行资料，品牌资料，包装材料，原料供应商，机械仪器设备，辅助销售类，各类书籍，公司历史档案，会展类资料，外购成品库，企业资质与背书</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="develop-infomation-container-bottom">
                <div class="develop-infomation-container-bottom-item">
                    <el-image :src="getAssetsFile('images', '新质生产力.png')" :fit="'fill'" />
                    <div class="text">新质生产力</div>
                </div>
                <div class="develop-infomation-container-bottom-item">
                    <el-image :src="getAssetsFile('images', '可持续发展.png')" :fit="'fill'" />
                    <div class="text">可持续发展</div>
                </div>
                <div class="develop-infomation-container-bottom-item">
                    <el-image :src="getAssetsFile('images', '新质设备.png')" :fit="'fill'" />
                    <div class="text">新质设备</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { getAssetsFile } from '@/utils/tools'
</script>
<style lang="scss" scoped>
.develop-infomation {
    width: 100vw;
    // height: 100vh;

    .develop-infomation-base-container {
        margin: 0 auto;
        width: var(--base-width);
        transition: all 0.3s ease-in;
        zoom: 1;

        .develop-infomation-container-top {

            width: 100%;
            display: flex;
            // background-color: pink;
            justify-content: space-between;

            .left {
                width: 50%;

                .develop-container-top {
                    width: 100%;
                    display: flex;


                    .develop-container-left {
                        width: 100%;

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

                            .desc {
                                margin-top: 2vh;
                                font-family: Microsoft YaHei, Microsoft YaHei;
                                font-weight: 400;
                                font-size: 16px;
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

                .develop-container-bottom {
                    margin-top: 10vh;

                    .title {
                        font-family: Microsoft YaHei, Microsoft YaHei;
                        font-weight: bold;
                        font-size: 32px;
                        color: #333333;
                    }

                    .desc {
                        margin-top: 2vh;
                        font-family: Microsoft YaHei, Microsoft YaHei;
                        font-weight: 400;
                        font-size: 16px;
                        color: #333333;
                        line-height: 24px;
                        text-align: left;
                    }
                }

            }


            .right {
                width: 40%;
                display: flex;
                flex-direction: column;
                gap: 1vh;
                // background-color: pink;

                .right-item {
                    position: relative;
                    display: flex;
                    justify-content: flex-end;
                    width: 100%;
                    cursor: pointer;

                    :deep(.el-image) {
                        width: 100%;
                        height: 100%;
                    }

                    .text {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        font-family:
                            Microsoft YaHei,
                            Microsoft YaHei;
                        font-weight: 400;
                        font-size: 24px;
                        color: #ffffff;
                    }

                    .desc {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        top: 0;
                        left: 0;
                        background-color: rgba(0, 0, 0, 0.5);
                        display: none;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        font-family:
                            Microsoft YaHei,
                            Microsoft YaHei;
                        font-weight: 400;
                        font-size: 16px;
                        color: #ffffff;
                        padding: 20px;
                        box-sizing: border-box;
                        text-align: center;
                        border-radius: 10px;

                        span {
                            &:nth-child(1) {
                                font-family:
                                    Microsoft YaHei,
                                    Microsoft YaHei;
                                font-weight: 400;
                                font-size: 24px;
                                color: #ffffff;
                            }
                        }
                    }

                    &:hover {
                        .text {
                            display: none;
                        }

                        .desc {
                            display: flex;
                        }
                    }
                }
            }
        }

        .develop-infomation-container-bottom {
            margin-top: 2vh;
            width: 100%;
            display: flex;
            gap: 1vw;

            .develop-infomation-container-bottom-item {
                width: 33.3%;
                cursor: pointer;
                position: relative;
                :deep(.el-image) {
                    width: 100%;
                    height: 100%;
                }

                .text {
                    position: absolute;
                    bottom: 5vh;
                    left: 2vw;
                    font-family:
                        Microsoft YaHei,
                        Microsoft YaHei;
                    font-weight: 400;
                    font-size: 24px;
                    color: #ffffff;
                }
            }
        }
    }

}
</style>