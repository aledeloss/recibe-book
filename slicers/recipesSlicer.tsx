import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { recipe } from '../types/recipe';

export interface RecipesState {
  value: recipe[];
}

const initialState: RecipesState = {
  value: []
};

export const RecipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    addRecipe: (state, action: PayloadAction<recipe>) => {
      state.value = [...state.value, action.payload];
    },
    setStoredRecipes: (state, action: PayloadAction<recipe[]>) => {
      state.value = action.payload;
    },
    deleteRecipe: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter(
        (recipe) => recipe.id !== action.payload
      );
    },
    deleteAll: (state) => {
      state.value = [];
    }
  }
});

export const { addRecipe, deleteAll, deleteRecipe, setStoredRecipes } =
  RecipesSlice.actions;
export default RecipesSlice.reducer;
