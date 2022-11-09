<template>
  <view>
    <view style="background-image: linear-gradient(#0AB0F6,#1D74DF);width: 100%;position: relative;height: 100vh;">
      <view style="display: flex;width: 100%;height: 170rpx;background-image: linear-gradient(#0BADF5,#1D74E0);font-size: 50rpx;color: #FFFFFF;align-items: center;justify-content: space-between;">
        <view style="margin-left: 30rpx;">LOGO</view>
        <view style="margin-right: 30rpx;">长春长客</view>
      </view>
      <view style="display: flex;width: 100%;flex-wrap: wrap;padding-top: 10%;">
        <view class="iconImg" @click="getTool">
          <view class="iconChildren">
            <uni-icons type="folder-add" size="50" color="#19AD8D"></uni-icons>
          </view>
          <view class="textContent">工具查询</view>
        </view>
        <view class="iconImg">
          <view class="iconChildren">
            <uni-icons type="folder-add" size="50" color="#19AD8D"></uni-icons>
          </view>
          <view class="textContent">套装查询</view>
        </view>
        <view class="iconImg">
          <view class="iconChildren">
            <uni-icons type="folder-add" size="50" color="#19AD8D"></uni-icons>
          </view>
          <view class="textContent">记录查询</view>
        </view>
        <view class="iconImg">
          <view class="iconChildren">
            <uni-icons type="folder-add" size="50" color="#19AD8D"></uni-icons>
          </view>
          <view class="textContent">操作指南</view>
        </view>
        <view class="iconImg">
          <view class="iconChildren">
            <uni-icons type="folder-add" size="50" color="#19AD8D"></uni-icons>
          </view>
          <view class="textContent">工具反馈</view>
        </view>
      </view>
      <view style="display: flex;position: absolute;bottom: 2%;width: 100%;">
        <view style="margin-left: 30rpx;color: #FFFFFF;">用户名：admin</view>
        <view style="margin-left: 140rpx;color: #FFFFFF;">2022年12月7日 09:09:09</view>
      </view>
    </view>

  </view>

</template>

<script >
import {defineComponent} from 'vue'
import {uniNavigateTo} from "../../hook/hook";

export default defineComponent({
  setup() {
    const getTool = () =>{
      uniNavigateTo('../../subpackageTool/tool/index')
    }
    return {
      getTool
    }
  }
})
</script>

<style scoped lang="less">
.iconImg{
  width: 150rpx;
  height: 150rpx;
  background-color: #FFFFFF;
  border-radius: 50%;
  margin-left: 10%;
  margin-top: 20%;
  .iconChildren{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
}

.textContent{
  margin-top: 30rpx;
  font-weight: 400;
  font-size: 34rpx;
  color: #FFFFFF;
}



</style>

