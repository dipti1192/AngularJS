import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoWidgetComponent } from './video-widget.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        VideoWidgetComponent
    ],
    exports: [VideoWidgetComponent]
})
export class VideoModule { }
