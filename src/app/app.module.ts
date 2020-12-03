import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { GestureConfig, MatBadgeModule, MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatSliderModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        MatBadgeModule
    ],
    providers: [
        { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
