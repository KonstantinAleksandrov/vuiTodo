<script setup lang='ts'>
    import HeaderNav from '@/components/HeaderNav.vue';
    import { ref, Ref } from 'vue'
    import CreateTaskForm from '@/components/Forms/CreateTaskForm.vue'

    const toggleModal:Ref<boolean> = ref(true)
</script>

<template>
    <div class="header">
        <div class="header__title">ToDo list</div>
        <HeaderNav></HeaderNav>
        <div style="flex: 1 1 auto"></div>
        <el-button
        v-if="$route.path === '/categories'"
        :dark="true"
        class="header__addNewCategory-btn"
        color="white"
        type='info'
        >Добавить категорию</el-button>
        <el-button
        v-else
        :dark="true"
        class="header__addNewTask-btn"
        color="#3F72AF"
        type='info'
        >Добавить задачу
        </el-button>
        <el-dialog
        v-model="toggleModal" 
        align-center 
        width="35%">
            <CreateTaskForm/>
        </el-dialog>
    </div>
</template>

<style>
    .header {
    height: 88px;
    width: 100%;
    padding: 0 24px;
    display: flex;
    align-items: center;
    gap: 65px;
    background-color:  #3F72AF;
    box-shadow: 0px 4px 8px 0px #00000080;
    }

    .header__title {
        flex: 0 0 156px;
        font-size: 36px;
        font-weight: 400;
        color: white;
        z-index: 2;
        position: relative;
    }

    .el-button.el-button--info.header__addNewCategory-btn {
        font-size: 20px;
    }

    .el-button.el-button--info.header__addNewTask-btn {
        font-size: 20px;
    }

</style>