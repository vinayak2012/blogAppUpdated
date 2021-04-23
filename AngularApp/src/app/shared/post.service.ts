import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  selectedPost: Post;
  posts: Post[];
  readonly baseURL = 'http://localhost:3000/articles';
  constructor(private http: HttpClient) {}

  postArticle(post: Post) {
    return this.http.post(this.baseURL, post);
  }
  putArticle(_id:string , post: Post) {
    return this.http.put(this.baseURL+ `/${_id}`, post);
  }
  getPostList() {
    return this.http.get(this.baseURL);
  }
  deletePost(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
  getArticle(_id:string) {
    return this.http.get(this.baseURL + `/${_id}`);
  }
  
  
}
