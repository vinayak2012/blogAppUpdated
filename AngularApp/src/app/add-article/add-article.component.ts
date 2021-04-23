import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import {PostService} from '../shared/post.service';
import { Post } from '../shared/post.model';

declare var M: any;


@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css'],
  providers: [PostService]
})
export class AddArticleComponent implements OnInit {

  constructor(private router: Router, private postService: PostService) { }

  onSubmit(data) {
    this.postService.postArticle(data).subscribe((res) => {
      alert("Post Added Succesfully");
      this.router.navigate(['/home']);
    });
  }
  ngOnInit(): void {
    this.resetForm();
  }
  refreshPostList() {
    this.postService.getPostList().subscribe((res) => {
      this.postService.posts = res as Post[];
    });
  }
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.postService.selectedPost = {
      _id: "",
      title: "",
      categories: "",
      description: "",
    }
  }
}
