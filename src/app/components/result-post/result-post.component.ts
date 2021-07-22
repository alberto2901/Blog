import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { PostServiceService } from 'src/app/services/post-service';

@Component({
  selector: 'app-result-post',
  templateUrl: './result-post.component.html',
  styleUrls: ['./result-post.component.css']
})
export class ResultPostComponent implements OnInit {

  post: Post = {id:0, title:'', author:'', content:''}
  error: boolean;

  constructor(
    private _postServices: PostServiceService, 
    private _route: ActivatedRoute) {
      this.error = true;
    }

  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get('id') as string;
    this.getPost(id);
  }

  getPost(id: string): void{
    this._postServices.getPost(id).subscribe(
      (data:Post) => {
        this.error = false;
        this.post = data;
        console.log(data);
      }
    )
  }

  deletePost(id: number){
    this._postServices.deletePost(id)
    .subscribe(
      res=> {
        console.log(res);
      }
    )
  }


}
