import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, } from '@angular/platform-browser';

@Component({
  selector: 'app-video-widget',
  templateUrl: './video-widget.component.html'
})

export class VideoWidgetComponent implements OnInit {
  @Input() videoUrl: string;
  @Input() additionalClass: string;

  url: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }
}
