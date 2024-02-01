<script setup lang='ts'>
    defineProps({
        id: Number,
        name: String,
        description: String,
    })
</script>

<template>
    <li className='category'>
      <div className='category__header'>
        <div className='category__header-title'>{{ name }}</div>
        <div className='category__header-buttons category__buttons'>
          <!-- <OpenModalWindowEditCategoryBtn openModalHandler={openEditModal} />
          <OpenModalWindowDeleteСategoryBtn openModalHandler={openDeleteModal} /> -->
        </div>
      </div>
      <div className='category__description'>{{ description }}</div>
      <!-- {openModal.editModal && (
        <ModalWindow openModalHandler={openEditModal}>
          <EditCategoryForm categoryData={category} openModalHandler={openEditModal} />
        </ModalWindow>
      )}
      {openModal.deleteModal && (
        <ModalWindow openModalHandler={openDeleteModal}>
          <DeleteCategoryForm categoryName={name} categoryId={id} openModalHandler={openDeleteModal} />
        </ModalWindow>
      )} -->
    </li>
</template>

<style scoped>
    .category {
    padding: 16px;
    border-bottom: 2px solid #3F72AF;
}
.category__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 40px;
    margin-bottom: 12px;
}

.category__header-title {
    font-weight: 600;
    line-height: 20px;
    font-size: 18px;
    color: black;
}

.category__description {
    line-height: 20px;
}

.category__buttons {
    display: flex;
    align-items: center;
    gap: 12px;
}
</style>