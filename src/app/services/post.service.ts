import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Subject } from 'rxjs';

import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts = new Array<Post>();
  postsSubject = new Subject<Post[]>();

  constructor() {

    this.getAllPosts();

  }

  emitPostSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  getAllPosts() {

    this.download();
  }

  savePost(post: Post) {
    this.posts.push(post);
    this.upload();

  }

  upload() {
    firebase.database().ref('/posts').set(this.posts);
  }
  download() {
    firebase.database().ref('/posts').on('value', (data: any) => {
      this.posts = data.val() ? data.val() : [];
      this.emitPostSubject();
    }
    );
  }

  deletePost(post: Post) {
    const posts = [] as Array<Post>;
    for (const p of this.posts) {
      if (post.id === p.id) {

      } else {
        posts.push(p);
      }
    }
    this.posts = posts;
    this.upload();

    this.emitPostSubject();

  }
}
