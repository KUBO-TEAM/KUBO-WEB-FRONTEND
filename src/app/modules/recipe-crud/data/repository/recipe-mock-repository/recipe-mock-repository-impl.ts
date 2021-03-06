import { Injectable } from "@angular/core";
import { filter, from, map, mergeMap, Observable } from "rxjs";
import { RecipeModel } from "../../../core/domain/recipe.model";
import { RecipeRepository } from "../../../core/repositories/recipe.repository";
import { RecipeMockRepositoryMapper } from "./recipe-mock-repository-mapper";

@Injectable({
  providedIn: 'root'
})
export class RecipeMockRepositoryImpl extends RecipeRepository{
  updateRecipe(params: { form: FormData; _id: string; }): Observable<{ message: string; }> {
    throw new Error("Method not implemented.");
  }
  private mapper = new RecipeMockRepositoryMapper();

  constructor(){
    super();
  }

  remoteMockData = {
    message : 'Successfully Fetch',
    data : [
      {
        '_id': '1',
        'name': 'Adobong Manok',
        'description': 'Masarap Ito',
        'reference': 'Panlasang Pinoy',
        'ingredients': ['Kamatis', 'Sibuyas']
      },
    ]
  }

  addRecipe(recipeFormData: FormData): Observable<{ message: string; }> {
    throw new Error("Method not implemented.");
  }

  deleteRecipe(_id: string): Observable<{ message: string; }> {
    throw new Error("Method not implemented.");
  }


  getAllRecipes(): Observable<RecipeModel> {
    return from(this.remoteMockData.data)
      .pipe(map(this.mapper.mapFrom));
  }

  getRecipe(_id: string): Observable<RecipeModel> {
    return from(this.remoteMockData.data)
      .pipe(filter((item)=> item._id == _id))
      .pipe(map(this.mapper.mapFrom));
  }



}
