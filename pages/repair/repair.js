// pages/repair/repair.js

//引入表单验证文件
import WxValidate from '../../utils/WxValidate.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //楼栋
    place: ['金鸡岭校区（东区）', '尧山校区（花江）'],
    array_dongqu: ['13#(金鸡岭校区)', '15#(金鸡岭校区)', '16#(金鸡岭校区)', '17#(金鸡岭校区)', '18#(金鸡岭校区)', '19#(金鸡岭校区)', '20#(金鸡岭校区)', '22#(金鸡岭校区)', '23#(金鸡岭校区)', '24#(金鸡岭校区)'],
    array_huajiang: ['1#', '2#', '3#', '4#', '5#', '6#', '7#', '8#', '9#', '10#', '11#', '12#', '13#', '14#', '15#', '16#', '17#', '18#', '19#', '20#', '21#', '22#', '23#', '24#', '25#', '26#', '27#', '28#', '29#', '30#', '31#', '32#', '33#'],
    //初值
    index: 0,
    pindex:0,
    date: '2019-09-01',
    form: {
      title:'',
      room:'',
      tel:'',
      describe:''
    },
    repair:[{
      
    }
    ]
    
  },
  /**
  * 生命周期函数--监听页面加载
  */

  onLoad: function (options) {
    this.initValidate()
  },

  //宿舍楼
  bindPlaceChange: function (e) {
    console.log('区值', e.detail.value)
    this.setData({
      pindex: e.detail.value
    })
  },
  bindPickerChange: function (e) {
    console.log('楼值', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  //日期
  bindDateChange: function (e) {
    console.log('时间选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

  
  submitForm: function (e) {

    const params = e.detail.value
    //校验表单
    if (!this.WxValidate.checkForm(e)) {
      const error = this.WxValidate.errorList[0]
      this.showModal(error)
      return false
    }
    this.showModal({
      msg:'提交成功'
    })
    console.log('form发生了submit事件，携带的数据为：', e.detail.value)
    
  },

  //表单验证
  initValidate() {
    const rules = {
      title: {
        required: true,
      },
      describe: {
        required: true,
      },
      tel: {
        required: true,
        tel: true,
      },
      room: {
        required: true,
        number: true,
        maxlength: 10,
      },
    }

    // 验证字段的提示信息，若不传则调用默认的信息
    const messages = {
      title: {
        required: '请输入标题',
      },
      describe: {
        required: '请输入故障描述',
      },
      tel: {
        required: '请输入手机号',
        tel: '请输入正确的手机号',
      },
      room: {
        required: '请输入房间号',
        number: '请输入正确数字房间号',
        maxlength: '请不要输入超过10个数字的房间号',
      },
    }
    this.WxValidate = new WxValidate(rules, messages)
  },

  
  //相机
  uploadimg: function () {
    var that = this;
    wx.chooseImage({  //从本地相册选择图片或使用相机拍照
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有

      success: function (res) {
        //console.log(res)
        //前台显示
        that.setData({
          source: res.tempFilePaths
        })

        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'http://www.website.com/home/api/uploadimg',
          filePath: tempFilePaths[0],
          name: 'file',

          success: function (res) {
            //打印
            console.log(res.data)
          }
        })

      }
    })
  },

  showModal(error) {
    wx.showModal({
      content: error.msg,
      showCancel: false,
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

  },


  

})
