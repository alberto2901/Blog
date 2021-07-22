import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { PostComponent } from './components/post/post.component';
import { ResultPostComponent } from './components/result-post/result-post.component';

const routes: Routes = [
  { path: '', component: PostComponent },
  { path: 'posts', component: PostComponent },
  { path: 'posts/new', component: NewPostComponent},
  { path: 'posts/:id', component: ResultPostComponent},
  { path: 'posts/edit/:id', component: EditPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
