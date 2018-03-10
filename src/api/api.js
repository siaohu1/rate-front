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
      token: 'x1eTCh5cJDUl6FET7t0WI%2FlHCM4yENn3XnZ2V%2BqPwxYcoYOWhSFraEZiBLRDGhH8',
      systemVersion:7,
      pVersion:1,
      version:1,
      system:'win',
      channel : 1,
      mobileInfo:'rate-front',
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
//项目搜索(未实现)
export const projectSearch = params => {
  return instance.post('/user/rate/search', params)
}
