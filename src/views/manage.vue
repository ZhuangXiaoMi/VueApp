<template>
    <div class="manage_page">
        <el-row style="height:100%;">
            <el-col :span="4" style="height:100%;">
                <el-menu :default-active="defaultActive" background-color="#545c64" text-color="#fff" style="height:100%;" router>
                    <el-menu-item index="manage"><i class="el-icon-menu"></i>首页</el-menu-item>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-document"></i>用户管理</template>
						<el-menu-item index="userList">用户列表</el-menu-item>
						<el-menu-item index="organizationList">机构列表</el-menu-item>
						<el-menu-item index="roleList">角色列表</el-menu-item>
						<el-menu-item index="logList">日志列表</el-menu-item>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-setting"></i>设置</template>
						<el-menu-item index="info">个人信息修改</el-menu-item>
						<el-menu-item index="feedbackList">反馈列表</el-menu-item>
					</el-submenu>
                    <el-submenu index="4">
                        <template slot="title"><i class="el-icon-warning"></i>关于</template>
                        <el-menu-item index="about">说明</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-col>
            <el-col :span="20">
                <keep-alive>
				    <router-view></router-view>
				</keep-alive>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    computed: {
        defaultActive: function(){
            return this.$route.path.replace('/', '');
        }
    },
}
</script>

<style lang="scss">
.manage_page{
    width: 100%;
    height: 100%;
}
</style>
