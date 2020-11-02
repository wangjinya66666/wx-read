// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:null,
    clickColor:null,
    clickTxt:'加入书架'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log('详情页id',options.id);
    let that=this;
    // 判断加购按钮的高亮
    let localItem=wx.getStorageSync('key')||[];
    const flg=localItem.findIndex(v=>v.id==options.id);
    if(flg!==-1){
      that.setData({
        clickColor:true,
        clickTxt:'移除书架'
      })
    }
    wx.request({
      url: 'http://api.zhuishushenqi.com/book/'+options.id,
      // url: 'http://api.zhuishushenqi.com/book/548d9c17eb0337ee6df738f5',
      success:function(res){
        that.setData({
          msg:res.data
        })
        // console.log('详情页数据渲染',res.data)
      }
    })
  },
  addBooks(){
    // console.log(this.data.msg.title,this.data.msg.cover,this.data.msg._id);
    let localItem=wx.getStorageSync('key')||[];
    const flg=localItem.findIndex(v=>v.id==this.data.msg._id);
    if(flg==-1){
      // 不存在，添加
      localItem.push({id:this.data.msg._id,title:this.data.msg.title,cover:this.data.msg.cover, clickColor:true,clickTxt:'移除书架'});
      wx.showToast({
        title: '加入书架成功',
        icon:'success',
        mask: true,
      })
      this.setData({
        clickColor:true,
        clickTxt:'移除书架'
      })
    }else{
      // 存在的话，点击移除
      localItem.splice(flg,1);
      wx.showToast({
        title: '移除书架成功',
        icon:'success',
        mask: true,
      })
      this.setData({
        clickColor:false,
        clickTxt:'加入书架'
      })
    }
    wx.setStorageSync('key', localItem)
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