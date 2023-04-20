import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppFrameComponent } from './app-frame.component';
import { AppFrameRoutingModule } from './app-frame.routing.module';

@NgModule({
  declarations: [
    AppFrameComponent,
  ],
  imports: [
    CommonModule,
    AppFrameRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
  ],
  providers: [],
})
export class AppFrameModule { }
