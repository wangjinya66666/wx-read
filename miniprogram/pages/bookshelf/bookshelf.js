// pages/bookshelf/bookshelf.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:[]
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
    let localItem=wx.getStorageSync('key')||[];
    this.setData({
      msg:localItem
    })
    // console.log('书架里面的数据',this.data.msg)
  },
  // 移除书架
  clickDel(e){
    // console.log('获取到点击的书籍id',e.currentTarget.dataset.id);
    let localItem=wx.getStorageSync('key')||[];
    let flg=localItem.findIndex(v=>v.id==e.currentTarget.dataset.id);
    let that=this;
    wx.showModal({
      title: '提示',
      content: '确定移除此书籍',
      success (res) {
        if (res.confirm) {
          if(flg!==-1){
            //当点击书籍存在的时候，就要删除这组数据
           localItem.splice(flg,1);
           wx.setStorageSync('key', localItem);
           that.setData({
             msg:localItem
           })
          }
        } else if (res.cancel) {
        }
      }
    })
    
    

    
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