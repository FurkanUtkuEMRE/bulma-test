import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { SongsComponent } from './songs/songs.component';
import { HeroComponent } from './hero/hero.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    FormComponent,
    FooterComponent,
    RepositoriesComponent,
    SongsComponent,
    HeroComponent,
    MessageComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
