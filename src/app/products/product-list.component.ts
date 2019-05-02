import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({ 
    selector: 'app-products',
    templateUrl : './product-list.component.html',
    styles : ['thead{color:#337AB7}']
})
export class ProductListComponent implements OnInit  {
    ngOnInit(): void {
        console.log("On init");
    }
    pageTitle = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage : boolean = false;
    _filter: string;
    get filter(): string {
        return this._filter;
    }
    set filter(value : string) {
        this._filter = value;
        this.filteredProducts = this._filter ? this.performFilter(this._filter) : this.products;
    }
    filteredProducts : IProduct[];
    products : IProduct[]= [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "https://banner2.kisspng.com/20180530/khr/kisspng-gardening-clip-art-garden-cart-5b0eba082e29a7.0659190415276917841891.jpg"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "https://4vector.com/i/free-vector-hammer-clip-art_115971_Hammer_clip_art_hight.png"
        }
    ];

    constructor() {
        this.filteredProducts = this.products;
        this.filter = '';
    }

    toggleImage() : void {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy: string) : IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product : IProduct) => 
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    onRatingClicked(message: string) : void {
        this.pageTitle = 'Product List : ' + message;
    }
}