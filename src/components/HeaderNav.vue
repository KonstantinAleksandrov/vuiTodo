<script setup lang='ts'>
    
</script>

<template>
    <el-menu
    mode="horizontal"
    :ellipsis="false"
    class="nav__menu"
    background-color="#3F72AF"
    text-color="#DBE2EF"
    active-text-color="#8FB6FF"
    :router="true"
    :default-active="$route.path"
    >
        <el-menu-item 
        style="--el-menu-hover-bg-color: #3F72AF"
        index="/" 
        class="el-menu-item nav__menu-item" 
        >
            Задачи
        </el-menu-item>
        <div class="" style="font-size: 32px;color: white; margin: 0 5px;">|</div>
        <el-menu-item 
        index="/categories" 
        class="el-menu-item nav__menu-item"  
        style="--el-menu-hover-bg-color: #3F72AF"
        >
            Категории
        </el-menu-item>
    </el-menu>
</template>

<style>
    .el-menu--horizontal.nav__menu {
        height: auto;
    }

    .el-menu--horizontal.el-menu.nav__menu {
        border-bottom: none;
    }

    .el-menu-item.nav__menu-item {
        padding: 5px;
        line-height: normal;
        font-size: 24px;
    }
</style>