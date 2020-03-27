import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppInitializerModule } from './app-initializer.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppInitializerModule,
    AppRoutingModule, CoreModule, LayoutModule, SharedModule],
    providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
