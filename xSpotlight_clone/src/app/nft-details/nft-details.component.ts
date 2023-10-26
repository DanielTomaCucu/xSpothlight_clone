import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NftDetailsService } from './nft-details.service';

@Component({
  selector: 'app-nft-details',
  templateUrl: './nft-details.component.html',
  styleUrls: ['./nft-details.component.css'],
})
export class NftDetailsComponent {
  nftDetails: any;
  constructor(
    private dialogRef: MatDialogRef<NftDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private nftDetailsService: NftDetailsService
  ) {}

  close() {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.nftDetailsService.getNftDetail(this.data.nftId).subscribe((data) => {
      console.log(data);
      this.nftDetails = data;
    });
  }
}
