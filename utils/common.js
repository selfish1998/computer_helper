// var news =[{
//     id: '00000',
//     title: '2019年是AMD成立50周年，今年对AMD来说意义重大',
//     poster: '../images/123.jpg',
//     content: '2019年是AMD成立50周年，今年对AMD来说意义重大，因为这一次AMD全线产品都切入到了7nm工艺，全新架构的锐龙、霄龙及Radeon显卡在性能上也达到或者超过了友商的水平，AMD首次在工艺、性能上同时超越对手.目前AMD已经在消费级处理器市场上战果斐然，下一步就要重点开拓服务器市场了，为此AMD于10月10日在北京国测国际会议会展中心成功召开了AMD大中华区合作伙伴峰会，在本次峰会上AMD邀请了来自大中华区的近千位合作伙伴、从业人士以及媒体朋友共同分享了AMD在过去一年取得的辉煌战果，在迎来公司成立50周年的同时，AMD不负众望地推出了一系列高性能产品，在全球IT行业掀起了7nm风暴，给全球用户带来了更多更好的选择。',
//     add_date: '2019-09-28'
//   },
//   {
//     id: '00001',
//     title: 'NVIDIA GTX 1660 Super显卡包装盒曝光：显存容量6GB',
//     poster: '../images/456.jpg',
//     content: '[PConline 资讯]10月初，外媒曝光NVIDIA即将推出NVIDIA GTX 1660 Super、GTX 1650 Super两款显卡，不过关于这两款显卡具体发布时间跟具体参数还没完全确定下来，虽然如此并不妨碍网上爆料，根据外媒Videocardz报道称，从NVIDIA GTX 1660 Super包装盒、显卡的渲染图可了解到，NVIDIA GTX 1660 Super将配置GDDR6显存，显存容量为6GB。',
//     add_date: '2019-10-10'
//   },
//   {
//     id: '00002',
//     title: '英特尔桌面处理器或放弃10nm 直接进入7nm时代',
//     poster: '../images/789.jpg',
//     content: '10nm工艺不断推迟，让英特尔的产品线饱受折磨，产品、工艺混乱。虽然在2019年6月宣布开始出货10nm工艺的Ice Lake冰湖处理器，但仅限笔记本移动平台，桌面、服务器等高性能产品还需要14nm工艺的Comet Lake彗星湖辅助。根据英特尔的路线图规划，2020年初会有14nm工艺的Comet Lake-S桌面处理器，继续Skylake CPU架构和9.5代核芯显卡，最多10核心20线程、并可能全线开放超线程，比如i3系列已确认4核心8线程，但英特尔回更换LGA 1200新接口，搭配400系列主板芯片组。再往后的Rocket Lake家族，笔记本采用10nm，但桌面版还是14nm，2021年问世，唯一已知重大利好是英特尔会为其配备第12代核显(采用与独显相同的Xe架构) 。',
//     add_date: '2019-09-10'
//   },
// ];


//获取新闻列表
function getNewsList(){
  var list = [];
  wx.request({
    url: 'http://127.0.0.1:8080/', //仅为示例，并非真实的接口地址
    data: {
    },
    header: {
      'content-type': 'application/json' // 默认值
    },
    success(res) {
      list = res.data;
    }
  })
  return list;
  
}
//获取新闻内容
function getNews(newsId){
  let msg={
    code:"404",
    news:{}
  };
  for(var i=0;i<news.length;i++){
    if(newsId==news[i].id){
      msg.code='200';
      msg.news=news[i];
      break;
    }
  }
  return msg;
}


//暴露接口让其他页面引用
module.exports={
  getNewsList:getNewsList,
  getNews:getNews
}