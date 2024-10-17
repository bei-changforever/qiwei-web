<template>
    <div class="business-cooperate">
        <div class="business-cooperate-base-container">
            <div class="business-container-top">
                <div class="business-container-left">
                    <div class="business-container-left-item">
                        <div class="topic">
                            <div class="block"></div>
                            <div class="text">COOPERATE</div>
                        </div>
                        <div class="name">合作模式</div>
                        <div class="desc">
                            奇伟始终坚持“以客户为中心”，搭建一站式无忧服务平台，1对1全方位360°服务，让品牌从0到1。
                            1+N服务模式贯穿产业链各个环节，让品牌产品落地快人一步。
                        </div>
                    </div>
                </div>

                <div class="business-container-right">
                    <div class="business-container-right-item" v-for="(item, index) in list2" :key="index">
                        <div :class="['text', activeIndex == index ? 'active' : '']" @click="handleSelect(index)">
                            {{ item }}
                        </div>
                        <div class="line" v-show="index !== list2.length - 1"></div>
                    </div>
                </div>
            </div>
            <div class="business-container-bottom">
                <el-image :src="getAssetsFile('images', `${list2[activeIndex]}.png`)" :fit="'fill'" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { getAssetsFile } from '@/utils/tools'
const list = ['业务范围', '服务原则', '全球供应链', '合作模式']
const list2 = ['OEM', 'ODM', 'OBM']
const activeIndex = ref(0)

const handleSelect = (index) => {
    activeIndex.value = index
}
</script>
<style lang="scss" scoped>
.business-cooperate {
    width: 100vw;
    height: 220vh;
    padding-top: 10vh;
    background-color: white;

    .business-cooperate-base-container {
        margin: 0 auto;
        width: var(--base-width);
        transition: all 0.3s ease-in;
        zoom: 1;

        .business-container-top {
            width: 100%;
            display: flex;

            .business-container-left {
                width: 50%;

                .business-container-left-item {
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
                        font-family:
                            Microsoft YaHei,
                            Microsoft YaHei;
                        font-weight: 400;
                        font-size: var(--desc-fontSize);
                        color: #666666;
                        line-height: var(--desc-lineHeight);
                    }
                }
            }

            .business-container-right {
                width: 50%;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                gap: 1vw;
                // background-color: pink;

                .business-container-right-item {
                    // margin-top: 4vh;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    gap: 1vw;
                    cursor: pointer;
                    margin-bottom: 5vh;

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
                            color: white;
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

        .business-container-bottom {
            width: 100%;
            // height: 550px;
            margin-top: 3vh;
            display: flex;
            align-items: center;
            justify-content: center;

            :deep(.el-image) {
                width: 100%;
                height: 100%;
            }
        }
    }
}

@media (max-width: 960px) {
    .business-cooperate {
        width: 100vw;
        height: 220vh;
        padding-top: 10vh;
        background-color: white;

        .business-cooperate-base-container {
            margin: 0 auto;
            width: var(--base-width);
            transition: all 0.3s ease-in;
            zoom: 1;
            padding: 5vh;
            box-sizing: border-box;

            .business-container-top {
                width: 100%;
                display: flex;

                .business-container-left {
                    width: 50%;

                    .business-container-left-item {
                        .topic {
                            width: 100%;
                            height: 40px;
                            display: none;
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
                            font-family:
                                Microsoft YaHei,
                                Microsoft YaHei;
                            font-weight: 400;
                            font-size: var(--desc-fontSize);
                            color: #666666;
                            line-height: var(--desc-lineHeight);
                        }
                    }
                }

                .business-container-right {
                    width: 50%;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    gap: 1vw;
                    // background-color: pink;

                    .business-container-right-item {
                        // margin-top: 4vh;
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                        gap: 1vw;
                        cursor: pointer;
                        margin-bottom: 5vh;

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
                                color: white;
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

            .business-container-bottom {
                width: 100%;
                // height: 550px;
                margin-top: 3vh;
                display: flex;
                align-items: center;
                justify-content: center;

                :deep(.el-image) {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}
</style>