<template>
  <div class="goods-list">
    <goods-item 
			v-for="(item, index) in goodsList" 
			:goods="item" 
			:key="index" >
		</goods-item>
  </div>
</template>

<script>
import goodsItem from '@/components/goodsItem.vue'
import goodsData from '@/dbData/index'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: { goodsItem },
  data() {
    return {
    };
  },
  methods: {
    ...mapActions({
      fetchGoods: 'cart/fetchGoods'
    })
  },
  computed: mapGetters({
    goodsList: 'cart/goodsList'
  }),
  created() {
    this.fetchGoods();
  },
  
}
</script>

<style scoped>
.goods-list {
  min-height: 100vh;
  background: #f7f7f7;
}
</style>