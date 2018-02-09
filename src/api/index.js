import axios from 'axios';
// axios.defaults.baseURL = 'http://192.168.2.51:8080/mockjsdata/4';
axios.defaults.baseURL = 'http://localhost:8000';
// axios.defaults.baseURL = 'http://result.eolinker.com/44a5qEx9dbc59b403308b7e341344fad94a21dd373fa8bf?uri=';
axios.interceptors.response.use((res)=>{
  return res.data; // 在这里统一拦截结果 把结果处理成res.data
});
//获取列表
export let getLists = () =>{
  return axios.get('/list');
};
// 最热模块点击量
// export let getHits = () =>{
//   return axios.get('/project/updateClick');
// }
// // 投票模块投票数
// export let getVotes = () =>{
//   return axios.get('/projectPoll/updatePollByid');
// }
