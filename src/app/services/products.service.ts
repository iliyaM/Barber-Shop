import {Injectable} from '@angular/core';
import {Product} from '../models/product.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    products: Product[];

    constructor(private http: HttpClient) {
    }

    productList(): Observable<Product[]> {
        return this.http.get<Product[]>(`http://${environment.url}/products`);
    }
}
