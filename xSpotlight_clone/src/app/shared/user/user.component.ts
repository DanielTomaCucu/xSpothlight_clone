import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  userId: string = '';
  nfts = {
    created: 0,
    collected: 0,
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}
  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('user')!;
    console.log(this.userId);
    localStorage.setItem('userId', this.userId);
    this.getUserData();
  }

  isActive(route: string): boolean {
    return this.router.url == `/${route}`;
  }

  getUserData() {
    this.userService.getNFTsCollected(this.userId).subscribe((data) => {
      this.nfts.collected = data;
    });
    this.userService.getNFTsCreated(this.userId).subscribe((data) => {
      this.nfts.created = data.totalNftCount;
    });
  }
}
