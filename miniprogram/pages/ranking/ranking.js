// pages/ranking/ranking.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftAll:[],
    leftMsg:[],
    rightMsg:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getLeftData();
    this.getRightData();
  },
  // 获取左侧数据
  getLeftData(){
    let that=this;
    wx.request({
      url: 'http://api.zhuishushenqi.com/ranking/gender',
      success: function (res) {
        that.setData({
          leftAll:res.data,
          leftMsg:res.data.male
        })
        // console.log('小分类数据',that.data.leftMsg);//打印出返回的数据
      },
    })
  },
  // 获取右侧数据
  getRightData(id='54d42d92321052167dfb75e3'){
    let that=this;
    wx.request({
      url: 'http://api.zhuishushenqi.com/ranking/'+id,
      success: function (res) {
        that.setData({
          rightMsg:res.data.ranking.books
        })
        // console.log('大分类数据',that.data.rightMsg);//打印出返回的数据
      },
    })
  },
  // 点击上方按钮
  clickBig(e){
    const a=e.currentTarget.dataset.big;
    const b=this.data.leftAll[a];
    this.setData({
      leftMsg:b
    })
    this.getRightData(e.currentTarget.dataset.small)
    // console.log('点击改变之后的左侧值',this.data.leftMsg)
  },
  // 点击左侧按钮
  clickSmall(e){
    this.getRightData(e.currentTarget.dataset.id);
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