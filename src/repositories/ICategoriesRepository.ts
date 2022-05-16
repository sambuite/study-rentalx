import { Category } from "../model/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName: (name: string) => Category;
  index: () => Category[];
  create: (data: ICreateCategoryDTO) => void;
}

export { ICreateCategoryDTO, ICategoriesRepository };
