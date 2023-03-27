import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/ui/navbar/navbar.component';
import { SidebarComponent } from './shared/ui/sidebar/sidebar.component';
import { LayoutContainerComponent } from './shared/ui/layout-container/layout-container.component';
import { MainContentComponent } from './shared/ui/main-content/main-content.component';
import { StudentModule } from './student/student.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    LayoutContainerComponent,
    MainContentComponent,
  ],
  imports: [BrowserModule, StudentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
