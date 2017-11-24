import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CafeListPage } from './cafe-list';
import { SearchBarModule } from "../../components/search-bar/search-bar.module";

@NgModule({
    declarations: [
        CafeListPage,
    ],
    imports: [
        SearchBarModule,
        IonicPageModule.forChild(CafeListPage),
    ],
})
export class CafeListPageModule {
}
