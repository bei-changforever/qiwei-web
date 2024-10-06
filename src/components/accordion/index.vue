<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="shell">
        <div class="box">
            <el-image :src="getAssetsFile('images', '核心优势选中1.png')" :fit="'cover'" />
            <div class="title">
                高<br />
                效<br />
                产<br />
                能
            </div>
            <div class="detail">
                <span>从创意到实现，全方位助力品牌从0-1的产品孵化之旅</span>
                <span>了解详情 ></span>
            </div>
        </div>
        <div class="box">
            <el-image :src="getAssetsFile('images', '核心优势选中1.png')" :fit="'cover'" />
            <div class="title"> 高<br />
                效<br />
                产<br />
                能</div>
            <div class="detail">
                <span>从创意到实现，全方位助力品牌从0-1的产品孵化之旅</span>
                <span>了解详情 ></span>
            </div>
        </div>
        <div class="box">
            <el-image :src="getAssetsFile('images', '核心优势选中1.png')" :fit="'cover'" />
            <div class="title"> 高<br />
                效<br />
                产<br />
                能</div>
            <div class="detail">
                <span>从创意到实现，全方位助力品牌从0-1的产品孵化之旅</span>
                <span>了解详情 ></span>
            </div>
        </div>
        <div class="box">
            <el-image :src="getAssetsFile('images', '核心优势选中1.png')" :fit="'cover'" />
            <div class="title"> 高<br />
                效<br />
                产<br />
                能</div>
            <div class="detail">
                <span>从创意到实现，全方位助力品牌从0-1的产品孵化之旅</span>
                <span>了解详情 ></span>
            </div>
        </div>
        <div class="box">
            <el-image :src="getAssetsFile('images', '核心优势选中1.png')" :fit="'cover'" />
            <div class="title"> 高<br />
                效<br />
                产<br />
                能</div>
            <div class="detail">
                <span>从创意到实现，全方位助力品牌从0-1的产品孵化之旅</span>
                <span>了解详情 ></span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { getAssetsFile } from '@/utils/tools'
</script>
<style lang="scss" scoped>
.shell {
    width: 100%;
    height: 450px;
    display: flex;

    .box {
        position: relative;
        flex: 1;
        overflow: hidden;
        transition: .5s;
        cursor: pointer;

        :deep(.el-image) {
            width: 200%;
            height: 100%;
            object-fit: cover;
        }

        .title {
            position: absolute;
            top: 0;
            left: 0;
            font-family: Microsoft YaHei, Microsoft YaHei;
            font-weight: 400;
            font-size: 30px;
            color: #FFFFFF;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: rgba(0, 0, 0, .5);
            transition: .3s;


        }

        .detail {
            position: absolute;
            bottom: 0;
            right: 2%;
            height: 0;
            width: 66%;
            font-family: Microsoft YaHei, Microsoft YaHei;
            font-weight: 400;
            font-size: 18px;
            color: #FFFFFF;
            transition: .1s;
        }


        &:hover {
            flex-basis: 40%;

            :deep(.el-image) {
                width: 100%;
                height: 100%;
            }

            .title {
                width: 30%;
            }
            .detail {
                height: 20%;
            }
        }
    }
}
</style>