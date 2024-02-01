<script setup lang='ts'>
    import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

interface RuleForm {
  name: string,
  desc: string
}

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  name: 'Введите имя задачи',
  desc: 'Введите описание задачи',
})

const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: 'Название задачи обязательно', trigger: 'blur' },
    { min: 3, max: 50, message: 'Length should be 3 to 5', trigger: 'blur' },
  ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

</script>

<template>
    <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    :size="formSize"
    status-icon
  >
    <el-form-item label="Имя" prop="name">
      <el-input v-model="ruleForm.name" />
    </el-form-item>
    <el-form-item label="Activity zone" prop="region">
      <el-select v-model="ruleForm.region" placeholder="Activity zone">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="Описание" >
      <el-input v-model="ruleForm.desc" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button @click="resetForm(ruleFormRef)">Закрыть</el-button>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        Создать
      </el-button>
    </el-form-item>
  </el-form>
</template>

<style>
    
</style>