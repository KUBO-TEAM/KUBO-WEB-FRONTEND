import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { ContainerComponent } from './components/container/container.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { TypeofPipe } from './pipes/typeof.pipe';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    HeaderComponent,
    ContainerComponent,
    TypeofPipe,
    SnackbarComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    RouterModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressBarModule
  ],
  exports: [
    HeaderComponent,
    ContainerComponent,
    TypeofPipe,
    TruncatePipe
  ]
})
export class SharedModule { }
