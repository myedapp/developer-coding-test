import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { QuestComponent } from './quest/quest.component';

import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    { path: '', component: UserComponent, pathMatch: 'full' },
    { path: 'quests', component: QuestComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    QuestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
