import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../components/template/header/header.service';
import { Product } from '../../components/product/product.model';
import { ProductService } from '../../components/product/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {

  products: Product[]
  breakpoint: number

  constructor(private headerService: HeaderService, private productService: ProductService) {
    headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routeUrl: ''
    }
  }

  ngOnInit(): void {
      this.breakpoint = (window.innerWidth <= 500) ? 1 : 4
      this.productService.read().subscribe(products => {
        this.products = products
        console.log(products)
      })
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 500) ? 1 : 4
  }

}
