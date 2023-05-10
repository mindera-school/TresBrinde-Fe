import { CategoryListReducer, CategoryCreateReducer, DeleteCategoryReducer, CategoryDetailsReducer, UpdateCategoryReducer } from './categoryReducer';
import { combineReducers } from "redux";
import { LoginReducer, RegisterReducer } from "./authReducer";
import { ProductsListReducer, ProductCreateReducer, ProductDetailsReducer } from './productReducer';
import { cartReducer } from './cartReducer';
import { SubCategoryDetailsReducer } from './subCategoryReducer';
import { BudgetCreateReducer, BudgetListReducer } from './budgetReducer';
const reducer = combineReducers({
     userInfo: LoginReducer,
     register: RegisterReducer,
     cart: cartReducer,
     budgetList: BudgetListReducer,
     createBudget: BudgetCreateReducer,
     subCategoryDetails: SubCategoryDetailsReducer,
     categoryList: CategoryListReducer,
     categoryCreate: CategoryCreateReducer,
     categoryDelete: DeleteCategoryReducer,
     categoryDetails: CategoryDetailsReducer,
     categoryUpdate: UpdateCategoryReducer,
     productList: ProductsListReducer,
     productCreate: ProductCreateReducer,
     productDetails: ProductDetailsReducer,
});

export default reducer;