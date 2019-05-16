<template>
  <div class="login-box">
      <div class="nav-top">
        <a>主页</a>
        <span> > </span>
        <span>我的账户</span>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="登录" name="second">
          <div class="login">
              <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                 <el-form-item label="手机" prop="age">
                  <el-input v-model.number="ruleForm.age" placeholder="请输入你登录的手机号"></el-input>
                </el-form-item>
                <el-form-item label="密码"  prop="pass">
                  <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入你登录的密码"></el-input>
                </el-form-item>
                <div class="automatic cleafx">
                    <input type="checkbox">自动登录
                    <a class="fr">忘记密码?</a>
                </div>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </el-form-item>
              </el-form>
          </div>
        </el-tab-pane>
        <el-tab-pane label="注册" name="first">
            <div class="register">
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm" label-width="100px">
                <el-form-item prop="age" label="手机">
                  <el-input v-model.number="ruleForm.age" placeholder="请输入你登录的手机号"></el-input>
                </el-form-item>
                <el-form-item prop="age" label="邮箱">
                  <el-input v-model.number="ruleForm.age" placeholder="请输入你的邮箱"></el-input>
                </el-form-item>
                <el-form-item prop="age" label="验证码">
                  <el-input v-model.number="ruleForm.age" placeholder="请输入验证码" class="el-input-phone"></el-input>
                  <img>
                </el-form-item>
                <el-form-item prop="age" label="短信验证">
                  <el-input v-model.number="ruleForm.age" placeholder="请输入你的手机号" class="el-input-phone"></el-input><a class="a-phone fr">获取验证码</a>
                </el-form-item>
                 <el-form-item prop="age" label="推荐人">
                  <el-input v-model.number="ruleForm.age" placeholder="请输入推荐人的手机号"></el-input>
                </el-form-item>
                <el-form-item  prop="pass"  label="密码">
                  <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入你的密码"></el-input>
                </el-form-item>
                <el-form-item  prop="checkPass" label=" 确认密码" >
                  <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="请输入确认密码"></el-input>
                </el-form-item>
                <div class="automatic cleafx">
                    <input type="checkbox">同意注册协议
                    <a class="fr">注册协议</a>
                </div>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                </el-form-item>
              </el-form>
          </div>
        </el-tab-pane>
      </el-tabs>
  </div>
</template>
<script>
export default {
  data () {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'))
          } else {
            callback()
          }
        }
      }, 1000)
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        age: ''
      },
      activeName: 'second',
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style Scoped>
.nav-top{
  width: 1200px;
  font-size: 14px;
}
.login-box{
  width: 1200px;
  margin: auto;
}
.login{
  width: 403px;
  margin: auto;
}
.el-button{
  width: 303px;
  margin-left: -20px;
}
.el-tabs__nav{
  left: 540px;
}
.automatic{
  font-size: 14px;
  margin-bottom: 20px;
  vertical-align: middle;
  margin-left: 58px;
}
.automatic input{
  vertical-align: middle;
}
.fr{
  float: left;
}
.fr{
  float: right;
}
.cleafx:after{
   clear: both;
   content: " ";
   display:inline-block;
}
.login-box .register{
  width: 403px;
  margin: auto;
}
.el-input-phone{
  width: 70%;
}
.a-phone{
  width: 27%;
  border: 1px soli;
  border-radius: 4px;
  background:#409EFF;
  line-height: 38px;
  display: inline-block;
  text-align: center;
  color: white;
}
/* .el-tabs__item{
  padding: 0 55px;
} */
</style>
