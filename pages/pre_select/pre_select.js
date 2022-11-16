// pages/pre_select/pre_select.js
const data = [
  {"goodsInId":573,"goodsInName":"口罩","goodsInType":"医疗器械设备","goodsInTotal":50,"goodsInRemaining":49,"goodsInUnit":"个","goodsInSpecs":"60L","goodsInUsername":"测试","goodsInSource":"测试","goodsInDate":"2022-11-15","goodsInComment":"测试入库","goodsInBatch":"","goodsInExpiryDate":"2022-11-15","goodsInCompany":"江西省南昌市第一医院","goodsInPrice":""},
  {"goodsInId":573,"goodsInName":"口罩","goodsInType":"医疗器械设备","goodsInTotal":50,"goodsInRemaining":49,"goodsInUnit":"个","goodsInSpecs":"60L","goodsInUsername":"测试","goodsInSource":"测试","goodsInDate":"2022-11-15","goodsInComment":"测试入库","goodsInBatch":"","goodsInExpiryDate":"2022-11-15","goodsInCompany":"江西省南昌市第一医院","goodsInPrice":""},
  {"goodsInId":573,"goodsInName":"口罩","goodsInType":"医疗器械设备","goodsInTotal":50,"goodsInRemaining":49,"goodsInUnit":"个","goodsInSpecs":"60L","goodsInUsername":"测试","goodsInSource":"测试","goodsInDate":"2022-11-15","goodsInComment":"测试入库","goodsInBatch":"","goodsInExpiryDate":"2022-11-15","goodsInCompany":"江西省南昌市第一医院","goodsInPrice":""},
  {"goodsInId":573,"goodsInName":"垃圾桶","goodsInType":"医疗器械设备","goodsInTotal":50,"goodsInRemaining":49,"goodsInUnit":"个","goodsInSpecs":"60L","goodsInUsername":"测试","goodsInSource":"测试","goodsInDate":"2022-11-15","goodsInComment":"测试入库","goodsInBatch":"","goodsInExpiryDate":"2022-11-15","goodsInCompany":"江西省南昌市第一医院","goodsInPrice":""},
  {"goodsInId":573,"goodsInName":"垃圾桶","goodsInType":"医疗器械设备","goodsInTotal":50,"goodsInRemaining":49,"goodsInUnit":"个","goodsInSpecs":"60L","goodsInUsername":"测试","goodsInSource":"测试","goodsInDate":"2022-11-15","goodsInComment":"测试入库","goodsInBatch":"","goodsInExpiryDate":"2022-11-15","goodsInCompany":"江西省南昌市第一医院","goodsInPrice":""},
  {"goodsInId":573,"goodsInName":"垃圾桶","goodsInType":"医疗器械设备","goodsInTotal":50,"goodsInRemaining":49,"goodsInUnit":"个","goodsInSpecs":"60L","goodsInUsername":"测试","goodsInSource":"测试","goodsInDate":"2022-11-15","goodsInComment":"测试入库","goodsInBatch":"","goodsInExpiryDate":"2022-11-15","goodsInCompany":"江西省南昌市第一医院","goodsInPrice":""},
  {"goodsInId":573,"goodsInName":"垃圾桶","goodsInType":"医疗器械设备","goodsInTotal":50,"goodsInRemaining":49,"goodsInUnit":"个","goodsInSpecs":"60L","goodsInUsername":"测试","goodsInSource":"测试","goodsInDate":"2022-11-15","goodsInComment":"测试入库","goodsInBatch":"","goodsInExpiryDate":"2022-11-15","goodsInCompany":"江西省南昌市第一医院","goodsInPrice":""},
  {"goodsInId":573,"goodsInName":"垃圾桶","goodsInType":"医疗器械设备","goodsInTotal":50,"goodsInRemaining":49,"goodsInUnit":"个","goodsInSpecs":"60L","goodsInUsername":"测试","goodsInSource":"测试","goodsInDate":"2022-11-15","goodsInComment":"测试入库","goodsInBatch":"","goodsInExpiryDate":"2022-11-15","goodsInCompany":"江西省南昌市第一医院","goodsInPrice":""},
  {"goodsInId":573,"goodsInName":"垃圾桶","goodsInType":"医疗器械设备","goodsInTotal":50,"goodsInRemaining":49,"goodsInUnit":"个","goodsInSpecs":"60L","goodsInUsername":"测试","goodsInSource":"测试","goodsInDate":"2022-11-15","goodsInComment":"测试入库","goodsInBatch":"","goodsInExpiryDate":"2022-11-15","goodsInCompany":"江西省南昌市第一医院","goodsInPrice":""},
  {"goodsInId":573,"goodsInName":"垃圾桶","goodsInType":"医疗器械设备","goodsInTotal":50,"goodsInRemaining":49,"goodsInUnit":"个","goodsInSpecs":"60L","goodsInUsername":"测试","goodsInSource":"测试","goodsInDate":"2022-11-15","goodsInComment":"测试入库","goodsInBatch":"","goodsInExpiryDate":"2022-11-15","goodsInCompany":"江西省南昌市第一医院","goodsInPrice":""},
  {"goodsInId":573,"goodsInName":"垃圾桶","goodsInType":"医疗器械设备","goodsInTotal":50,"goodsInRemaining":49,"goodsInUnit":"个","goodsInSpecs":"60L","goodsInUsername":"测试","goodsInSource":"测试","goodsInDate":"2022-11-15","goodsInComment":"测试入库","goodsInBatch":"","goodsInExpiryDate":"2022-11-15","goodsInCompany":"江西省南昌市第一医院","goodsInPrice":""},
  {"goodsInId":573,"goodsInName":"垃圾桶","goodsInType":"医疗器械设备","goodsInTotal":50,"goodsInRemaining":49,"goodsInUnit":"个","goodsInSpecs":"60L","goodsInUsername":"测试","goodsInSource":"测试","goodsInDate":"2022-11-15","goodsInComment":"测试入库","goodsInBatch":"","goodsInExpiryDate":"2022-11-15","goodsInCompany":"江西省南昌市第一医院","goodsInPrice":""},
  {"goodsInId":573,"goodsInName":"垃圾桶","goodsInType":"医疗器械设备","goodsInTotal":50,"goodsInRemaining":49,"goodsInUnit":"个","goodsInSpecs":"60L","goodsInUsername":"测试","goodsInSource":"测试","goodsInDate":"2022-11-15","goodsInComment":"测试入库","goodsInBatch":"","goodsInExpiryDate":"2022-11-15","goodsInCompany":"江西省南昌市第一医院","goodsInPrice":""},
];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    urlPath: "../selectResult/selectResult",
    // goods_inList待展示的列表数据内容
    goods_inList:[],
  },

  // getGoodsInList是用于获取列表数据内容的函数 并将获取到的数据保存到本地缓存
  getGoodsInList:function(){
    // 将全局变量data的数据赋值给goods_inList
    this.setData({
      goods_inList:data
    });
    // 将goods_inList保存到本地缓存
    try{
      wx.setStorageSync('goods_inList', data)
      // console.log('保存数据到缓存成功')
    }catch (e) {
      // console.log('保存数据到缓存发生错误')
    }
  },

  // 获取选中项的信息并保存到本地缓存
  getselectdata(e){
    console.log("e",e);
    // 将选中项的信息保存到本地缓存
    try{
      wx.setStorageSync('selected_goods', e.currentTarget.dataset)
      console.log('保存数据到缓存成功')
    }catch (e) {
      console.log('保存数据到缓存发生错误')
    }
    wx.showToast({
      title: '选中成功',
      icon: 'success',
      duration: 2000,
      success:(res)=>{
        console.log("选中成功");
        // 选中成功后跳转到指定的页面
        // wx.redirectTo({
        //   url: '/pages/chuku/chuku',
        // })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // getGoodsInList是用于获取列表数据内容的函数
    this.getGoodsInList();
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