import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeCrudOverviewComponent } from './recipe-crud-overview/recipe-crud-overview.component';
import { RecipeTableComponent } from './recipe-table/recipe-table.component';
import { RecipeInfoComponent } from './recipe-info/recipe-info.component';
import { CropImageComponent } from './crop-image/crop-image.component';
import { RecipeAddComponent } from './recipe-add/recipe-add.component';
import { RecipeUpdateComponent } from './recipe-update/recipe-update.component';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { ImageCropperModule } from 'ngx-image-cropper';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { NotifyComponent } from './notify/notify.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    RecipeCrudOverviewComponent,
    RecipeTableComponent,
    RecipeInfoComponent,
    CropImageComponent,
    RecipeAddComponent,
    RecipeUpdateComponent,
    NotifyComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    ImageCropperModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
  ],
})
export class PresentationModule { }
