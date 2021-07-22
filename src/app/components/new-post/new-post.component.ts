import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Post } from 'src/app/model/post';
import { PostServiceService } from 'src/app/services/post-service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  post: Post = {id:0, title: '', author:'', content:''}

  constructor(private _postServices: PostServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  createNewPost() {
    this._postServices.createPost(this.post)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/posts']);
        },
        err => console.error(err)
      )
  }
}
