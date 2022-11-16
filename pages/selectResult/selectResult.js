// pages/selectResult/selectResult.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 定义搜索结果变量，初始化为空数组 searchResult用于存储搜索出来的数据
    searchResult: [],
    // 定义inputValue，输入框的input值，初始化为空
    inputValue: "",
  },

  // handleInput函数用于实时搜索框的输入值 并执行搜索功能
  handleInput: function (e) {
    // 获取输入框的值
    const { value } = e.detail
    // 合法性验证，去除前后空格，防止打很多空格也会发送请求
    // 去除空格后的值是合法值了，再取反，为不合法值，不合法搜索结果清空
    if (!value.trim()) {
      this.setData({
        searchResult: [],
      })
      // 值不合法，直接return掉，不用执行下面的了
      return;
    }
    /**
     * 防抖动功能
     * 1 如果第一次输入的值合法，会执行this.TimeId这个定时器，然后一秒钟之后发送请求
     * 2 如果在这1秒钟的延迟内，用户重新做了输入，重新触发handleInput方法时，会执行clearTimeout
     *   将上一个定时器请求杀掉，然后再执行新的定时器函数，直到用户1秒后都没有新的输入后，才会发送请求
     */
    clearTimeout(this.TimeId)
    this.TimeId = setTimeout(() => {
      // 调用qSearch函数获取数据
      this.qSearch(value)
    }, 1000)
  },
  // qSearch 发送请求函数（参数为输入框中的值）获取数据
  qSearch: function (query) {
    // 定义一个加载中的提示
    wx.showLoading({
      title: '加载中...',
    })
    // 定义temp列表用于存储临时存储检索到的结果
    var temp=[];
    for (let item of this.data.goods_inList){
      var string = item.goodsInName;
      // 判断字符串中是否包含搜索框中输入的文本 若包含则将该项添加进temp列表中
      if(string.indexOf(query) >= 0){
        // console.log("item",item);
        // console.log("item.goodsInName",item.goodsInName);
        temp.push(item);
      }
      this.setData({
        searchResult:temp
      })
    }
    // 数据加载完毕后隐藏加载中弹窗并提示检索完毕
    wx.hideLoading({
      success: (res) => {
        wx.showToast({
          title: '检索完毕',
        })
      },
    })
  },
  // 取消按钮函数
  handleCanle: function () {
    this.setData({
      searchResult: [],
      inputValue: ""
    })
  },

  // getselectdata用于获取选中项的信息 并保存到本地
  getselectdata(e){
    // console.log("e",e);
    // 将选中项的信息保存到本地缓存
    try{
      wx.setStorageSync('selected_goods', e.currentTarget.dataset)
      console.log('保存数据到缓存成功')
    }catch (e) {
      console.log('保存数据到缓存发生错误');
      return;
    }
    wx.showToast({
      title: '选中成功',
      icon: 'success',
      duration: 2000,
      success:(res)=>{
        console.log("选中成功");
        // 选中成功后跳转到指定的页面
        wx.redirectTo({
          url: '/pages/pre_select/pre_select',
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 获取全局变量中的goods_inList 
    try{
      var goods_inList = wx.getStorageSync('goods_inList')
    }catch (e) {
      console.log('读取本地缓存数据失败')
      return;
    }
    console.log("goods",goods_inList);
    this.setData({
      goods_inList:goods_inList
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
