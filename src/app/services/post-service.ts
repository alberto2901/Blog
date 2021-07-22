import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http: HttpClient) { }

  url="http://localhost:3000"

  getAllPosts(){
    return this.http.get(`${this.url}/posts`);
  }

  getPost(id:string): Observable<any>{
    return this.http.get(`${this.url}/posts/${id}`);
  }

  createPost(post: Post){
    return this.http.post(`${this.url}/posts`, post);
  }

  updatePost(id: string|number ,updatePost: Post): Observable<any>{
    return this.http.put(`${this.url}/posts/${id}`, updatePost);
  }

  deletePost(id:number): Observable<any>{
    return this.http.delete(`${this.url}/posts/${id}`);
  }
}
