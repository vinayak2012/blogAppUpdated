import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import {PostService} from '../shared/post.service';
import { Post } from '../shared/post.model';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css'],
  providers: [PostService]
})
export class EditArticleComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute,public postService: PostService) { }

  ngOnInit(): void {
    let id:string = this.route.snapshot.params['id'];
    this.postService.getArticle(id).subscribe((res) => {
      this.postService.selectedPost = res as Post;
    });
  }
  onSubmit(_id,data) {
    this.postService.putArticle(_id,data).subscribe((res) => {
      alert("Post Updated Succesfully");
      this.router.navigate(['/home']);
      this.refreshPostList();
    });
  }
  refreshPostList() {
    this.postService.getPostList().subscribe((res) => {
      this.postService.posts = res as Post[];
    });
  }
}
