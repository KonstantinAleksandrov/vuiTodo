import { defineStore } from 'pinia'
import { inject, ref, Ref } from 'vue'
import { ICategory, IError, ITask } from './TodoStoreTypes';
import { dataService } from '@/services/dataService';

export const useTodoStore = defineStore('todoStore', () => {
    const tasks: Ref<ITask[]> = ref([]) ;
    const categories: Ref<ICategory[]> = ref([]);
    const isLoading: Ref<boolean> = ref(false);
    const isBurgerMenuOpen: Ref<boolean> = ref(false);
    /* const error: Ref<IError> = {
        isError: false,
        errorMessage: '',
    }; */


const loadTasks = async () => {
    try {
       /*  changeLoading(); */
        const tasksResult = await dataService.getTasks<ITask[]>();
        tasks.value = tasksResult;
        /* this.changeLoading(); */
        return true;
    } catch (error: any) {
       /*  changeError(error.message);
        changeLoading(); */
        return false;
    }
};

const loadCategories = async () => {
    try {
       /*  this.changeLoading(); */
        const categoriesResult = await dataService.getCategories<ICategory[]>();
        categories.value = categoriesResult;
        /* this.changeLoading(); */
        return true;
    } catch (error: any) {
        /* this.changeError(error.message);
        this.changeLoading(); */
        return false;
    }
};

const loadAllData = async () => {
    try {
        /* this.changeLoading(); */
        const data = await dataService.getAllData<ITask[], ICategory[]>();
        tasks.value = data.tasks;
        categories.value = data.categories;
        /* changeLoading(); */
        return true;
    } catch (error: any) {
        /* this.changeError(error.message);
        this.changeLoading(); */
        return false;
    }
};

// addNewTask = async (task: ITask) => {
//     try {
//         this.changeLoading();
//         await dataService.addNewTask<ITask>(task);
//         this.changeLoading();
//         await this.loadTasks();
//         return true;
//     } catch (error: any) {
//         this.changeError(error.message);
//         this.changeLoading();
//         return false;
//     }
// };

// editTask = async (task: ITask) => {
//     try {
//         this.changeLoading();
//         await dataService.editTask<ITask>(task);
//         this.changeLoading();
//         await this.loadTasks();
//         return true;
//     } catch (error: any) {
//         this.changeError(error.message);
//         this.changeLoading();
//         return false;
//     }
// };

// deleteTask = async (taskId: number) => {
//     try {
//         this.changeLoading();
//         await dataService.deleteTask<number>(taskId);
//         this.changeLoading();
//         await this.loadTasks();
//         return true;
//     } catch (error: any) {
//         this.changeError(error.message);
//         this.changeLoading();
//         return false;
//     }
// };

// addNewCategory = async (category: ICategory) => {
//     try {
//         this.changeLoading();
//         await dataService.addNewCategory<ICategory>(category);
//         this.changeLoading();
//         await this.loadCategories();
//         return true;
//     } catch (error: any) {
//         this.changeError(error.message);
//         this.changeLoading();
//         return false;
//     }
// };

// editCategory = async (category: ICategory) => {
//     try {
//         this.changeLoading();
//         await dataService.editCategory<ICategory>(category);
//         this.changeLoading();
//         await this.loadCategories();
//         return true;
//     } catch (error: any) {
//         this.changeError(error.message);
//         this.changeLoading();
//         return false;
//     }
// };

// deleteCategory = async (categoryId: number) => {
//     try {
//         this.changeLoading();
//         await dataService.deleteCategory<number>(categoryId);
//         this.changeLoading();
//         await this.loadCategories();
//         return true;
//     } catch (error: any) {
//         this.changeError(error.message);
//         this.changeLoading();
//         return false;
//     }
// };


// getLastTaskId = () => {
//     return this.tasks[this.tasks.length - 1].id + 1;
// };

// getLastCategotyId = () => {
//     return this.categories[this.categories.length - 1].id + 1;
// };

// getCategories = () => {
//     return this.categories;
// };

const getCategoryById = (id: number): ICategory | undefined => {
    return categories.value.find((category) => category.id === id);
};

// changeLoading = () => {
//     this.isLoading = !this.isLoading;
// };

// changeBurgerMenuOpen = () => {
//     this.isBurgerMenuOpen = !this.isBurgerMenuOpen;
// };

// changeError = (message: string) => {
//     this.error.isError = !this.error.isError;
//     this.error.errorMessage = message;
// };

return { tasks, categories, loadAllData, getCategoryById }
})

