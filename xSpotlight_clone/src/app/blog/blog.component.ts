import { Component } from '@angular/core';
import { blogData } from './blog_data';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  categories: string[] = [];
  posts: any;
  ngOnInit(): void {
    this.categories = blogData.blog.categories;
    this.posts = blogData.blog.posts;
  }
}
