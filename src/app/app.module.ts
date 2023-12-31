import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import {MaterialModule} from '../app/material/material/material.module';
import { CardsComponent } from './components/cards/cards.component';
import { SeconddivComponent } from './seconddiv/seconddiv.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MessageComponent } from './components/message/message.component';
import { MyChartComponent } from './components/my-chart/my-chart.component';
import { BarchartComponent } from './barchart/barchart.component';
import { NgChartsModule} from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardsComponent,
    SeconddivComponent,
    CarouselComponent,
    MessageComponent,
    MyChartComponent,
    BarchartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgChartsModule,
  
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
