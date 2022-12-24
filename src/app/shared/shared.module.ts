import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {LayoutModule} from '@angular/cdk/layout';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ShellComponent } from './shell/shell.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { VaccinationCardComponent } from './components/vaccination-card/vaccination-card.component';
import { PassCardComponent } from './components/pass-card/pass-card.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PopWindowComponent } from './components/pop-window/pop-window.component';
import { MatDialogModule } from '@angular/material/dialog';



const components = [
  ShellComponent,

];

const modules = [
  CommonModule,
  RouterModule,
  MatToolbarModule,
  MatIconModule,
  LayoutModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  MatGridListModule,
  MatPaginatorModule,
  MatDialogModule,
];

@NgModule({
  declarations: [...components, ShellComponent, FooterComponent, HeaderComponent, SpinnerComponent, VaccinationCardComponent, PassCardComponent, PopWindowComponent],
    imports: [
        CommonModule,
        ...modules,
        MatProgressSpinnerModule,

    ],
  exports: [
    ...modules,
    ...components,
    HeaderComponent,
    SpinnerComponent,
    VaccinationCardComponent,
    PassCardComponent,
    MatPaginatorModule
  ],
})
export class SharedModule { }
