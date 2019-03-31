<template>
  <div class="login_page">
    <transition name="form-fade" mode="in-out">
      <section class="form_contianer">
        <div class="title">XXX系统</div>
        <el-form :inline="true" :model="loginForm" ref="loginForm" :rules="rules">
          <el-form-item label="账号：" prop="username">
            <el-input v-model="loginForm.username" placeholder="请输入账号" autocomplete="off"></el-input>                    
          </el-form-item>
          <el-form-item label="密码：" prop="password">
            <el-input v-model="loginForm.password" placeholder="请输入密码" type="password" autocomplete="off"></el-input>
          </el-form-item>
					<el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')" class="btn_login">登陆</el-button>
          </el-form-item>
        </el-form>
      </section>
    </transition>
  </div>  
</template>

<script>
import {mapState, mapActions} from 'vuex'
import {login} from '@/api/getData'

export default {
  data() {
    return {
        loginForm:{ username:'admins', password:'123456', },
        rules:{
            username: [{ required: true, message: '请输入用户名', trigger: 'blur' }]
            , password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
        }
    };
  },
  created() {    
    if (this.userInfo.id!='') {
      this.$message({ type: 'success', message: '检测到你已登录，正在跳转...' });
      //this.$router.push('manage');
      this.$router.push({ name: 'manage', params: { r: Math.random() }});
    }
  },
  computed: {
    ...mapState(['userInfo']),
  },
  methods: {
    ...mapActions(['getUserInfo']),
    async submitForm(formName) {
      let _this=this;
				_this.$refs[formName].validate(async (valid) => {
					if (valid) {
            const res = login(_this.loginForm.username, _this.loginForm.password)
            res.then(function (response) {
                  if (response.status == 1) {
                    _this.userInfo.id=response.data.Data.id;
                    _this.userInfo.name=response.data.Data.name;
                    _this.$message({ type: 'success', message: '登录成功' });
                    _this.$router.push({ name: 'manage', params: { r: Math.random() }});
                  }else{
                    _this.$message({ type: 'error', message: response.message });
                  }
                })
               .catch(function (error) {
                  _this.$message({ type: 'error', message: error.message });
                });						
					} else {
						_this.$notify.error({ title: '错误', message: '请输入正确的用户名密码', offset: 100 });
						return false;
					}
				});
			},
  }
};
</script>

<style lang="scss">
@import '../style/mixin.scss';

.login_page{
  width: 100%;
  height: 100%;
  background-color: #324057;
}
.form_contianer{
  width:320px;
  height:170px;
  background-color: #FFF;
  margin:0 auto;
  position: relative;
  top: 30%;
  padding: 25px;
  border-radius:8px;
  input[type]{
    width: 240px;
  }
}
.title{
  width:320px;
  position: absolute;
  top: -50px;
  font-size: 28px;
  text-align: center;
  color: #FFF;
}
.btn_login{
  width: 250px;
  margin-left:33px !important;
}
</style>
