<script setup lang='ts'>
    import { useTodoStore } from '@/stores/TodoStore' 
    import CategoryItem from '@/components/CategoryItem.vue';
    const store = useTodoStore()
</script>

<template>
    <div class="categoriesPage__list">
        <CategoryItem
        v-for="category in store.categories" 
        :key="category.id"
        :id="category.id"
        :name="category.name"
        :description="category.description"
        ></CategoryItem>
    </div>
</template>

<style>
    .categoriesPage__list {
    max-width: 1040px;
    margin: 0 auto;
}
</style>