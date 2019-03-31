<template>
  <div>
    <header-top></header-top>

    

    <footer-bottom></footer-bottom>
  </div>
</template>

<script>
import headerTop from "@/components/headerTop.vue";
import footerBottom from "@/components/footerBottom.vue";
import {mapState, mapActions} from 'vuex'

export default {
  data() {
    return {
      //userInfo: this.$store.state.userInfo,
    };
  },
  components: {
    'header-top': headerTop,
    'footer-bottom': footerBottom,
  },
  mounted() {
    // initData
    if(this.userInfo.id==''){
      this.$message({ type: 'warning', message: '未登录，请重新登录！' });
      //this.$router.push('login');
      this.$router.push({ name: 'login', params: { r: Math.random() }});
    }else{
      this.getUserInfo({id:1});
      this.crossDomain();
    }    
  },
  computed: {
    ...mapState(['userInfo']),
  },
  methods: {
    ...mapActions(['getUserInfo', 'crossDomain']),
  },
  watch: {
			userInfo: function (newValue){
				if (newValue.id=='') {
					this.$message({ type: 'warning', message: '请重新登录！' });
					this.$router.push('login');
				}
			}
		}
};
</script>

<style lang="sass">

</style>
