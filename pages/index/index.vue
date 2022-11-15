<template>
  <view>
    <view style="background-image: linear-gradient(#0AB0F6,#1D74DF);width: 100%;height:100vh;">
      <view style="display: flex;width: 100%;height: 170rpx;background-image: linear-gradient(#0BADF5,#1D74E0);font-size: 50rpx;color: #FFFFFF;align-items: center;justify-content: space-between;">
        <view style="margin-left: 30rpx;">LOGO</view>
        <view style="margin-right: 30rpx;">长春长客</view>
      </view>
      <view style="display:flex;justify-content: center;margin-top: 20rpx;">
        <view style="width: 95%;background-color: #FFFFFF;height: calc(95vh - 70px);border-radius: 20rpx;">
          <view class="toolContent">
            <view style="width: 95%;background-color: #2092F0;height: 90rpx;border-radius: 10rpx;display: flex;align-items: center;margin-top: 20rpx;">
              <!--              <view style="margin-left: 10rpx;" @click="getback">-->
              <!--                <uni-icons type="back" size="30" color="white"></uni-icons>-->
              <!--              </view>-->
              <view style="color: #FFFFFF;font-size: 38rpx;width:100%;display: flex;justify-content: center;">工具查询-主页</view>
            </view>
          </view>
          <view class="toolContent">
            <view style="width: 95%;display: flex;flex-wrap: wrap;">
              <input style="width: 45%;" class="toolInput" placeholder="工具编号" />
              <input style="width: 50%;margin-left: 20rpx;" class="toolInput" placeholder="工具名称" />
              <input style="width: 45%;" class="toolInput" placeholder="规格型号" />
              <input style="width: 50%;margin-left: 20rpx;" class="toolInput" placeholder="货位" />
              <button style="width: 25%;background-color: #2092F0;color: #FFFFFF;margin-top: 20rpx;" size="mini">查询</button>
              <button style="width: 25%;background-color: red;color: #FFFFFF;margin-top: 20rpx;" size="mini">重置</button>
            </view>
          </view>
          <view class="toolContent">
            <view class="uni-container" style="width: 95%;margin-top: 20rpx;">
              <uni-table style="height: auto;min-height: 55vh;border: 1px #ebeef5 solid;border-radius: 10rpx;" ref="table" :loading="loading" border stripe emptyText="暂无更多数据">
                <uni-tr>
                  <uni-th align="center">设备号</uni-th>
                  <uni-th align="center">设备名称</uni-th>
                  <uni-th align="center">工具名称</uni-th>
                  <uni-th align="center">规格型号</uni-th>
                  <uni-th align="center">数量</uni-th>
                  <uni-th align="center">库位</uni-th>
                  <uni-th align="center">状态</uni-th>
                </uni-tr>
                <uni-tr v-for="item in tableData" :key="item.id">
                  <uni-td align="center">{{ item.deviceId }}</uni-td>
                  <uni-td>
                    <view class="name" align="center">{{ item.deviceName }}</view>
                  </uni-td>
                  <uni-td align="center">{{ item.address }}</uni-td>
                  <uni-td align="center">{{ item.partDes }}</uni-td>
                  <uni-td align="center">{{ item.num }}</uni-td>
                  <uni-td align="center">{{ item.location }}</uni-td>
                  <uni-td align="center">{{ item.status }}</uni-td>
                </uni-tr>
              </uni-table>
              <view class="uni-pagination-box"><uni-pagination :page-size="pageSize" :current="pageCurrent" :total="total" @change="change" /></view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import {defineComponent,ref} from 'vue'
import {baseUrl} from '../../config/index'
import to from 'await-to-js'
import {uniShowToast} from "../../hook/hook";
export default defineComponent({
  setup() {
    const loading = ref(true)
    const tableData = ref([])
    const pageSize = ref(10)
    const pageCurrent = ref(1)
    const total = ref(0)
    const getback = ()=>{
      uni.navigateBack({
      });
    }
    const getTableData = async () =>{
      const [err, res]  = await to(uni.request({
        url: `${baseUrl}tc/tool/select`,
        data: {
          pageSize:pageSize.value,
          curPageNo:pageCurrent.value
        },
        method:'POST',
      }))
      if(err) uniShowToast('none',`${err}`)
      tableData.value = res.data.data
      total.value = res.data.total
      loading.value = false
    }
    getTableData()
    const change = async(e) =>{
      pageCurrent.value = e.current
      await getTableData()
    }
    return {
      getback,
      loading,
      tableData,
      pageSize,
      pageCurrent,
      total,
      change
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
.toolContent{
  display: flex;
  justify-content: center;
}
.toolInput{
  border:1px solid #DDDDDD;
  border-radius: 5rpx;
  height: 60rpx;
  margin-top: 25rpx;
}
.uni-pagination-box{
  margin-top: 20rpx;
}
</style>

