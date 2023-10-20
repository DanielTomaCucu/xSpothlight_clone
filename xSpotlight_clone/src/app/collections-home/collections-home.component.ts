import { Component } from '@angular/core';
import { CollectionsHomeService } from './collections-home.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent {
  items: any;
  subscribe: Subscription;
  loading: boolean = false;
  constructor(private collectionsService: CollectionsHomeService) {
    this.subscribe = new Subscription();
  }

  ngOnInit(): void {
    this.loading = true;
    this.subscribe = this.collectionsService.getItems().subscribe(
      (data) => {
        this.items = data;
        this.loading = false;
      },

      (error) => console.error(error)
    );
  }
  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}
