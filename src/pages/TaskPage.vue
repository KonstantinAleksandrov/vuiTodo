<script setup lang='ts'>
    import { useTodoStore } from '@/stores/TodoStore' 
    import TaskItem from '@/components/TaskItem.vue';

    const store = useTodoStore()
</script>

<template>
    <div class="tasksPage__list">
        <TaskItem
        v-for="task in store.tasks" 
        :key="task.id"
        :id="task.id"
        :name="task.name"
        :description="task.description"
        :categoryId="task.categoryId"
        ></TaskItem>
    </div>
</template>

<style scoped>
    .tasksPage__list {
    max-width: 1040px;
    margin: 0 auto;
}
</style>