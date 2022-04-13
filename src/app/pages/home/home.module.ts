import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';
import {FeaturedProductsComponent} from '../../components/featured-products/featured-products.component';
import {HotDealsComponent} from '../../components/hot-deals/hot-deals.component';
import {CategoriesComponent} from '../../components/categories/categories.component';
import {HomeTopSliderComponent} from '../../components/home-top-slider/home-top-slider.component';
import {SearchbarComponent} from '../../components/searchbar/searchbar.component';
import {HttpClientModule} from '@angular/common/http';
import {ProductsService} from '../../services/products.service';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HttpClientModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomeComponent
            }
        ])
    ],
    providers: [ProductsService],
    declarations: [HomeComponent,
        FeaturedProductsComponent,
        HotDealsComponent,
        CategoriesComponent,
        HomeTopSliderComponent,
        SearchbarComponent]
})
export class HomeModule {
}
