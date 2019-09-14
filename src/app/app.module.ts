import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import{HttpClientModule} from'@angular/common/http';
import { LengthPipe } from './length.pipe';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import{UserService} from'./user.service';
import { WordsPipe } from './words.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LengthPipe,
    WordsPipe,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
