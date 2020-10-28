// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id);
    let that=this;
    wx.request({
      // url: 'http://api.zhuishushenqi.com/book/'+options.id,
      url: 'http://api.zhuishushenqi.com/book/548d9c17eb0337ee6df738f5',
      success:function(res){
        that.setData({
          msg:res.data
        })
        console.log('详情页数据渲染',res.data)
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