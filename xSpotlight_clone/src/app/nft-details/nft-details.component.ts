import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NftDetailsService } from './nft-details.service';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-nft-details',
  templateUrl: './nft-details.component.html',
  styleUrls: ['./nft-details.component.css'],
})
export class NftDetailsComponent {
  nftDetails: any;
  rarities: any = [];
  history: any = [];
  loading: boolean = false;
  constructor(
    private dialogRef: MatDialogRef<NftDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private nftDetailsService: NftDetailsService
  ) {}

  close() {
    this.dialogRef.close();
  }

  ngOnInit() {
     this.loading = true;
    this.nftDetailsService.getNftDetail(this.data.nftId).subscribe((data) => {
      this.nftDetails = data;
      this.rarities = data.rarities;
       this.loading = false;
    });
  }

  onTabChange(event: MatTabChangeEvent) {
    if (event.index === 1) {
      this.loading = true;
      this.nftDetailsService
        .getNftHistory(this.data.nftId)
        .subscribe((data) => {
          console.log(data);
          this.history = data;
          this.loading=false
        });
    }
  }
  loadMore(): void {

    this.nftDetailsService.getNftHistory(this.data.nftId).subscribe((data) => {
      this.history = [...this.history, ...data];
    });
  }
  getColSpan(itemCount: number, index: number): string {
    const itemsInLastRow = itemCount % 3 || 3;
    const isLastRow = index >= itemCount - itemsInLastRow;
    if (isLastRow) {
      if (itemsInLastRow === 1) {
        return 'col-span-12';
      } else if (itemsInLastRow === 2) {
        return 'col-span-6';
      }
    }
    return 'col-span-4';
  }
  getRaritiesArray(): Array<{ key: string; value: any }> {
    return Object.keys(this.rarities).map((key) => ({
      key,
      value: this.rarities[key],
    }));
  }
}
