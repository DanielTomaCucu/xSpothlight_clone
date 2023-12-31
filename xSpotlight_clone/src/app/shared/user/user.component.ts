import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

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
  subs: Subscription;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.subs = new Subscription();
  }
  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('user')!;
    localStorage.setItem('userId', this.userId);
    this.getUserData();
  }

  isActive(route: string): boolean {
    return this.router.url == `/${route}`;
  }

  getUserData() {
    this.subs.add(
      this.userService.getNFTsCollected(this.userId).subscribe((data) => {
        this.nfts.collected = data;
      })
    );
    this.subs.add(
      this.userService.getNFTsCreated(this.userId).subscribe((data) => {
        this.nfts.created = data.totalNftCount;
      })
    );
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
