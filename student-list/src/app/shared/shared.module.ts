import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { LayoutContainerComponent } from './ui/layout-container/layout-container.component';
import { MainContentComponent } from './ui/main-content/main-content.component';
import { PulseAnimationDirective } from './feature/pulse-animation.directive';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    LayoutContainerComponent,
    MainContentComponent,
    PulseAnimationDirective,
  ],
  imports: [CommonModule],
  exports: [
    NavbarComponent,
    SidebarComponent,
    LayoutContainerComponent,
    MainContentComponent,
    PulseAnimationDirective,
  ],
})
export class SharedModule {}
