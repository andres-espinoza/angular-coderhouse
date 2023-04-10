import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainContainerComponent } from './main-container/main-container.component';
import { StudentsModule } from './students/students.module';

@NgModule({
  declarations: [AppComponent, MainContainerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StudentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
