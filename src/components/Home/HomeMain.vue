<template xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html">
  <el-row :gutter="24" class="main">
    <section class="sreach">
      <center>
        <form action="">
          <input type="text" placeholder="搜索项目">
          <img src="../../assets/search.png" alt="">
        </form>
      </center>
      </section>
    <section class="content">
      <section class="plate">
        <section class="plate-left">
          <section class="plate-left-top">
            <section class="plate-newest">
              <section class="plate-newest-list">
                <section class="plate-box">
                  <header class="plate-header">
                    <span>最热项目</span>
                    <span>项目评级</span>
                  </header>
                  <section class="plate-content" v-for="(list,index) in HottestList" @click="clickView(list.id)">
                    <router-link to="/arcblock">
                      <section class="items-list">
                        <section class="items">
                          <section class="items-name">
                            <article class="items-left" style="white-space:nowrap;">
                              <img  src="list.logo" alt="">
                              <a href="#">{{list.name}}</a>
                            </article>
                            <section>
                              <p>{{list.grade}}</p>
                            </section>
                          </section>
                          <section class="items-label">
                            <section class="items-left tab" style="margin:0;">
                              <el-button class="button1" type="primary" size="mini">真格领头
                              </el-button>
                              <el-button type="danger" size="mini">高风险</el-button>
                              <el-button type="info" size="mini">真领头</el-button>
                              <el-button type="info" size="mini">真领头</el-button>
                              <el-button type="info" size="mini">真格领头</el-button>
                            </section>
                            <article class="home-click">
                              <p><img src="../../assets/eys.png" alt="" class="home-eye"><span>{{list.voteCount}}</span></p>
                            </article>
                          </section>
                        </section>
                      </section>
                    </router-link>
                  </section>
                </section>
              </section>
              <section class="load-more">
                <a href="">查看全部 ></a>
              </section>
            </section>
            <section class="plate-hottest">
              <section class="plate-hottest-list">
                <section class="plate-box">
                  <header class="plate-header">
                    <span>最新项目</span>
                    <span>项目评级</span>
                  </header>
                  <section class="plate-content" v-for="(list,index) in LatestList">
                    <router-link to="/arcblock">
                    <section class="items-list">
                      <section class="items">
                        <section class="items-name">
                          <article class="items-left" style="white-space:nowrap;">
                            <img src="list.logo" alt="">
                            <a href="#">{{list.name}}</a>
                          </article>
                          <section>
                            <p>{{list.grade}}</p>
                          </section>
                        </section>
                        <section class="items-label">
                          <section class="items-left tab" style="margin:0;">
                            <el-button class="button1" type="primary" size="mini">真格领头
                            </el-button>
                            <el-button type="danger" size="mini">高风险</el-button>
                            <el-button type="info" size="mini">真领头</el-button>
                            <el-button type="info" size="mini">真领头</el-button>
                            <el-button type="info" size="mini">真格领头</el-button>
                          </section>
                          <article class="home-click">
                            <p><img src="../../assets/eys.png" alt="" class="home-eye"><span>{{list.voteCount}}</span></p>
                          </article>
                        </section>
                      </section>
                    </section>
                    </router-link>
                  </section>
                </section>
              </section>
              <section class="load-more">
                <a href="">查看全部 ></a>
              </section>
            </section>
          </section>
          <section class="plate-left-bottom">
            <section class="newsimg"><img src="../../assets/img1.png" alt=""></section>
            <section class="news">
              <h5>独家：从ICORating获得Telegram Open白皮书的入门书</h5>
              <p class="reportTime"><img src="../../assets/time.png" alt=""><span>2018年3月21日</span></p>
              <p class="reportText">ICORating团队已经获得了即将到来的电报开放网络（Telegram Open Network）ICO白皮书的入门书 -
                这是一个在炒作和投资方面已被宣布破纪录的加密的行动。</p>
            </section>
          </section>
        </section>
        <section class="plate-vote">
          <section class="plate-box">
            <header class="plate-header">
              <span>项目投票</span>
              <span style="margin-right: .18rem">投票数</span>
            </header>
            <section class="plate-content" v-for="(list,index) in VotingList">
              <router-link to="/arcblock">
              <section class="items-list">
                <section class="item1">
                  <section class="items-name">
                    <section class="items-left">
                      <ul>
                        <li><img :src="list.icon" alt=""></li>
                        <li class="voteNum">
                          <a href="#">{{list.name}}</a><br>
                          <img src="../../assets/vote.png" alt=""><span>{{list.voteCount}}1</span>
                        </li>
                      </ul>
                    </section>
                    <section style="margin-right: .2rem">
                      <el-button class="votebtn" type="primary" size="small" @click="clickVote(list.id)">点击投票</el-button>
                    </section>
                  </section>
                </section>
              </section>
              </router-link>
            </section>
            <section class="load-more">
              <a href="">查看全部</a>
            </section>
          </section>
        </section>
      </section>
    </section>
    <router-view></router-view>
  </el-row>
</template>

<script>
  import * as apiRequest from '../../api/api'
  export default {
    data() {
      return {
        //最新
        HottestList: [],
        HottestCount: 0,
        //最热
        LatestList:[],
        LatestCount:0,
        //投票
        VotingList:[],
        VotingCount:0,
        projectId:'',
      }
    },
    mounted() {
      this.getRateList();
    },
    methods: {
      //获取评级列表
      getRateList(pageIndex = 1,) {
        var _this = this
        apiRequest.rateList({
          pageIndex,
          pageSize: 20,
          type :0,
        })
          .then(data => {
            _this.HottestList = data.project_list
            _this.HottestCount = data.count
          })
          .catch(error => {
            console.log(error)
          });
        apiRequest.rateList({
          pageIndex,
          pageSize: 20,
          type :1,
        })
          .then(data => {
            _this.LatestList = data.project_list
            _this.LatestCount = data.count
          })
          .catch(error => {
            console.log(error)
          });
        apiRequest.rateList({
          pageIndex,
          pageSize: 20,
          type :2,
        })
          .then(data => {
            _this.VotingList = data.project_list
            _this.VotingCount = data.count
          })
          .catch(error => {
            console.log(error)
          });
      },
      //点击投票
      clickVote(projectId){
        apiRequest.voteProject({
          projectId
        }).then(data => {
          alert('投票成功');
          this.getRateList();
        })
          .catch(error => {
            console.log(error)
          })
      },
      //点击记录浏览量
      clickView(projectId){
        apiRequest.viewClick({
          projectId
        }).then(data => {
          // alert('投票成功');
          this.getRateList();
        })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }
</script>

<style scoped lang="less">
  .main{
    background-color: #EAF2FF;
    padding: 0 2.675rem .38rem 2.675rem;
    .sreach{
      width: 100%;
      margin: .38rem 0;
      height: .64rem;
      center{
      height: 100%;
      form{
        width: 4.8rem;
        height: .64rem;
        position: relative;
        img{
          position: absolute;
          width: .3rem;
          height: .3rem;
          top: .17rem;
          right: 0;
        }
        input{
          width:100%;
          height: 100%;
          border-radius: 85px;
          font-size: .2rem;
          color: #808080;
          padding-left:.34rem;
          border: none;
          outline: none
        }
      }
    }
    }
    .content{
      width: 100%;
      margin: 0 auto;
      .plate{
        width: 100%;
        height: 11rem;
        margin-bottom: .38rem;
        .plate-left{
          width: 8.92rem;
          float: left;
          .plate-left-top{
            width: 100%;
          }
          .plate-left-bottom{
            width: 8.8766rem;
            height: 2.7rem;
            margin-top: .15rem;
            display: inline-block;
          }
        }
      }
    }
    .plate-newest,
    .plate-hottest,
    .plate-vote,
    .plate-left-bottom{
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 2px;
      background-color: #fff;
    }
    .newsimg img{
      width: 100%;
      height: 100%;
    }
    .reportTime{
      margin-bottom: .21rem;
      img{
        vertical-align: top;
        margin-right: .05rem;
      }
    }
    .home-click{
      margin-top: .41rem;
    }
    .plate-newest,
    .plate-hottest{
      width:4.342rem;
      height: 10.99rem;
      position: relative;
      overflow: hidden;
    }
    .plate-vote{
      position: relative;
      overflow: hidden;
      width: 4.68rem;
      height: 13.9rem;
      margin-left:.17rem;
      float: left;
    }
    .plate-box{
      width: 91.97%;
      margin: 0 auto;
      margin-top: 30px;
    }
    .plate-header{
      font-size: .2rem;
      color: #808080;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ccc;
      padding:0 .1rem 0 .18rem;
      span{
        padding-bottom: .12rem;
      }
    }
    .items{
      width: 100%;
      height: 1.750rem;
      margin-top: .26rem;
      border-bottom: 1px solid #ccc;
    }
    .items-name{
      display: flex;
      justify-content: space-between;
      padding-left: .26rem;
      img{
        width:.64rem;
        height: .64rem;
        float: left;
        margin-right: .1rem;
      }
      a{
        color:#383838;
        font-size: .24rem;
        line-height:.64rem;
        font-weight: bolder;
      }
      p{
        font-size: .42rem;
        color:#3C7BE3;
        padding-right: .20rem;
      }
    }
    .item1{width: 100%;
      height: 1.14rem;
      margin: .26rem auto;
      border-bottom: 1px solid #ccc;
    }
    .items-label{
      display: flex;
      justify-content: space-between;
      margin-top: .19rem;
      margin-right: .26rem;
      p{
        float: right;
        margin-top:  .065rem;
        span{
          font-size: .12rem;
          color: #808080;
        }
      }
    }
    .item1-left{
      width: 75.21%;
      white-space: nowrap;
      ul{
        li{
          margin: 0;
        }
      }
    }
    .item1-name{
      display: flex;
      justify-content: space-between;
      img{
        width:.64rem;
        height: .64rem;
        float: left;
      }
      a{
        color:#383838;
        font-size:.24rem;
        line-height:.64rem;
        font-weight: bolder;
      }
      p{
        font-size: .42rem;
        color:#3C7BE3;
      }
    }
    .item1-label{
      display: flex;
      justify-content: space-between;
      margin-top: 19px;
    }
    .item1 .el-button{
      margin: .3rem 0 0 0 ;
      width:.72rem ;
      height: .28rem;
      padding: 0;
    }
    .tab .el-button{
      width: .64rem;
      height: .21rem;
      border-radius: .04rem;
      color: #fff;
      padding: .03rem .05rem;
      span{
        font-size: .12rem;
      }
    }
    .tab span{
      font-size: .01rem;
    }
    .home-eye{
      position: relative;
      top: .024rem;
      right: .03rem;
    }
    .danger{
      background-color: #F86A6A;
    }
    .primary{
      background-color: #3C7BE3;
    }
    .info{
      background-color: #cccccc;
    }
    .tab{
      display: flex;
      flex-wrap:wrap;
      align-content: space-between;
      height: .63rem;
      overflow: hidden;
      width: 2.4rem;
      padding-left: .26rem;
    }
    ul li {display: inline-block;}
    .voteNum{
      a{
        color: #383838;
        font-size: .24rem;
        font-weight: bolder;
      }
      img{
        width: .2rem ;
        height: .2rem;
      }
      span{
        font-size: .2rem;
        color: #808080;
        line-height:.2rem;
        position: relative;
        right: .08rem;
      }
    }
    .votebtn{
      margin-top: 50%;
    }
    .newsimg{
      width: 3.32rem;
      height:2.7rem;
      display: inline-block;
      float: left;
      background:url(../../assets/img1.png) no-repeat;
      background-size:cover;
    }
    .news{
      width: 5rem;
      height: 1.6rem;
      display: inline-block;
      float: left;
      margin-left: .33rem;
      margin-top: .56rem;
      padding-right: .2rem;
      p{
        text-align: left;
        font-size: .14rem;
        color: #383838;
        line-height: .21rem;
        span{
          margin-bottom: .21rem;
        }
      }
      h5{font-size: .24rem;
        font-weight: normal;
        text-align: left;
      }
    }
    .checkall{
      z-index:999;
      width: 100%;
      height:.3rem;
      position: absolute;
      bottom: 0px;
      margin-top: .10rem;
      background-color:#fff;
      p{
        img{
          vertical-align: middle;
        }
      }
      a{
        color: #3c7be3;font-size: .16rem;
      }
    }
    /* 滚动条样式 */
    .plate-newest{
      overflow: auto;
      float: left;
    }
    .plate-vote-list{
      overflow: auto;
    }
    .plate-hottest{
      overflow:auto;
      float: left;
      margin-left: .16rem;
    }
    .plate-content{
      overflow: visible!important;
    }
    .el-button+.el-button{
      margin: 0 .14rem 0 0;
    }
    .el-button--primary{
      margin-right: .14rem;
    }
    .load-more{
      text-align: center;
      margin-bottom: .2rem;
      a{
        color: #3C7BE3;
        font-size: .16rem;
        line-height: .22rem;
        font-family: "PingFangSC-Regular";
        display: inline-block;
        height: .22rem;
        margin-top: .175rem;
      }
    }
    .el-button--mini{
      padding: 0!important;
      font-size: .01rem;
      font-weight: 200;
      font-family: "PingFangSC-Medium";
    }
    }
</style>
