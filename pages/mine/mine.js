// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      myphoneNumber:'15098729002',
      verificationCode:'931109',
      carTypeArray:['Audi','BMW',"Benz"],
      carTypeIndex:'',
      colorTypeArray:['红色','黑色','白色'],
      colorTypeIndex:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getUserInfo({
      
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
  // ly new add
  handleGetCode() {
      // requset  获取rescode
      let verificationCode = 'resCode'
      this.setData({
        verificationCode
      })
  },
  handleBack() {
     wx.switchTab({
       url: '/pages/index/index'
     })
  },
  handleCarPicker({detail}) {
    this.setData({
      carTypeIndex:detail.value
    })
  },
  handleColorPicker({detail}) {
    this.setData({
      colorTypeIndex: detail.value
    })
  },
  handleSave() {
    //
    wx.redirectTo({
      url:'/pages/roadselect/roadselect'
    })
  }
})