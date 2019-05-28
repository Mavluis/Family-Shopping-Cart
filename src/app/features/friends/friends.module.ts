import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { SharedModule } from 'src/app/shared/shared.module';


const routes: Routes = [
    {
        path: '',
        component: SearchComponent
    }
];

@NgModule({
    declarations: [SearchComponent],
    imports: [CommonModule, SharedModule , RouterModule.forChild(routes)]
})
export class FriendsModule { }
