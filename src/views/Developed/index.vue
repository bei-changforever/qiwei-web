<template>
    <div class="develop-base-container" ref="developBaseContainer">
        <div class="main-okj-container" ref="container">
            <div class="boxapi" v-for="(comp, index) in domArr[0].domarr" :key="index">
                <component :is="comp" />
            </div>

            <div class="boxapi">
                <footer id="footer">
                    <CusFooter />
                </footer>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, shallowRef, nextTick, watch } from 'vue'
import developBanner from './develop-banner.vue';
import DevelopCenter from './develop-cecnter.vue';
import developScientifically from './develop-scientifically.vue';
import developInfomation from './develop-infomation.vue'
import developPatent from './develop-patent.vue';
import emitter from '@/utils/mitt'
const domArr = shallowRef([
    {
        id: 'develop',
        domarr: [developBanner, DevelopCenter, developScientifically, developInfomation, developPatent]
    }
])
const container = ref(null)
// 定义当前页面的索引
let pageIndex = ref(0)
// 定义是否允许滚动
let pageScroll = ref(true)
// 定义上一次页面的索引
let prevIndex = ref(0)
let boxapis = ref([])

// 向上滚动
function scrollUp() {
    if (pageIndex.value > 0 && pageScroll.value) {
        prevIndex.value = pageIndex.value
        pageIndex.value--
        scrollToPage(pageIndex.value)
    } else if (pageIndex.value <= 0) {
        pageIndex.value = 0
    }
}

// 向下滚动
function scrollDown() {
    if (pageIndex.value < boxapis.value.length - 1 && pageScroll.value) {
        prevIndex.value = pageIndex.value
        pageIndex.value++
        scrollToPage(pageIndex.value)
    } else if (pageIndex.value >= boxapis.value.length - 1) {
        pageIndex.value = boxapis.value.length - 1
    }
}
let bigSizeIndex = ref(0)
// 滚动到指定页面
function scrollToPage(pageIndex) {
    console.log(pageIndex);
    if (pageIndex == 1) {
        container.value.style.top = `-590px`
    } else if (pageIndex == 2) {
        container.value.style.top = `-175%`
    }
    else if (pageIndex == 3) {
        container.value.style.top = `-285%`
    }
    else if (pageIndex == 4) {
        container.value.style.top = `-415%`
    }
    else if (pageIndex == 5) {
        container.value.style.top = `-475%`
    }

    else {
        container.value.style.top = `-${pageIndex}00%`
    }


    pageScroll.value = false
    scrollTimer()
}

// 设置定时器，等待500毫秒后，允许再次滚动
function scrollTimer() {
    setTimeout(() => {
        pageScroll.value = true
    }, 500)
}

// 鼠标滚轮事件
function mouseWheel(e) {
    if (container.value) {
        if (e.wheelDelta) {
            if (e.wheelDelta > 0) {
                console.log('aaaa');
                bigSizeIndex.value = 0;
                scrollUp()
            } else {

                if (pageIndex.value == 1) {
                    bigSizeIndex.value++;
                    // console.log("bigSizeIndex=========>", bigSizeIndex.value);
                    // // console.log('kkkkk');
                    // console.log("pageIndex===========>", pageIndex.value);


                    if (bigSizeIndex.value >= 1 && bigSizeIndex.value < 3) {
                        console.log("执行");

                        container.value.style.top = `-100%`
                    }
                    if (bigSizeIndex.value >= 3) {
                        bigSizeIndex.value = 0;
                        pageIndex.value = 2
                        scrollToPage(2)
                    }
                }


                else if (pageIndex.value == 3) {
                    bigSizeIndex.value++;
                    // console.log("bigSizeIndex=========>", bigSizeIndex.value);
                    // // console.log('kkkkk');
                    // console.log("pageIndex===========>",pageIndex.value);

                    if (bigSizeIndex.value >= 1 && bigSizeIndex.value < 3) {
                        container.value.style.top = `-330%`
                    }
                    if (bigSizeIndex.value >= 3) {
                        bigSizeIndex.value = 0;
                        pageIndex.value = 4
                        scrollToPage(4)
                    }

                } else {
                    console.log("fuzhu");

                    scrollDown()
                }

            }
        } else {
            if (e.detail > 0) {
                console.log('bbbb');


                scrollDown()
            } else {
                console.log('ccccc');

                scrollUp()
            }
        }
    }
}
const screenWidth = ref(window.innerWidth)
const handleResize = () => {
    screenWidth.value =
        window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
}

const handleScrolltoTop = () => {
    scrollToPage(0)
}

onMounted(() => {
    // window.addEventListener('wheel', handleWheel)
    // emitter.on('BACKPAGETOP', (res) => {
    //   window.scrollTo({
    //     top: 0,
    //     behavior: 'smooth' // 可选，使滚动平滑
    //   })
    // })
    emitter.on('tagViewsShowModel', (res) => {
        pageIndex.value = res + 1
        scrollToPage(res + 1)
    })

    emitter.on('BACKPAGETOP', (res) => {
        handleScrolltoTop()
        bigSizeIndex.value = 0
        pageIndex.value = 0
    })
    // 添加鼠标滚轮事件
    document.onmousewheel = mouseWheel
    document.addEventListener('DOMMouseScroll', mouseWheel, false)
    // 设置滚动记录
    history.scrollRestoration = 'manual'

    nextTick(() => {
        boxapis.value = document.querySelectorAll('.boxapi')
        container.value.style.height = `${boxapis.length}00%`
    })

    window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
    // window.removeEventListener('wheel', handleWheel)
    // emitter.off('BACKPAGETOP')
    emitter.off('tagViewsShowModel')

    document.removeEventListener('DOMMouseScroll', mouseWheel)
    emitter.off('BACKPAGETOP')
})


watch(
    () => pageIndex.value,
    (newValue, oldValue) => {
        if (newValue == 0) {
            emitter.emit('changHeaderBack', {
                isDark: true,
                activeBackgroundColor: null,
                slideChangeBakColor: false
            })
        } else {
            emitter.emit('changHeaderBack', {
                isDark: false,
                activeBackgroundColor: 'white',
                slideChangeBakColor: true
            })
        }
    }
)

</script>
<style lang="scss" scoped>
.develop-base-container {
    /* 满屏 */
    width: 100vw;
    height: 100vh;
    /* 相对定位 */
    position: relative;
    /* 溢出隐藏 */
    overflow: hidden;

    .main-okj-container {
        width: 100%;
        height: 100%;
        /* 绝对定位 */
        position: absolute;
        left: 0;
        top: 0;
        /* 添加过渡动画 */
        transition: all 0.3s ease-in-out;

        .boxapi {
            overflow: hidden;
        }
    }
}
</style>