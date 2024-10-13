<template>
    <div class="develop-center">
        <div class="develop-center-base-container">
            <div class="control-button">
                <div :class="['control-button-item', activeIndex == index ? 'active' : '']"
                    v-for="(item, index) in list" :key="index" @click="handleSelect(index)">
                    {{ item }}
                </div>
            </div>

            <div class="business-container-top">
                <div class="business-container-left">
                    <div class="business-container-left-item">
                        <div class="topic">
                            <div class="block"></div>
                            <div class="text">BUSINESS</div>
                        </div>
                        <div class="name">业务范围</div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { getAssetsFile } from '@/utils/tools'
import emitter from '@/utils/mitt'
const list = ['研发中心', '科学配方理念', '大数据平台', '专利技术']
const activeIndex = ref(0)
</script>
<style lang="scss" scoped>
.develop-center {
    width: 100vw;
    height: 100vh;

    .develop-center-base-container {
        margin: 0 auto;
        width: var(--base-width);
        transition: all 0.3s ease-in;
        zoom: 1;

        .control-button {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1vw;
            margin-bottom: 5vh;

            .control-button-item {
                width: 150px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family:
                    Microsoft YaHei,
                    Microsoft YaHei;
                font-weight: 400;
                font-size: 14px;
                color: #999999;
                background-color: #f6f9ff;
                border-radius: 20px 20px 20px 20px;
                cursor: pointer;

                &.active {
                    background-color: #f3a7a5;
                    color: white;
                }
            }
        }

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