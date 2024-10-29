import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useConfig = defineStore('useConfig', () => {
  const config = ref({
    copy_right: 'Copyright © 2024 汕头市奇伟实业有限公司 All Rights Reserved | 粤ICP备07540754号',
    web_name: '汕头市奇伟实业有限公司',
    description: '汕头市奇伟实业有限公司',
    keyword: '汕头市奇伟实业有限公司',
    address: '汕头市潮南区峡山街道 广汕公路308号',
    phone: '136-4306-1556',
    background_yfsl: '#F9F9F9',
    background_hxys: '#FFFFFF',
    background_company: '#F9F9F9',
    background_hot_product: '#FFFFFF',
    background_brand: '#FFFFFF',
    background_cert: '#F5F5F5',
    background_free: '#FFFFFF',
    home_comany_description:
      '公司一贯重视科技创新，重视培养自主的研发力量，目前拥有40 多项核心专利（其中18项是发明专利）和8份著作权，涵盖产品配 方、设备、包装等多层次、全方位、宽领域的知识产权矩阵，部分 填补了国内、外空白，极大的提高了我司产品在市场的竞争力。 公司通过ISO22716和GMPC认证，先后被认定为“市级企业技术 中心”、“市级工程技术研究开发中心”、“省级工程技术研究开 发中心”、“高新技术企业”、“专精特新中小企业”和“创新型 中小企业”等资质。 ',
    home_comany_1: '28',
    home_comany_2: '10',
    home_comany_3: '60',
    home_comany_4: '1000',
    home_brand_title: '从源头把控精选全球原料',
    home_brand_description:
      ' 跨越国界，长期与多家原料供应商合作。精选优质原料进行研发生产， 从源头严格控制产品品质;确保每一份原料都经过严格筛选与科学验证。 ',
    home_yfsl_title: ' 跨学科专家团队 ',
    home_yfsl_description:
      '奇伟汇聚了一支跨学科专家团队，持续高投入于前沿技术创新与 产品安全性深入研究，精准捕捉市场需求动态，推动定制化产品 开发，同时注重环保与可持续发展，累积了5000+成熟配方， 确保每一款化妆品都拥有卓越品质。 ',
    home_yfsl_video_img:
      'http://101.35.179.19:8066/uploads/Temp/2024-10-27/d69a1ff15f7cf491fab3050906c14349.png',
    home_yfsl_video:
      'http://101.35.179.19:8066/uploads/Temp/2024-10-27/2cb4477ea7ab725d24024bec4380f1e6.mp4',
    home_company_video:
      'http://101.35.179.19:8066/uploads/Temp/2024-10-27/16c860958fcc7a881e15d408a4d6fbd7.mp4',
    home_company_video_img:
      'http://101.35.179.19:8066/uploads/Temp/2024-10-27/e333c76bb6d1f38a546ec40b11f81ed9.png',
    about_img:
      'http://101.35.179.19:8066/uploads/Temp/2024-10-29/e5e14a585b3977450d836e08788b7ee6.png ',
    about_description:
      ' 汕头市奇伟实业有限公司成立于1996年，深耕化妆品行业28年，专注于彩妆产品的设计、 研发、制造的专业化妆品OEM、ODM、OBM生产企业，致力服务电商、微商、跨境、 私域、专业线、商超链锁为一体的专业化、国际化的综合性化妆品企业。 <br/> 奇伟的研发团队与营销中心紧密联系、协同合作。营销中心通过多渠道数据系统和分析 团队支持，充分做好研发的“眼睛”，及时将“前线”信息反馈到研发实验室。双方发 挥各自的优势，让研发走出实验室，更快转化成市场成果，从而提升奇伟的行业领先地位。 奇伟目前已获得 “国家高新技术企业”'
  })
  const setconfig = (val) => {
    config.value = val
    // console.log(screenWidth.value)
  }

  return { config, setconfig }
})
