import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ApiAuthenticationModule } from './modules/api-authentication/api-authentication.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipeCrudModule } from './modules/recipe-crud/recipe-crud.module';
import { AiModelModule } from './modules/ai-model/ai-model.module';
import { StoreModule } from '@ngrx/store';
import { RecipeRepository } from './modules/recipe-crud/core/repositories/recipe.repository';
import { RecipeRepositoryImpl } from './modules/recipe-crud/data/repository/recipe-repository/recipe-repository-impl';
import { cropImageReducer } from './modules/recipe-crud/presentation/ngrx/crop_image/crop_image.reducer';
import { getAllRecipeReducer } from './modules/recipe-crud/presentation/ngrx/recipe/get-all-recipes/get-all-recipe-reducer';
import { getRecipeReducer } from './modules/recipe-crud/presentation/ngrx/recipe/get-recipe/get-recipe-reducer';
import { detectImageYolov4Reducer } from './modules/ai-model/presentation/ngrx/ai/detect-image-yolov4/detect-image-yolov4-reducer';
import { AiRepository } from './modules/ai-model/core/repositories/ai.repository';
import { AiRepositoryImpl } from './modules/ai-model/data/repository/ai-repository/ai-repository-impl';
import { getLatestYolov4ModelReducer } from './modules/ai-model/presentation/ngrx/ai/get-latest-yolov4-model/get-latest-yolov4-reducer';
import { detectImageYolov4TinyReducer } from './modules/ai-model/presentation/ngrx/ai/detect-image-yolov4-tiny/detect-image-yolov4-tiny-reducer';
import { getLatestYolov4TinyModelReducer } from './modules/ai-model/presentation/ngrx/ai/get-latest-yolov4-tiny-model/get-latest-yolov4-tiny-reducer';
import { NotificationRepository } from './modules/recipe-crud/core/repositories/notification.repository';
import { NotificationRepositoryImpl } from './modules/recipe-crud/data/repository/notification-repository/notification-repository-impl';
import { FeedbacksModule } from './modules/feedbacks/feedbacks.module';
import { GetAllFeedbacksUsecase } from './modules/feedbacks/core/usecases/get-all-feedbacks.usecase';
import { getAllFeedbacksReducer } from './modules/feedbacks/presentation/ngrx/get-all-feedbacks/get-all-feedbacks-reducer';
import { FeedbacksRepository } from './modules/feedbacks/core/repository/feedbacks.repository';
import { FeedbacksRepositoryImpl } from './modules/feedbacks/data/repository/feedbacks-repository-impl';

const reducer:object = {
  cropImageReducer: cropImageReducer,
  getAllRecipeReducer: getAllRecipeReducer,
  getRecipeReducer: getRecipeReducer,
  detectImageYolov4Reducer: detectImageYolov4Reducer,
  detectImageYolov4TinyReducer: detectImageYolov4TinyReducer,
  getLatestYolov4ModelReducer: getLatestYolov4ModelReducer,
  getLatestYolov4TinyModelReducer: getLatestYolov4TinyModelReducer,
  getAllFeedbacksReducer: getAllFeedbacksReducer,
};
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    StoreModule.forRoot(reducer),
    BrowserModule,
    ApiAuthenticationModule,
    RecipeCrudModule,
    AiModelModule,
    RouterModule,
    FeedbacksModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: RecipeRepository, useClass: RecipeRepositoryImpl },
    { provide: AiRepository, useClass: AiRepositoryImpl },
    { provide: NotificationRepository, useClass: NotificationRepositoryImpl },
    { provide: FeedbacksRepository, useClass: FeedbacksRepositoryImpl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
