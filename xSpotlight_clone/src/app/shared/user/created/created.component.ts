import { Component, OnInit } from '@angular/core';
import { CreatedService } from './created.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-created',
  templateUrl: './created.component.html',
  styleUrls: ['./created.component.css'],
})
export class CreatedComponent implements OnInit {
  userId: string | null = '';
  nfts: any = [];
  constructor(private createdService: CreatedService) {}

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId')!;
    this.createdService.getCreatedNfts(this.userId).subscribe((data) => {
      console.log(data);
      this.nfts = data;
    });
  }
}
