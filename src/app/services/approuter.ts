import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from '../components/catalogue/catalogue.component';
import { SubCatalogueComponent } from '../components/sub-catalogue/sub-catalogue.component';
import { DetailsComponent } from '../components/details/details.component';


const ROUTES: Routes = [
    { path: '', component: CatalogueComponent },
    { path: ':sub', component: SubCatalogueComponent },
    { path: ':sub/:id', component: DetailsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})

export class AppRouteModule { }