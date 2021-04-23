import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import {PostService} from '../shared/post.service';
import { Post } from '../shared/post.model';

declare var M: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PostService]
})
export class HomeComponent implements OnInit {

  constructor(public postService: PostService) { }

  ngOnInit(): void {
    this.refreshPostList();
  }
  refreshPostList() {
    this.postService.getPostList().subscribe((res) => {
      this.postService.posts = res as Post[];
    });
  }


}
