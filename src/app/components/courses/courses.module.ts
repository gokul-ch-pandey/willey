// Modules 3rd party
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatTabsModule,MatGridListModule,MatExpansionModule,
  MatListModule } from '@angular/material';


// Components
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,MatTabsModule,MatGridListModule,MatExpansionModule,
    MatListModule
  ],
  exports: [
    GridComponent
  ]
})
export class CoursesModule {
}