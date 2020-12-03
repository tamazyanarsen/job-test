import { Component, OnInit } from '@angular/core';

import { data } from './data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor() {
    }

    allItems: { group: string, children: { name: string, value: number }[] }[] = data;

    currentGroupIndex = 0;

    allBlocksSums = new Array(this.allItems.length);
    allSums = 0;
    blockSum = 0;

    showIconHelp = false;


    ngOnInit() {
        this.blockSum = this.allItems[this.currentGroupIndex].children.map(e => e.value).reduce((a, b) => a + b, 0);
        this.updateAllSum();
    }

    updateAllSum() {
        this.allBlocksSums = this.allItems
            .map(item => item.children
                .map(e => e.value).reduce((a, b) => a + b, 0));
        this.allSums = this.allBlocksSums.reduce((a, b) => a + b, 0);
    }

    updateBlockSum() {
        this.blockSum = this.allItems[this.currentGroupIndex].children.map(e => e.value).reduce((a, b) => a + b, 0);
    }

    changeSum(event, child) {
        this.updateAllSum();
        this.updateBlockSum();
        if (this.blockSum > 10) {
            event.source.value = 0;
            child.value = 0;
        }
    }

    updateBlock(currentGroupIndex) {
        this.currentGroupIndex = currentGroupIndex;
        this.updateBlockSum();
    }
}
