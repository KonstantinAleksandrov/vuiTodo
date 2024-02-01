<script setup lang='ts'>
import { ITask } from '@/stores/TodoStoreTypes';
import { useTodoStore } from '@/stores/TodoStore' 
const store = useTodoStore()
    const { categoryId, name, description } = defineProps<ITask>(/* {
        id: {type: Number, required: true},
        name: {type: String, required: true},
        categoryId: {type: Number, required: true},
        description:  {type: String, required: true}
    } */)

    const category = store.getCategoryById(categoryId)
</script>

<template>
    <li className='task'>
      <div className='task__header'>
        <div className='task__header-title task__title'>
          <div className='task__title-taskName'>{{ name }}</div>
          <div v-if="category" className='task__title-categoryName'>{{ category.name }}</div>
        </div>
        <div className='task__header-buttons task__buttons'>
          <!-- <OpenModalWindowEditTaskBtn openModalHandler={openEditModal} />
          <OpenModalWindowDeleteTaskBtn openModalHandler={openDeleteModal} /> -->
        </div>
      </div>
      <div className='task__description'>{{ description }}</div>
    </li>
</template>

<style>
    .task {
    padding: 16px;
    border-bottom: 2px solid #3F72AF;
}
.task__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 40px;
    margin-bottom: 12px;
}

.task__title {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
}

.task__title-taskName {
    font-weight: 600;
    line-height: 20px;
    color: black;
    font-family: Roboto;
    font-size: 18px;

}

.task__title-categoryName {
    color: #3F72AF;
    display: flex;
    align-items: center;
    gap: 4px;
}

.task__title-categoryName::before {
    content: url('@/images/icons/folderIcon.svg');
    width: 24px;
    height: 18px;
}

.task__description {
    line-height: 20px;
}

.task__buttons {
    display: flex;
    align-items: center;
    gap: 12px;
}

</style>