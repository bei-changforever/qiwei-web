import server from '@/utils/request'
// 获取广告图
export const getBanner = (data) => {
  return server({
    url: `/get-banner?type=${data}`,
    method: 'GET'
  })
}

// 获取首页热门产品分类
export const getHotProductCategory = () => {
  return server({
    url: '/get-hot-product-category',
    method: 'GET'
  })
}

// 获取首页热门产品
export const geTHotProduct = (category_id) => {
  return server({
    url: `/get-hot-product?category_id=${category_id}`,
    method: 'GET'
  })
}
//获取证书
export const getCert = (type) => {
  return server({
    url: `/get-cert?type=${type}`,
    method: 'GET'
  })
}
