import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from 'src/app/models/post';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  @Input() posts: Post[];
  postsSubcription: Subscription;

  constructor(private router: Router, private postService: PostService) { }

  ngOnInit() {
    this.postsSubcription = this.postService.postsSubject.subscribe((posts: Post[]) => {
      this.posts = posts;
    });
    this.postService.emitPostSubject();
  }

  ngOnDestroy() {
    this.postsSubcription.unsubscribe();
  }

}
