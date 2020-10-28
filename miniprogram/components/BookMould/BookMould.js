// components/BookMould/BookMould.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bookid:{
      type:String,
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    msg:null,
    title:null
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      let that=this;
      wx.request({
        url: 'http://api.zhuishushenqi.com/ranking/'+this.properties.bookid,
        success: function (res) {
          var data=res.data.ranking.books.splice(0,4);
          that.setData({
            msg:data,
            title:res.data.ranking.title.slice(0,5)
          })
          // console.log(that.data.msg);//打印出返回的数据
        },
      })
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  }
})
