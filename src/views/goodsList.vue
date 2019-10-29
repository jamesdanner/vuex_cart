<template>
  <div class="goods-list">
    <goods-item 
			v-for="(item, index) in goodsList" 
			:goods="item" 
			:key="index" >
		</goods-item>
    1
  </div>
</template>

<script>
import goodsItem from '@/components/goodsItem.vue'
import goodsData from '@/dbData/index'

export default {
  components: { goodsItem },
  data() {
    return {
      goodsList: goodsData,
    };
  }
}
</script>

<style scoped>
.goods-list {
  min-height: 100vh;
  background: #f7f7f7;
}
</style>