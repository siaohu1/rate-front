<template>
  <section class="arc-main">
  <section class="main-top">
  <section class="arcblock-main">
  <section class="main-top-left">
      <el-col class="main-left-title">
        <img :src="projectDetailList.logo" alt="">
        <span class="main-word">{{projectDetailList.projectName}}</span>
      </el-col>
      <el-col class="main-left-center">
      <p >{{projectDetailList.projectDesc}}</p>
      </el-col>
      <el-col class="main-left-img">
        <ul>
          <li>
          <a href="">
            <img src="../../assets/icon/微信.png" alt="">
          </a>
          </li>
          <li>
            <a href="">
              <img src="../../assets/icon/in.png" alt="">
            </a>
          </li>
          <li>
            <a href="">
              <img src="../../assets/icon/facebook-f.png" alt="">
            </a>
          </li>
          <li>
            <a href="">
              <img src="../../assets/icon/邮件.png" alt="">
            </a>
          </li>
          <li>
            <a href="">
              <img src="../../assets/icon/emi纸飞机.png" alt="">
            </a>
          </li>
          <li>
            <a href="">
              <img src="../../assets/icon/微博.png" alt="">
            </a>
          </li>
        </ul>
      </el-col>
    </section>
    <el-col class="main-top-right">
      <section class="top-right-top">
        <h1>9.0</h1>
        <p><img src="../../assets/icon/时间1.png" alt="">还剩15小时3分</p>
        <div><span>2018-01-15 </span>-<span> 2018-02-15</span></div>
      </section>
      <article class="top-right-bottom">
        <ul>
          <li>代币<span>BBCion</span></li>
          <li>价格<span>1 BBCoin = 0.12美元</span></li>
          <li>价钱<span>1 BBCoin = 0.16美元</span></li>
          <li>奖金<span>可得到</span></li>
          <li>赏金<span>可得到</span></li>
          <li>平台<span>复仇</span></li>
          <li>验收<span>BTC ,ETH ,菲亚特</span></li>
          <li>最小的投资<span>240美元</span></li>
          <li>软帽<span>200万美元</span></li>
          <li>硬帽子<span>52,000,000美元</span></li>
          <li>国家<span>美国</span></li>
        </ul>
      </article>
    </el-col>
  </section>
  </section>
    <section class="main-bottom">
      <article class="bottom-productions">
        <h1>章节</h1>
        <ul>
         <li @click="n=1">评级最小的投资评级最小的投资评</li>
         <li @click="n=2">评级最小的投资评级最小的</li>
         <li @click="n=3">评级最小的投资小的投资</li>
         <li @click="n=3">评级最小的投资评级最小的投资评级最小的投资</li>
         <li @click="n=3">评级最小小的投资</li>
         <li @click="n=3">评级最小的投资评</li>
         <li @click="n=3">评级最小的投资评级最小的投资评级最小的投资</li>
         <li @click="n=3">评级资</li>
         <li @click="n=3">评级最小的投资</li>
        </ul>
      </article>
      <section class="bottom-content" v-show="n===1">
        <h1>详情</h1>
        <p>我们将Scorum项目分配给“稳定”评级，并向意识到本评价中发现的风险的中长期投资者推荐购买SCR代币。只有在对项目感兴趣的投资者人数大幅增加的情况下，参加ICO才能进行短期投机。<p>

          <p>Scorum是体育博客的平台，用户不仅可以通过发布原创内容，而且可以通过积极的讨论和投票获得收益。主要思想是从Steemit项目中借用，但SCR令牌的排放是有限的，项目的功能将会更加多样化。</p>

          <p>我们认为，这个团队拥有实施这些想法的所有必要技能，潜在市场的数量可以使其达到理想的访问水平。</p>

          <p>不过，我们相信，这项1,700万元的硬性上限对于服务的实施来说，是过分夸大了，基本模式已经发明，只需要细化。我们认为这个数量的需求是不合理的，并且没有提供对网站未来运作的财务和经济模型的预测，这可能对SCR令牌的基本价值产生负面影响。</p>

          <p>此外，该平台的博彩功能在几乎所有国家都面临着与该领域的严格立法相关的额外风险，这妨碍了我们给予Scorum项目更高的评级。</p>

          <p>有关项目和ICO的一般信息</p>
          <p>Scorum是一个以体育为主题的博客平台的项目，扩展了一个统计中心，博彩交易所和幻想体育联盟的形式。该平台的主要思想是从Steemit项目借用，Scorum用户将获得奖励创造的内容，如发表的文章和各种体育照片，读者可以赚取更新和评论。
          </p>
          <p>统计中心的设计旨在简化高质量体育内容的创建，使作者能够方便地在其文章中使用统计数据，分析数据，照片和交互式可视化数据，读者将能够为自己喜爱的球队和球员找到结果。</p>

          <p>博彩交易所也将在门户网站上提供，用户可以在没有中间人的情况下下注体育比赛。</p>

          <p>博客平台上用户报酬系统采用区块链技术，它将通过两种类型的代币 - 在ICO期间将出售的Scorum Coins（SCR）和Scorum Power（SP）来完成，后者将具有专门的基础设施角色，并将用于系统内参与者的交互。Scorum和Steemit经济体之间的主要区别在于SCR和SP令牌的排放严格限制在预定的数量。</p>

         <p> Scorum公司成立于2017年，其研发中心位于白俄罗斯的明斯克。所有国家都可以参加ICO，包括美国公民; SCR代币不是证券的法律意见可以在网站上找到。



        </p>
      </section>
      <section class="bottom-content" v-show="n===2">
        <h1>详情</h1>
        <p>我们将Scorum项目分配给“稳定”评级，并向意识到本评价中发现的风险的中长期投资者推荐购买SCR代币。只有在对项目感兴趣的投资者人数大幅增加的情况下，参加ICO才能进行短期投机。<p>
        <p>Scorum是体育博客的平台，用户不仅可以通过发布原创内容，而且可以通过积极的讨论和投票获得收益。主要思想是从Steemit项目中借用，但SCR令牌的排放是有限的，项目的功能将会更加多样化。</p>
        <p>我们认为，这个团队拥有实施这些想法的所有必要技能，潜在市场的数量可以使其达到理想的访问水平。</p>
        <p>不过，我们相信，这项1,700万元的硬性上限对于服务的实施来说，是过分夸大了，基本模式已经发明，只需要细化。我们认为这个数量的需求是不合理的，并且没有提供对网站未来运作的财务和经济模型的预测，这可能对SCR令牌的基本价值产生负面影响。</p>
        <p>此外，该平台的博彩功能在几乎所有国家都面临着与该领域的严格立法相关的额外风险，这妨碍了我们给予Scorum项目更高的评级。</p>
        <p>有关项目和ICO的一般信息</p>
        <p>Scorum是一个以体育为主题的博客平台的项目，扩展了一个统计中心，博彩交易所和幻想体育联盟的形式。该平台的主要思想是从Steemit项目借用，Scorum用户将获得奖励创造的内容，如发表的文章和各种体育照片，读者可以赚取更新和评论。
        </p>
      </section>
      <section class="bottom-content" v-show="n===3">
        <h1>详情</h1>
        <p>统计中心的设计旨在简化高质量体育内容的创建，使作者能够方便地在其文章中使用统计数据，分析数据，照片和交互式可视化数据，读者将能够为自己喜爱的球队和球员找到结果。</p>
        <p>博彩交易所也将在门户网站上提供，用户可以在没有中间人的情况下下注体育比赛。</p>
        <p>博客平台上用户报酬系统采用区块链技术，它将通过两种类型的代币 - 在ICO期间将出售的Scorum Coins（SCR）和Scorum Power（SP）来完成，后者将具有专门的基础设施角色，并将用于系统内参与者的交互。Scorum和Steemit经济体之间的主要区别在于SCR和SP令牌的排放严格限制在预定的数量。</p>
        <p> Scorum公司成立于2017年，其研发中心位于白俄罗斯的明斯克。所有国家都可以参加ICO，包括美国公民; SCR代币不是证券的法律意见可以在网站上找到。
        </p>
      </section>
    </section>
  </section>
</template>

<script>
  import * as apiRequest from '../../api/api'
  export default {
  data(){
    return{
      //详情列表
      projectDetailList:[],
      n:1,
    }
  },
    mounted(){
      this.getProjectDetail()
    },
    methods: {
      getProjectDetail(projectId = this.$route.query.id){
        let _this = this;
        apiRequest.projectDetail({
          projectId
        }).then(data=>{
          console.log(data);
          _this.projectDetailList = data;
          console.log(_this.projectDetailList)
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .arc-main {
    .main-top {
      height: 6.15rem;
      width: 100%;
      background-color: #f5f5f5;
      .arcblock-main {
        width: 13.85rem;
        height: 6.15rem;
        margin-left: 2.69rem;
        .main-top-left {
          width: 6.95rem;
          height: 5.41rem;
          background-color: #f5f5f5;
          float: left;
          .main-left-title{
            height: 1.01rem;
            line-height: 1.01rem;
            font-family: "PingFangSC-Regular";
            margin-top: 1.1rem;
            margin-bottom: .2rem;
            img{
              width: 1.01rem;
              height: 1.01rem;
              vertical-align: center;
              float: left;
              margin: 0 .31rem;
            }
            .main-word{
              font-size: .36rem;
              color: #383838 ;
            }
          }
          .main-left-center{
            width: 100%;
            border-top: 1px solid #CCCCCC;
            height: 2.2rem;
            p{
              font-size: .18rem;
              line-height: .25rem;
              color: #383838;
              margin-top: .42rem;
            }
          }
          .main-left-img{
            margin-top: .6rem;
            ul{
              display: flex;
              justify-content: center;
              li{
                width: .5rem;
                height: .5rem;
                margin:0 .225rem;
                a{
                  img{
                    border-radius: 50%;
                    width: 100%;
                    height: 100%;
                  }
                }
              }
            }
          }
        }
        .main-top-right {
          width: 4rem;
          height: 4.74rem;
          background-color: white;
          float: left;
          margin-left: 2.87rem;
          margin-top: .99rem;
          padding: 0.15rem .3rem 0 .3rem;
          border: 1px solid #CCCCCC;
          border-radius: 2px;
          .top-right-top{
            text-align: center;
            border-bottom: 1px solid #cccccc;
            h1{
              font-size: .55rem;
              line-height: .77rem;
              color: #3C7BE3;
            }
            p{
              font-family: PingFangSC-Medium;
              font-size: .24rem;
              color: #383838;
              letter-spacing: 0;
              line-height: .33rem;
              margin-bottom: .03rem;
              img{
                vertical-align: top;
                margin-right: .04rem;
                width: .28rem;
                height: .28rem;
                position: relative;
                top: .02rem;

              }
            }
            div{
              color: #808080;
              line-height: .24rem;
              margin-bottom: .01rem;
              span{
                font-family: PingFangSC-Regular;
                font-size: .12rem;
                color: #808080;
                letter-spacing: 0;
              }
            }
          }
          .top-right-bottom{
            ul{
              padding: 0.07rem;
              li{
                font-size: .16rem;
                line-height: .22rem;
                letter-spacing: 0;
                font-family: "PingFangSC-Medium";
                margin: .06rem 0;
                span{
                  display: inline-block;
                  float: right;
                  color: #383838;
                  line-height: .22rem;
                  font-family:"PingFangSC-Regular" ;
                }
              }
            }
          }
        }
      }
    }
    .main-bottom{
      width: 13.74rem;
      height: 12.99rem;
      margin: 1.81rem 2.69rem .42rem 2.69rem;
      .bottom-productions{
        width: 2.02rem;
        height: 5.45rem;
        border-right: 8px solid  #979797;
        float: left;
        h1{
          ont-family: PingFangSC-Medium;
          font-size: .3rem;
          color: #383838;
          letter-spacing: 0;
          margin-top: .05rem;
        }
        ul{
          margin-top: .32rem;
          padding-right: .38rem;
          li{
            font-family: PingFangSC-Medium;
            font-size: .16rem;
            color: #383838;
            letter-spacing: 0;
            cursor: pointer;
            margin: .1rem 0;
          }
        }
      }
      .bottom-content{
        width: 11.14rem;
        height: 100%;
        float: left;
        margin-left: .45rem;
        h1{
          font-family: PingFangSC-Regular;
          font-size: .36rem;
          color: #383838;
          letter-spacing: 0;
        }
        p{
          ont-family: PingFangSC-Regular;
          font-size: .2rem;
          color: #1A1A1A;
          letter-spacing: 0;
          line-height: .4rem;
          margin: .2rem 0;
          text-indent: .4rem;
        }
      }
    }
  }


</style>
