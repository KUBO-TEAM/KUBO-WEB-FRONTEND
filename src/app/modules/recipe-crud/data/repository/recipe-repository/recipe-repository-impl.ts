import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { response } from "express";
import {  map, mergeMap, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { RecipeModel } from "../../../core/domain/recipe.model";
import { RecipeRepository } from "../../../core/repositories/recipe.repository";
import { RecipeEntity } from "./recipe-entity";
import { RecipeRepositoryMapper } from "./recipe-repository-mapper";

@Injectable({
  providedIn: 'root'
})
export class RecipeRepositoryImpl extends RecipeRepository{

  mapper = new RecipeRepositoryMapper();

  constructor(
    private http: HttpClient
  ){
    super();
  }

  getAllRecipes(): Observable<RecipeModel> {
    return this.http.get<{message: string, data: RecipeEntity[]}>(environment.url + 'api/recipe/all')
      .pipe(mergeMap((item) => {
        console.log(item.message);

        return item.data
      }))
      .pipe(map(this.mapper.mapFrom));
  }

}
