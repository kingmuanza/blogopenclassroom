import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
  }

  loveIt() {
    this.post.loveIts++;
  }
  dontLoveIt() {
    this.post.loveIts--;
  }
  supprimer() {
    console.log('Tentative de suppression');
    if (confirm('Etes vous sûr de vouloir supprimer ce post ?')) {
      this.postService.deletePost(this.post);
      // this.router.navigate(['/posts']);
    }
  }

}
