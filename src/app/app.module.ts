import { RetirarVehiculosComponent } from './components/retirar-vehiculos/retirar-vehiculos.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListarVehiculosComponent } from './components/listar-vehiculos/listar-vehiculos.component';
import { IngresarVehiculosComponent } from './components/ingresar-vehiculos/ingresar-vehiculos.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import {RouterModule,Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ListarVehiculosService } from './components/listar-vehiculos/listar-vehiculos.service';



const routes: Routes =[
  {path:'',redirectTo:'/ingresar',pathMatch:'full'},
  {path:'ingresar',component:IngresarVehiculosComponent},
  {path:'retirar',component:RetirarVehiculosComponent},
  {path:'listar',component:ListarVehiculosComponent}
 
];

@NgModule({
  declarations: [
    AppComponent,
    ListarVehiculosComponent,
    IngresarVehiculosComponent,
    RetirarVehiculosComponent,
    MenuComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
