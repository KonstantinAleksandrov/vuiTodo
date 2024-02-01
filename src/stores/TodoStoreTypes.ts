export interface ITask {
    id: number;
    name: string;
    description: string;
    categoryId: number;
}

export interface IError {
    isError: boolean;
    errorMessage: string;
}

export interface ICategory {
  id: number;
  name: string;
  description: string;
}


export interface ITodoStore {
  isLoading: boolean;
  isBurgerMenuOpen: boolean;
  error: IError;
  changeBurgerMenuOpen: () => void;
  loadTasks: () => void;
  getTasks: () => ITask[];
  getCategories: () => ICategory[];
  loadAllData: () => Promise<boolean>;
  loadCategories: () => void;
  getCategoryById: (id: number) => ICategory | undefined;
  getLastTaskId: () => number;
  addNewTask: (task: ITask) => Promise<boolean>;
  editTask: (task: ITask) => Promise<boolean>;
  deleteTask: (taskId: number) => Promise<boolean>;
  getLastCategotyId: () => number;
  addNewCategory: (category: ICategory) => Promise<boolean>;
  editCategory: (category: ICategory) => Promise<boolean>;
  deleteCategory: (categoryId: number) => Promise<boolean>;
  changeError: (message: string) => void;
}