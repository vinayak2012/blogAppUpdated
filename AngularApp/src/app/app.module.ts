import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddArticleComponent } from './add-article/add-article.component';
import { HomeComponent } from './home/home.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { RouterModule } from '@angular/router';
import { ShowArticleComponent } from './show-article/show-article.component';

@NgModule({
  declarations: [
    AppComponent,
    AddArticleComponent,
    HomeComponent,
    EditArticleComponent,
    ShowArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'addarticle', component: AddArticleComponent },
      { path: 'editarticle/:id', component: EditArticleComponent },
      { path: 'showarticle/:id', component: ShowArticleComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
