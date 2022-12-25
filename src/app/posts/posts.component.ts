import {Component, OnInit} from "@angular/core";
import {PostsService} from "./posts.service";

@Component({
  template: 'Posts component',
  selector: 'app-posts'
})
export class PostsComponent implements OnInit {
  posts: any[] = [];
  message: string | undefined;

  constructor(private service: PostsService) {
  }

  ngOnInit() {
    this.service.fetch().subscribe(p => {
      // @ts-ignore
      this.posts = p;
    })
  }

  add(title: string) {
    const post: any = { title };
    this.service.create(post).subscribe((p) => {
      // @ts-ignore
      this.posts.push(p)
    }, err => this.message = err)
  }

  delete(id: number) {
    if (window.confirm("Are you sure?")) {
      this.service.remove(id).subscribe()
    }
  }
}
