import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { UIComponent } from '../ui/ui.component';

@NgModule({
  declarations: [HeaderComponent, UIComponent],
  imports: [CommonModule],
})
export class SharedModuleModule {}
