Page({

  /**
   * 页面的初始数据
   */
  data: {
    icons:[
      {
          url:'data:image/png;base64,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',
          name:'排行',
          path:'../../pages/ranking/ranking'
      },{
          url:'data:image/png;base64,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',
          name:'VIP',
          path:'../../pages/vip/vip'
      },{
          url:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAMAAAAKE/YAAAAAM1BMVEVHcEz26/L36/L26/H26/H26/H36/H35ev26/H26/L/e4L6g4f/ubv/gon7i4/8q7D+ho3ioMi9AAAACnRSTlMAhUP/IeJf/ajGzgk+aQAABDBJREFUeNrtndtyJCEIhgcVxUym3fd/2s2mctydzDQ0CmTz36RqKhdfUQhoK5xOmiqpAlDviK3l3LBh7wRQUzl5VElPsPmGnuBdoZdKmHcJqboAT3uB38GTLXGlLBLVaMR23AUwHxTCWv9OPauor3PvqoT8bO41XlIxq2oBtjbyAuzU8xRN9O1CeZpoUiSpLU9Ugxlm7nmyurqxIS8QBDOzvrHnevMnz1aLfpQXikK5hqaLJMyL1Q5nmpoNVANEOuXYR9lIFJD5AHXPhuoBmYXUxswiasrmooDMbGrILgTu8+DB3JiyG+2uQwr6gcYSJdgJAh9lV6JQi5CxGEvzBt1KLIfe6daQHepOjinZpUo057jrIJCdCiJFjh0RhLJbUYA6aX/l1D1D9yD5e082R9/QGNDQ102N3qExoKGvmbr7h8ZQMfqrWN0jQPcQJentEhViQMPReNcUdGgpsuNdG9tZQdto8qhHXOSzlh542B8rVCbzdlbUxqIWe8c4q2rI/IMXpNtZWU0Uqk0NzTS10Ds2behN4h/M2HFWlyR+YCRolNUdttAv9UeNBV1FRzTG0CQqloyhUVRKG0M/O3WKBp0k9f+mLv5OwPFR6dcrEaNBI7ta8iDJPrypi70n55/SPKiLfWZT40FXwYmHOTQIIt4PtASaBCeP5tA9JjTGg8aY0C0edBOUHj/QEuj8A73MPdp/FvIuN/SZ6tpvFtCX8XhT443x/T/HRQlamsbvMD8RviKNK78Z1R6Pd/WKdO23g9AUD5rEOxdD9wD5dmvsZP7wn0Nr5xJyYxvyCKHEgy4nfh43h5bcqbGG7pKjXkHtoQpNkrse3NpDGxokny+4yUUbOkk+FHHTuDZ0kXySM4ZG0cdPY/cg0Wdmdu2hC11FH/SN43QRXZ2whUbZ9UdbaJDd6LWFfrvZ22yhL6yDGtkFyE0bemMHPH7QG9rQgx3w+P7RtKGbxDu4/jHsDE3iFwFtWDF/fhXAzC/DiBkPXa9vY/t1OayNe+kb4j9kiHEpiL7D45wIr3P6KeA7qHSK9+IMIz6iTOHeBX/1MjgFNHTMJ9i+02IJ17/hVgeH4vay7K3ORm7DXv1uTUmcdvi41x+ohnMOp4X1/U5d/iLInp5o7rL5ru5zzlLMzu6EEVvPxWzy5ylaM5pRp1CL0FmOYTaihkCBwxW1oHW2eT4XtaCmgMzG1OJW3xDKn82pD7WvryHi8z+50SCjHx/JsL56Qo35KD1I2DBcjmrTc9ZNGkHFWVZlUZ5RHmS1YuJPU590Nt/YU+aF1amePW2gHDT/QWOdj9DcmZQz5vYtmEepjb1ohGZSdJKFQ20LqSzJRovnBx+fVtotJvCmI6NsEcyGHQu5DYlf3BuYftLBxwTvBH3Xwmzd2sR/W7zCrSHeSFB9jnd/nUdP/c9EesSnPzRjGv1vvGbJhXBvG7oAAAAASUVORK5CYII=',
          name:'充值',
          path:'../../pages/recharge/recharge'
      }
  ]
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