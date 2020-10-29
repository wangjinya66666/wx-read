// pages/classmall/classmall.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    minsdata:null,
    bookModula:[],
    selectRes:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.getMins(options.big,options.name);
    this.getBooks(options.big,options.name);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  //获取大分类的小分类
  getMins(formal,name){
    let that=this;
    wx.request({
      url: 'http://api.zhuishushenqi.com/cats/lv2',
      success:function(res){
        that.setData({
          minsdata:res.data[formal]
        })
        // console.log('大分类的数据',that.data.minsdata);
        that.setData({
          minsdata: that.data.minsdata.filter(item=>item.major==name)
        })
        // console.log('小分类的数据', that.data.minsdata);
      }
    })
  },
  // 从小分类获取到数据
  getBooks(formal,name,small=''){
    let that=this;
    wx.request({
      url: 'https://api.zhuishushenqi.com/book/by-categories?gender='+formal+'&type=hot&major='+name+'&minor='+small+'&start=0&limit=20',
      success:function(res){
        that.setData({
          bookModula:res.data.books
        })
        // console.log('获取到的书籍',this.data.bookModula);
      }
    })
  },
  // 点击小分类实现数据切换以及颜色的切换
  clickSmall(e){
    // console.log('传递的data数据',e.currentTarget.dataset);
    this.setData({
      selectRes:e.currentTarget.dataset.i
    })
    this.getBooks(this.options.big,this.options.name,e.currentTarget.dataset.item);
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