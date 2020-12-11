import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { NewsListItemComponent } from './news-list-item/news-list-item.component'
import { NewsListComponent } from './news-list/news-list.component'

const routes: Routes = [
    {path: '', component: NewsListComponent, children: [
        {path: 'item', component: NewsListItemComponent, pathMatch:"full"}, 
        {path: '**', component: NewsListComponent}
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule] 
})
export class NewsRoutingModule {}