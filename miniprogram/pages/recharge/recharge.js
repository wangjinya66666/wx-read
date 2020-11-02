// pages/recharge/recharge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cont:0,
    moneys:[{
      num:30,
      more:3000
  },{
      num:50,
      more:5100
  },{
      num:100,
      more:10500
  },{
      num:130,
      more:11000
  },{
      num:150,
      more:16000
  },{
      num:200,
      more:25000
  }]
  },
  clickBtn(e){
    this.setData({
        cont:e.currentTarget.dataset.i
    })
  },
  //点击判断是否已经获取tokn
  clickAmount(){
    const token=wx.getStorageSync('token');
    if(!token){ //不存在就授权
        wx.navigateTo({
           url:'../empower/empower' 
        })
    }else{ //存在就调用支付
        wx.requestPayment({
            timeStamp: '',
            nonceStr: '',
            package: '',
            signType: 'MD5',
            paySign: '',
            success (res) { },
            fail (res) { }
          })

    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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