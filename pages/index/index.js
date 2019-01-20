//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('i-button.open-type.getUserInfo'),
    currentStatus:'1',
    currentTarget:'',
    suggestPrice:'10',
    carNumber:'11',
    leaveCarNumber:'1',
    comingCarNumber:'4',
    time:'11:20',
    currentRoute:{
      start:'建筑大学',
      end:'软件园'
    },
    currentPage: 'pages/index/index',

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  handleChangeStatus({detail}) {
       this.setData({
         currentStatus: detail.key
       });
     },
  handleChangeTarget({detail}) {
      this.setData({
         currentTarget: detail.key
       });
  },
  bindTimeChange({detail}) {
    this.setData({
      time:detail.value
    })
  },
  handleChangePage({ detail }) {
    this.setData({
          currentPage: detail.key
    });
    wx.switchTab({
        url: detail.key
    })
    // wx.redirectTo({
    //   url: '/pages/mine/mine'
    // })
  }
})
