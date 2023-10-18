import { Component } from '@angular/core';
import { CollectedService } from './collected.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-collected',
  templateUrl: './collected.component.html',
  styleUrls: ['./collected.component.css']
})
export class CollectedComponent {
  nfts: any
  constructor(private collectedService: CollectedService, private route: ActivatedRoute) { }
  ngOnInit() {

    let user: string = this.route.snapshot.paramMap.get('user')!;

    this.collectedService.getCollectionUser(user).subscribe(data => { console.log(data), this.nfts=data})
  }
}
