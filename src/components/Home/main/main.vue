<template xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html">
  <el-row :gutter="24" class="main">
    <div class="sreach">
      <center>
        <form action="">
          <input type="text" placeholder="搜索项目">
          <img src="../../../assets/search.png" alt="">
        </form>
      </center>
      </div>
    <div class="content">
      <div class="plate">
        <div class="plate-left">
          <div class="plate-left-top">
            <div class="plate-newest">
              <div class="plate-newest-list">
                <section class="plate-box">
                  <header class="plate-header">
                    <span>最新项目</span>
                    <span>项目评级</span>
                  </header>
                  <div class="plate-content">
                    <router-link to="/arcblock">
                      <div class="items-list" v-for="lists in list">
                        <div class="items">
                          <div class="items-name">
                            <div class="items-left" style="white-space:nowrap;">
                              <img src="list.findProjectByClick.picurl" alt="">
                              <a href="#">{{list.findProjectByClick.name}}</a>
                            </div>
                            <div>
                              <p>{{list.findProjectByClick.core}}</p>
                            </div>
                          </div>
                          <div class="items-label">
                            <div class="items-left tab" style="margin:0;">
                              <el-button class="button1" type="primary" size="mini">真格领头
                              </el-button>
                              <el-button type="danger" size="mini">高风险</el-button>
                              <el-button type="info" size="mini">真领头</el-button>
                              <el-button type="info" size="mini">真领头</el-button>
                              <el-button type="info" size="mini">真格领头</el-button>
                            </div>
                            <div>
                              <p><img src="../../../assets/eys.png" alt=""><span>{{list.findProjectByClick.click}}</span></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </router-link>

                  </div>
                </section>
              </div>
              <div class="load-more">
                <a href="">查看全部 ></a>
              </div>
            </div>
            <div class="plate-hottest">
              <div class="plate-hottest-list">
                <section class="plate-box">
                  <header class="plate-header">
                    <span>最热项目</span>
                    <span>项目评级</span>
                  </header>
                  <div class="plate-content">
                    <div class="items-list" v-for="lists in list">
                      <div class="items">
                        <div class="items-name">
                          <div class="items-left" style="white-space:nowrap;">
                            <img src="../../../assets/eys.png" alt="">
                            <a href="#">{{list.projectByTimeDescList.name}}</a>
                          </div>
                          <div>
                            <p>{{list.projectByTimeDescList.core}}</p>
                          </div>
                        </div>
                        <div class="items-label">
                          <div class="items-left tab" style="margin:0;">
                            <el-button class="button1" type="primary" size="mini">真格领头
                            </el-button>
                            <el-button type="danger" size="mini">高风险</el-button>
                            <el-button type="info" size="mini">真领头</el-button>
                            <el-button type="info" size="mini">真领头</el-button>
                            <el-button type="info" size="mini">真格领头</el-button>
                          </div>
                          <div>
                            <p><img src="../../../assets/eys.png" alt=""><span>{{list.projectByTimeDescList.click}}</span></p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </section>
              </div>
              <div class="load-more">
                <a href="">查看全部 ></a>
              </div>
            </div>
          </div>
          <div class="plate-left-bottom">
            <div class="newsimg"><img src="../../../assets/img1.png" alt=""></div>
            <div class="news">
              <h5>独家：从ICORating获得Telegram Open Network白皮书的入门书</h5>
              <p class="reportTime"><img src="../../../assets/time.png" alt=""><span>2018年3月21日</span></p>
              <p class="reportText">ICORating团队已经获得了即将到来的电报开放网络（Telegram Open Network）ICO白皮书的入门书 -
                这是一个在炒作和投资方面已被宣布破纪录的加密行动。</p>
            </div>
          </div>

        </div>

        <div class="plate-vote">
          <section class="plate-box">
            <header class="plate-header">
              <span>项目投票</span>
              <span>投票数</span>
            </header>
            <div class="plate-content">
              <div class="items-list" v-for="lists in list">
                <div class="item1">
                  <div class="items-name">
                    <div class="items-left">
                      <ul>
                        <li><img src="../../../assets/eys.png" alt=""></li>
                        <li class="voteNum">
                          <a href="#">{{list.projectByTimeDescList.name}}</a><br>
                          <img src="../../../assets/vote.png" alt=""><span>{{list.projectByTimeDescList.click}}</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <el-button class="votebtn" type="primary" size="small">点击投票</el-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="load-more">
              <a href="" v-for="hits in hit"></a>
            </div>
          </section>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </el-row>
</template>

<script>
  import {getLists,getHits,getVotes} from "../../../api/index";

  export default {
    data() {
      return {
        list: [],
        hit:[],
        vote:[],
      }
    },
    created() {
      this.getList();
      this.getHit();
      this.getVote();
    },
    methods: {
      async getList() {
        this.list = await getLists();
      },
      async getHit() {
        this.hit = await getHits();
      },
      async getVote(){
        this.vote = await getVotes();
      }
    }
  }


</script>


<style scoped lang="less">
  .main{
    background-color: #EAF2FF;
    padding: 0 2.675rem .38rem 2.675rem;
    /*margin-bottom: .38rem;*/
    .sreach{
      width: 100%;
      margin: .38rem 0;
      height: .64rem;
    center{
      width: 14rem;
      height: 100%;
      form{
        width: 4.8rem;
        height: .64rem;
        position: relative;
        img{
          position: absolute;
          width: .4rem;
          height: .4rem;
          top: .13rem;
          right: 0rem;
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
    }
  /*.sreach center{height: 100%;}*/
  /*.sreach center form{width: 25%;height: 100%;position: relative;}*/
  /*.sreach center form input{width:100%;height: 100%;border-radius: 85px;font-size: 20px;color: #808080;padding-left:34px;border: none;outline: none}*/
  /*.sreach form img{position: absolute;width: 40px;height: 40px;top: 13px;left: 84.58%;}*/
  .content{width:100%;;margin: 0 auto;}
  .plate{width:100%;height:11rem;margin-bottom: 38px;}
  .plate-left{width: 63%; float: left;}
  .plate-left-top{width: 100%;}
  .plate-left-bottom{width:8.8766rem ;height:2.7rem;margin-top: .15rem;display: inline-block;}
  .plate-newest,.plate-hottest,.plate-vote,.plate-left-bottom{display: inline-block;border: 1px solid #ccc;border-radius: 2px;background-color: #fff;}
  .newsimg img{
    width: 100%;
    height: 100%;
  }
  .reportTime{
    margin-bottom: .21rem;
  }
  .reportTime img{
    vertical-align: top;
    margin-right: .05rem;
  }
  .news{
  }
  .plate-newest,.plate-hottest{width:4.337rem;height: 10.99rem;position: relative;overflow: hidden;}
  .plate-vote{position: relative;overflow: hidden;}
  .plate-vote{width: 4.68rem;height: 13.9rem;margin-left:.17rem;float: left;}
  .plate-box{width: 91.97%;margin: 0 auto;margin-top: 30px;}
  .plate-header{font-size: .2rem;color: #808080;display: flex;justify-content: space-between;border-bottom: 1px solid #ccc;}
  .plate-header span{padding-bottom: .12rem;}
  .items{width: 100%;height: 1.90rem;margin: 0 auto;margin-top: .26rem;margin-bottom: .26rem;border-bottom: 1px solid #ccc;}
  .items-name{display: flex;justify-content: space-between;}
  .items-name img{width:.64rem;height: .64rem;float: left;}
  .items-name a{color:#383838;font-size: .24rem;line-height:.64rem;font-weight: bolder;}
  .items-name p{font-size: .42rem;color:#3C7BE3;}
  .items-label{display: flex;justify-content: space-between;margin-top: 19px;}
  .item1{width: 100%;height: 1.14rem;margin: 0 auto;margin-top: .26rem;margin-bottom: .26rem;border-bottom: 1px solid #ccc;}
  .item1-label p span{font-size: .12rem;color: #808080;}
  .item1-label p{float: right;margin-top: 90%;}
  .item1-left{width: 75.21%;white-space: nowrap;}
  .item1-left ul li{margin: 0;}
  .item1-name{display: flex;justify-content: space-between;}
  .item1-name img{width:.64rem;height: .64rem;float: left;}
  .item1-name a{color:#383838;font-size: .24rem;line-height:.64rem;font-weight: bolder;}
  .item1-name p{font-size: .42rem;color:#3C7BE3;}
  .item1-label{display: flex;justify-content: space-between;margin-top: 19px;}
  .item1-label p span{font-size: .12rem;color: #808080;}
  .item1-label p{float: right;margin-top: 90%;}
  .item1-left{width: 75.21%;white-space: nowrap;}
  .item1-left ul li{margin: 0;}
  /*.tab-button{width: .64rem;height: .21rem;border-radius: .04rem;font-size: .12rem;color: #fff;line-height: .21rem;margin:0 .05rem;}*/
  .item1 .el-button{
    margin: .3rem 0 0 0 ;
    width:.72rem ;
    height: .28rem;
    padding: 0;
  }
  .tab .el-button{
    width: .64rem;height: .21rem;border-radius: .04rem;;color: #fff;
    padding: .03rem .05rem;
    span{
        font-size: .12rem;
    }
  }
  .tab span{
    font-size: .12rem;
  }
  .danger{background-color: #F86A6A ;}
  .primary{background-color: #3C7BE3  ;}
  .info{background-color: #cccccc  ;}
  .tab{display: flex;flex-wrap:wrap;align-content: space-between;height: .63rem;overflow: hidden; width: 2.4rem}
  ul li {display: inline-block;}
  .voteNum a{color: #383838;font-size: .24rem;font-weight: bolder;}
  .voteNum img{width: .2rem ;height: .2rem;}
  .voteNum span{font-size: .2rem;color: #808080;line-height:.2rem;}
  .votebtn{margin-top: 50%;}
  .newsimg{width: 3.32rem;height:2.7rem;display: inline-block;float: left;background:url(../../../assets/img1.png) no-repeat;background-size:cover;}
  .news{width: 5rem;height: 1.6rem;display: inline-block; float: left;margin-left: .3rem;margin-top: .56rem;padding-right: .2rem}
  h5{font-size: .24rem;font-weight: normal;text-align: left;}
  .news p{text-align: left;font-size: .14rem;color: #383838;line-height: .21rem;span{
    margin-bottom: .21rem;
  }}
  .reportText{
    padding-right: .3rem;
  }
  /*.reportText{margin-top: 15px;}*/
  .checkall{z-index:999;width: 100%;height:.3rem;position: absolute;bottom: 0px;margin-top: .10rem;background-color:#fff;}
  .checkall p img{vertical-align: middle;}
  .checkall a{color: #3c7be3;font-size: .16rem;}
  /* 滚动条样式 */
  .plate-newest{overflow: auto;float: left}
  ::-webkit-scrollbar{width: .1rem;height: .1rem!important;}
  ::-webkit-scrollbar-track{border-radius: 5px;background: #fff;}
  ::-webkit-scrollbar-thumb {width: .1rem;height: .3rem}
  .plate-vote-list{overflow: auto;}
  .plate-hottest{overflow:auto; float: left;margin-left: .15rem}

  /*.plate-hottest-list::-webkit-scrollbar{width: 10px;height: 189px;}*/
  /*.plate-hottest-list::-webkit-scrollbar-track{border-radius: 10px;background: #cccccc;}.plate-newest-list{overflow-y: scroll;}*/

  /*.plate-vote-list::-webkit-scrollbar{width: 10px;height: 189px;}*/
  /*.plate-vote-list::-webkit-scrollbar-track{border-radius: 10px;background: #cccccc;}*/
  .plate-content{overflow: visible!important;}
  .el-button+.el-button{
    margin: 0 .1rem 0 0;
  }
  .el-button--primary{
    margin-right: .1rem;
  }
  .load-more{
    text-align: center;
    margin-bottom: .2rem;
  }
  .load-more a{
    color: #3C7BE3;
    font-size: .16rem;
    line-height: .22rem;
    font-family: "PingFangSC-Regular";
    display: inline-block;
    height: .22rem;
  }
  .el-button-mini{
    padding: 0!important;
  }


</style>
