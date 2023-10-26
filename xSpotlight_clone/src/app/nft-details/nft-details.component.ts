import { Component } from '@angular/core';
import { ScreenshotService } from '../shared/screenshot.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-nft-details',
  templateUrl: './nft-details.component.html',
  styleUrls: ['./nft-details.component.css'],
})
export class NftDetailsComponent {
  constructor(private dialogRef: MatDialogRef<NftDetailsComponent>) {}

  close() {
    this.dialogRef.close();
  }
}
