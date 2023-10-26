
import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root',
})
export class ScreenshotService {
  captureScreenshot(): Promise<string> {
    return html2canvas(document.body).then((canvas) => {
      return canvas.toDataURL();
    });
  }

  storeScreenshot(dataUrl: string): void {
    localStorage.setItem('screenshot', dataUrl);
  }

  getScreenshot(): string | null {
    return localStorage.getItem('screenshot');
  }
}
