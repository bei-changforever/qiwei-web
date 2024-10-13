<template>
    <div class="business-chain">
        <div class="business-chain-base-container">
            <div class="business-chain-left">
                <div class="T-left">
                    <div class="topic">
                        <div class="block"></div>
                        <div class="text">SUPPLY CHAIN</div>
                    </div>
                    <div class="name">全球供应链</div>
                </div>
                <div class="t-b">
                    <div class="title">
                        关键优势
                    </div>
                    <div class="desc">
                        全球布局，接近客户；
                        本地化产能，确保快速上市时间；
                        低库存风险，基于订单的采购和生产方式；
                        基于全球化采购的高性价比原材料。
                    </div>
                </div>
            </div>
            <div class="business-chain-right">
                <div class="business-chain-right-item">
                    <img :src="getAssetsFile('images', '生产计划.png')" alt="">
                    <div class="text">3-4个月订单确定性，或根据客户提示性预测更长确定性
                        按订单量安排生产的工作方式;
                        订单的月度管理方法</div>
                </div>
                <div class="business-chain-right-item">
                    <img :src="getAssetsFile('images', '采购.png')" alt="">
                    <div class="text">采购：采购原材料及其他产品组件(比如包装材料)
                        基于订单量确定采购数量和时间最小化库存风险</div>
                </div>
                <div class="business-chain-right-item">
                    <img :src="getAssetsFile('images', '生产安排.png')" alt="">
                    <div class="text">生产的每日管理
                        得益于本地产能的快速产品
                        快速上市时间</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { getAssetsFile } from '@/utils/tools'
</script>
<style lang="scss" scoped>
.business-chain {
    width: 100vw;
    height: 430px;
    padding-top: 5vh;
    background-image: url('../../assets/images/全球供应链底.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    .business-chain-base-container {
        margin: 0 auto;
        width: var(--base-width);
        transition: all 0.3s ease-in;
        zoom: 1;

        display: flex;
        align-items: center;

        .business-chain-left {
            width: 40%;

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

            .t-b {
                margin-top: 5vh;

                .title {
                    font-family: Microsoft YaHei, Microsoft YaHei;
                    font-weight: bold;
                    font-size: 22px;
                    color: #333333;
                }

                .desc {
                    font-family: Microsoft YaHei, Microsoft YaHei;
                    font-weight: 400;
                    font-size: 16px;
                    color: #333333;
                    letter-spacing: 2px;
                }
            }
        }

        .business-chain-right {
            width: 50%;
            display: flex;
            flex-direction: column;
            gap: 1vw;

            .business-chain-right-item {
                width: 100%;
                display: flex;
                align-items: center;
                gap: 1vw;
            }
        }
    }
}
</style>