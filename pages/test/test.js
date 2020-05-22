// pages/test/test.js
import WxValidate from '../../utils/WxValidate.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // new: [{
    //   id: "1",
    //   poster: "./",
    //   content: "contentcontentcontentcontent",
    //   add_date: "0000-00-0",
    //   title: "title"
    //   }]
    array: [{
      message: 'foo',
    }, {
      message: 'bar'
    }]

  },
  method:{

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var list = []
    wx.request({
      
      url: 'http://127.0.0.1:8080/', //仅为示例，并非真实的接口地址
      data: {

      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        list = res.data;
        console.log(list);
        console.log(list[0]);
        console.log(Object.keys(list[0]));
        console.log(list[0].id);
        console.log(list[0].poster);
        console.log(list[0].title);
        console.log(list[0].add_date);
        console.log(list[0].content);
        that.setData({newsdata: list});

      },
      fail(err){
        console.log("错误信息：" + err.errMsg)
      }
    })
    
    
  },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})