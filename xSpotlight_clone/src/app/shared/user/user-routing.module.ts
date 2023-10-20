import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { CollectedComponent } from './collected/collected.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./collected/collected.module').then((m) => m.CollectedModule),
      },
      {
        path: 'created',
        loadChildren: () =>
          import('./created/created.module').then((m) => m.CreatedModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
