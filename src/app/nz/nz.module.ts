import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';

const NzComponents: any = [
  NzButtonModule,
  NzInputModule,
  NzInputNumberModule,
  NzSelectModule,
  NzFormModule,
];

@NgModule({
  declarations: [],
  imports: [NzComponents],
  exports: [NzComponents],
})
export class NzModule {}
