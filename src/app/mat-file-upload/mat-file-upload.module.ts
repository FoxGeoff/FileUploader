import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFileUploadRoutingModule } from './mat-file-upload-routing.module';
import { FileUploadComponent } from './file-upload/file-upload.component';

@NgModule({
  declarations: [FileUploadComponent],
  imports: [
    CommonModule,
    MatFileUploadRoutingModule
  ]
})
export class MatFileUploadModule { }
