const orderList = [{
  r_id: '1',
  r_title: '1',
  r_describe: '2阿斯弗阿三广东佛山东莞sergeantsertraline还是让他你好的try还能的人挺好对人体歌手如果阿尔法阿维格sergeant而是如果而是如果sergeant色弱和肉体和地方干部和尚如果阿尔gear给虽然他供货商让他和深入推进哇4其5会我今儿研究人员图库体育课楼热idgh色然后啊我日',
  r_date: '3',
  r_place: '4',
  r_build: '5',
  r_room: '6',
  r_tel: '7'
},
];    //不能跟逗号,   必须是分号;

//获取订单列表
function getOrdersList(){
  let list=[];
  for(var i=0;i<orderList.length;i++){
    let obj={};
    obj.r_id=orderList[i].r_id;
    obj.r_build=orderList[i].r_build;
    obj.r_date=orderList[i].r_date;
    obj.r_describe=orderList[i].r_describe;
    obj.r_room=orderList[i].r_room;
    obj.r_tel=orderList[i].r_tel;
    obj.r_title=orderList[i].r_title;
    obj.r_place=orderList[i].r_place;
    list.push(obj);
  }
  return list;
}


//暴露接口让其他页面引用
module.exports = {
  getOrdersList: getOrdersList
}