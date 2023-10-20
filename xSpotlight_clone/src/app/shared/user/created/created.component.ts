import { Component, OnInit } from '@angular/core';
import { CreatedService } from './created.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-created',
  templateUrl: './created.component.html',
  styleUrls: ['./created.component.css'],
})
export class CreatedComponent implements OnInit {
  userId: string | null = '';
  nfts: any = [];
  subs: Subscription;

  constructor(private createdService: CreatedService) {
    this.subs = new Subscription();
  }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId')!;
    this.subs = this.createdService
      .getCreatedNfts(this.userId)
      .subscribe((data) => {
        this.nfts = data;
      });
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
