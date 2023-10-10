import { Component } from '@angular/core';
import { CollectionsHomeService } from './collections-home.service';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent {
  items: any;
  constructor(private collectionsService: CollectionsHomeService) {}
  ngOnInit() {
    this.collectionsService.getItem().subscribe((data) => {
      console.log(data);
      this.items = data;
    });
  }
}
