import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HighlightTextDirective } from './Directives/HighlightText.directive';
import { RendererHighlightDirective } from './directives/renderer-highlight.directive';
import { AlternetIfDirective } from './Directives/alternateIf.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    AddUserComponent,
    HighlightTextDirective,
    RendererHighlightDirective,
    AlternetIfDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
