import { Component } from '@angular/core';
import { blogData } from './blog_data';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  categories: string[] = [];

  categoryCounts: { [category: string]: number } = {};
  selectedCategory: any = 'All';
  allPosts: any;
  displayedPosts: any;


  ngOnInit(): void {
    this.categories = blogData.blog.categories;
    this.allPosts = blogData.blog.posts;
    this.displayedPosts = this.allPosts;
    this.computeCategoryCounts();
    this.filterPosts();
  }

  computeCategoryCounts(): void {
    this.categoryCounts['All'] = this.allPosts.length;
    for (const post of this.allPosts) {
      const category = post.category;
      if (this.categoryCounts[category]) {
        this.categoryCounts[category]++;
      } else {
        this.categoryCounts[category] = 1;
      }
    }
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.filterPosts();
  }

  filterPosts(): void {
    if (this.selectedCategory && this.selectedCategory !== 'All') {
      this.displayedPosts = this.allPosts.filter(
        (post: { category: string | null }) =>
          post.category === this.selectedCategory
      );
    } else {
      this.displayedPosts = this.allPosts;
    }
  }

  clearFilter(): void {
    this.selectedCategory = null;
    this.filterPosts();
  }
}
