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


// 获取产品分类
export const getProductCategory = () => {
  return server({
    url: '/get-product-category',
    method: 'GET'
  })
}

//获取产品列表
export const getProductList = (data) => {
  return server({
    url: `/get-product-list?category_id=${data.category_id}&offset=${data.offset}&limit=${data.limit}`,
    method: 'GET',
  })
}

// 获取产品详情
export const getProductDetail = (id) => {
  return server({
    url: `/get-product-detail?id=${id}`,
    method: 'GET'
  })
}