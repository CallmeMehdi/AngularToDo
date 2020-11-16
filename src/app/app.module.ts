import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './components/cv/cv.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { ListitemComponent } from './listitem/listitem.component';
import { RainbowComponent } from './rainbow/rainbow.component';
import { RainbowDirective } from './rainbow/rainbow.directive';
import { TodoComponent } from './todo/todo.component';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListComponent,
    DetailsComponent,
    ListitemComponent,
    RainbowComponent,
    RainbowDirective,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
