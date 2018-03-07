import axios from 'axios'
import qs from 'qs'

const instance = axios.create({
  baseURL: 'https://bit.macsen318.com/btoken/',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: [function (data, headers) {
    // Do whatever you want to transform the data
    return qs.stringify({
      ...data,
      sys: 'admin',
      token: 'tgkGGr9lWkPJqL4yJaLQwekJclOuM6O+lACXInVouRpra5t0WWPInIZjzeybmANo'
    })
  }]
})

instance.interceptors.response.use(res => { // 拦截请求后的状态
  if (res.data.ret === 1) {
    return res.data.data
  } else {
    return Promise.reject(res.data)
  }
})

//评级列表
export const rateList = params => {
  return instance.post('/rate/user/rate_list', params)
}
//点击投票
export const voteProject = params => {
  return instance.post('/user/rate/vote_project', params)
}
//用户点击,记录浏览量
export const viewClick = params => {
  return instance.post('/user/rate/view_click', params)
}
//评级详情
export const projectDetail = params => {
  return instance.post('rate/user/projectDetail', params)
}
//项目搜索
export const projectSearch = params => {
  return instance.post('/user/rate/search', params)
}
