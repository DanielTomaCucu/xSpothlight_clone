import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreComponent } from './explore.component';

const routes: Routes = [
  {
    path: '',
    component: ExploreComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./nfts/nfts.module').then((m) => m.NftsModule),
      },
    
      {
        path: 'collections',
        loadChildren: () =>
          import('./collections/collections.module').then(
            (m) => m.CollectionsModule
          ),
      },
    ],
  },
  {
    path: 'collections/:param',
    loadChildren: () =>
      import('./collections/nfts-collection/nfts-collection.module').then(
        (m) => m.NftsCollectionModule
      ),
    data: { isChildRoute: true },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExploreRoutingModule {}
