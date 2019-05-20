<template>
  <div class="address-box">
     <div class="address">
        <div class="Management">
          <span>管理你的收货地址</span>
          <!-- <a class="fr">添加地址</a> -->
        </div>
        <div class="ReceivingAddress">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="收货人" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="所在区域" >
              <select>
                <option>请选择</option>
                <option>请选择5</option>
              </select>
              <select>
                <option>请选择</option>
                <option>请选择4</option>
              </select>
              <select>
                <option>请选择</option>
                <option>请选择1</option>
              </select>
            </el-form-item>
            <el-form-item prop="name" label="详细地址">
              <el-input v-model.number="ruleForm.age" placeholder="请输入你的详细地址"></el-input>
            </el-form-item>
            <el-form-item prop="name" label="邮政编码">
              <el-input v-model.number="ruleForm.age" placeholder="请输入你的邮政编码"></el-input>
            </el-form-item>
            <el-form-item prop="name" label="手机号">
              <el-input v-model.number="ruleForm.age" placeholder="请输入你的手机号"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="name">
              <select class="select">
                <option>男</option>
                <option>女</option>
              </select>
            </el-form-item>
            <el-form-item label="生日" required>
              <el-col :span="11">
                <el-form-item prop="date1">
                  <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item prop="name" label="邮政编码">
              <el-input v-model.number="ruleForm.age" placeholder="请输入你的邮政编码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')" class="fl">保存地址</el-button>
              <el-button type="primary" @click="submitForm('ruleForm')" class="fl">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
     </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      ruleForm: {
        name: '',
        date1: '',
        delivery: false,
        type: []
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
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
<style scoped>
.address-box{
  width: 1000px;
   margin:0 auto;
}
.address{
  border: 1px solid #cccccc;
}
.Management{
  width: 900px;
  border-bottom:1px solid #cccccc;
  font-size: 14px;
  height: 30px;
  margin:20px auto;
}
.Management a,span{
  display:inline-block;
  line-height: 30px;
}
.fr{
  float: right;
}
.fl{
  float: left;
}
.Management span{
  font-weight: bold;
}
.Management a{
  width: 120px;
  /* color: #df5451; */
  background:#df5451;
  color: white;
  text-align: center
}
.Management a:hover{
  background: #d72a28;
}
.ReceivingAddress{
  width: 400px;
  margin: auto;
  margin-top: 26px;
}
.el-button{
  height: 36px;
  padding: 0;
  line-height: 36px;
  text-align: center;
  width: 80px;
  margin-left: 20px;
}
select{
  width: 90px;
  height: 40px;
  font-size: 14px;
  color: #DCDFE6;
  border-radius: 4px;
  border: 1px solid #DCDFE6;
  margin-left: 10px;
}
select:first-child{
   margin-left: 0;
}
.select{
  width: 300px;
}
.el-form-item__content{
  width: 300px;
}
</style>
