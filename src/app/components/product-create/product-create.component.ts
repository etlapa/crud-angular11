import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/common/IProduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: IProduct;

  emptyProduct = {
      id: '',
      name: '',
      description: '',
      available: false
  }

  submitted = false;

  constructor(private productService: ProductService) {
    this.product = this.emptyProduct;
  }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.create(this.product)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newProduct(): void {
    this.submitted = false;
    this.product = {
      id:'',
      name: '',
      description: '',
      available: false
    };
  }

}
