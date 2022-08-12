import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'profil',
        loadChildren: () => import('src/app/screens/profil/profil.module').then( m => m.ProfilPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('src/app/screens/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'message',
        loadChildren: () => import('src/app/screens/message/message.module').then( m => m.MessagePageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('src/app/screens/cart/cart.module').then( m => m.CartPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
