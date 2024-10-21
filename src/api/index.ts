import server from '@/utils/request'
// 获取广告图
export const getBanner = (data) => {
  return server({
    url: `/get-banner?type=${data}`,
    method: 'GET'
  })
}
