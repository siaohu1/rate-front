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
                <div class="items">
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
              <a href="">查看全部 ></a>
            </div>
          </section>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </el-row>
</template>

<script>
  import {getLists} from "../../../api/index";

  export default {
    data() {
      return {
        list: [],
      }
    },
    created() {
      this.getList();
    },
    methods: {
      async getList() {
        this.list = await getLists();
      }
    }
  }


</script>


<style scoped lang="less">
  .main{
    background-color: #EAF2FF;
    padding: 0 15%;
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
  .plate{width:100%;height:13.90rem;margin-bottom: 38px;}
  .plate-left{width: 63%; float: left;}
  .plate-left-top{width: 100%;}
  .plate-left-bottom{width: 100%;height:270px;margin-top: 19px;display: inline-block;}
  .plate-newest,.plate-hottest,.plate-vote,.plate-left-bottom{display: inline-block;border: 1px solid #ccc;border-radius: 2px;background-color: #fff;}
  .newsimg img{
    width: 100%;
    height: 100%;
  }
  .news{
    padding-left: 5%;
  }
  .plate-newest,.plate-hottest{width:48%;height: 1099px;position: relative;overflow: hidden;}
  .plate-vote{position: relative;overflow: hidden;}
  .plate-hottest{margin-left: 2.24%;}
  .plate-vote{width: 34%;height: 1390px;margin-left: 1.5%;float: left;}
  .plate-box{width: 91.97%;margin: 0 auto;margin-top: 30px;}
  .plate-header{font-size: 20px;color: #808080;display: flex;justify-content: space-between;border-bottom: 1px solid #ccc;}
  .plate-header span{padding-bottom: 12px;}
  .items{width: 100%;height: 190px;margin: 0 auto;margin-top: 26px;margin-bottom: 26px;border-bottom: 1px solid #ccc;}
  .items-name{display: flex;justify-content: space-between;}
  .items-name img{width:64px;height: 64px;float: left;}
  .items-name a{color:#383838;font-size: 24px;line-height:64px;font-weight: bolder;}
  .items-name p{font-size: 42px;color:#3C7BE3;}
  .items-label{display: flex;justify-content: space-between;margin-top: 19px;}
  .items-label p span{font-size: 12px;color: #808080;}
  .items-label p{float: right;margin-top: 90%;}
  .items-left{width: 75.21%;white-space: nowrap;}
  .items-left ul li{margin: 0;}
  .tab-button{width: 68px;height: 21px;border-radius: 4px;font-size: 12px;color: #fff;line-height: 21px;margin:0 5px;}
  .danger{background-color: #F86A6A ;}
  .primary{background-color: #3C7BE3  ;}
  .info{background-color: #cccccc  ;}
  .tab{display: flex;flex-wrap:wrap;align-content: space-between;height: 63px;overflow: hidden; width: auto}
  ul li {display: inline-block;}
  .voteNum a{color: #383838;font-size: 24px;font-weight: bolder;}
  .voteNum img{width: 20px;height: 20px;}
  .voteNum span{font-size: 20px;color: #808080;line-height:20px;}
  .votebtn{margin-top: 50%;}
  .newsimg{width: 39%;height:270px;display: inline-block;float: left;background:url(../../../assets/img1.png) no-repeat;background-size:cover;}
  .news{width: 53%;height: 160px;display: inline-block;margin: 0 auto;margin-top: 5.74%;}
  h5{font-size: 24px;font-weight: normal;text-align: left;}
  .news p{text-align: left;font-size: 14px;color: #383838;line-height: 21px;}
  .reportText{margin-top: 15px;}
  .checkall{z-index:999;width: 100%;height:30px;position: absolute;bottom: 0px;margin-top: 10px;background-color:#fff;}
  .checkall p img{vertical-align: middle;}
  .checkall a{color: #3c7be3;font-size: 16px;}
  /* 滚动条样式 */
  .plate-newest{overflow: auto}
  ::-webkit-scrollbar{width: 10px;height: 10px!important;}
  ::-webkit-scrollbar-track{border-radius: 5px;background: #fff;}
  ::-webkit-scrollbar-thumb {width: 10px;height: 30px}
  .plate-vote-list{overflow: auto;}
  .plate-hottest{overflow:auto;}

  /*.plate-hottest-list::-webkit-scrollbar{width: 10px;height: 189px;}*/
  /*.plate-hottest-list::-webkit-scrollbar-track{border-radius: 10px;background: #cccccc;}.plate-newest-list{overflow-y: scroll;}*/

  /*.plate-vote-list::-webkit-scrollbar{width: 10px;height: 189px;}*/
  /*.plate-vote-list::-webkit-scrollbar-track{border-radius: 10px;background: #cccccc;}*/
  .plate-content{overflow: visible!important;}
  .el-button+.el-button{
    margin: 0 10px 0 0;
  }
  .el-button--primary{
    margin-right: 10px;
  }
  .plate-newest:hover{
    overflow: auto;
  }
  .load-more{
    text-align: center;
    margin-bottom: 20px;
  }
  .load-more a{
    color: #3C7BE3;
    font-size: 16px;
    line-height: 22px;
    font-family: "PingFangSC-Regular";
    display: inline-block;
    height: 22px;
  }


</style>
