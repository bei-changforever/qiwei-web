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
    url: `/get-product?id=${id}`,
    method: 'GET'
  })
}

// 获取业务范围分类
export const getBusinessCategory = () => {
  return server({
    url: '/get-business-scope-category',
    method: 'GET'
  })
}

// 获取业务范围
export const getBusinessScope = (category_id) => {
  return server({
    url: `/get-business-scope?category_id=${category_id}`,
    method: 'GET'
  })
}

// 获取公司沿革
export const getCompanyHistory = () => {
  return server({
    url: '/get-company-history',
    method: 'GET'
  })
}

// 提交留言
export const submitMessage = (data) => {
  return server({
    url: '/send-message',
    method: 'POST',
    data
  })
}