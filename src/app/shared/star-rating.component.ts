import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl : './star-rating.component.html',
    styleUrls : ['./star-rating.component.css']
})
export class StarRatingComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked : EventEmitter<string> = 
        new EventEmitter<string>();

    onClick() : void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
    }

    ngOnChanges() : void {
        this.starWidth = this.rating * 70 / 5;
    }
}