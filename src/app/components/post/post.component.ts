import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { PostServiceService } from 'src/app/services/post-service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  listPost: any;

  constructor(private _postServices: PostServiceService) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(){
    this._postServices.getAllPosts().subscribe(
        data =>{
        this.listPost = data;
        console.log(data);
      }
    )
  }

}
