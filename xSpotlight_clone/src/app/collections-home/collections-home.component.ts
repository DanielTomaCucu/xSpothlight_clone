import { Component } from '@angular/core';
import { CollectionsHomeService } from './collections-home.service';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent {
  items: any;
  item: any;
  constructor(private collectionsService: CollectionsHomeService) {}

  ngOnInit(): void {
    this.collectionsService.getItems().subscribe(
      (data) => {
        this.items = data;
        console.log(this.items);
        console.log(this.items[1])
      },
      (error) => console.error(error)
    );
  }
}
