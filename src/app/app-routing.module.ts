import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./features/welcome/welcome.module').then(m => m.WelcomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule)
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'cart',
        loadChildren: () => import('./features/cart/cart.module').then(m => m.CartModule)
      },
      {
        path: 'my-account',
        loadChildren: () => import('./features/my-account/my-account.module').then(m => m.MyAccountModule)
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
