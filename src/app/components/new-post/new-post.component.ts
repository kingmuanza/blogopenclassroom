import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private postService: PostService) {

  }

  initForm() {

    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });

  }

  onSubmitForm() {
    console.log('Envoi du formulaire');
    const formValue = this.postForm.value;
    const post = new Post(
      formValue['title'],
      formValue['content'],
      0,
      new Date()
    );
    this.postService.savePost(post);
    this.router.navigate(['/posts']);
  }

  ngOnInit() {

    this.initForm();
  }

}
