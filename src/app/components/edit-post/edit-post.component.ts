import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { PostServiceService } from 'src/app/services/post-service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  post: any;

  constructor(private _postService: PostServiceService, private router: Router, private activatedRouter: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    let id = this.activatedRouter.snapshot.paramMap.get('id') as string;
    this.getPost(id);
  }

  updatePost() {
    this._postService.updatePost(this.post.id, this.post)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/posts']);
        },
        err => console.error(err)
      )
  }

  getPost(id:string): void{
    this._postService.getPost(id).subscribe(
      (data:Post) => {
        this.post = data;
        console.log(data);
      }
    )
  }
}
