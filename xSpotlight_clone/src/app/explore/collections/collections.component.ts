import { Component } from '@angular/core';
import { CollectinsService } from './collectins.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent {
  constructor(private collectionService: CollectinsService) {
  
}
}
