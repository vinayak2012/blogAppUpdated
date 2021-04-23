import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import {PostService} from '../shared/post.service';
import { Post } from '../shared/post.model';


@Component({
  selector: 'app-show-article',
  templateUrl: './show-article.component.html',
  styleUrls: ['./show-article.component.css'],
  providers: [PostService]
})
export class ShowArticleComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute,public postService: PostService) { }

  ngOnInit(): void {
    let id:string = this.route.snapshot.params['id'];
    this.postService.getArticle(id).subscribe((res) => {
      this.postService.selectedPost = res as Post;
    });
  }
  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.postService.deletePost(_id).subscribe((res) => {
        this.router.navigate(['/home']);
        alert("Post deleted Succesfully");
      });
    }
  }
}
