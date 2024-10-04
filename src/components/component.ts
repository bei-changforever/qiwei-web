import CusHeader from '@/components/header/index.vue'
import CusFooter from '@/components/footer/index.vue'
import Banner from '@/components/banner/index.vue'
export default {
  install(app) {
    app.component('CusHeader', CusHeader),
    app.component('CusFooter', CusFooter),
    app.component('Banner', Banner)
  }
}
