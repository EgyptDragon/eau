import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit,  } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { fadeInAnimation } from 'src/app/app-frame/animation';
import { SafeHtml } from '../pipes/safe.pipe';

@Component({
  standalone: true,
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss'],
  imports: [CommonModule, SafeHtml, MatCardModule, MatListModule, MatButtonModule],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
})
export class MapPageComponent implements OnInit{

  public averageByDepartements= new Map();
  public svgContent = '';


  constructor(
    private elRef: ElementRef,
    private http: HttpClient){
  }
  
  ngOnInit() {
    this.http.get<any>('https://geo.api.gouv.fr/regions').subscribe(
      regions => {for (const region of regions) {
        this.http.get<any>(`https://geo.api.gouv.fr/regions/${region.code}/departements`).subscribe(
          departements => {for (const departement of departements) {
            this.http.get<any>(`https://hubeau.eaufrance.fr/api/v1/qualite_eau_potable/resultats_dis?code_departement=${departement.code}&code_parametre=1340&fields=resultat_numerique`).subscribe(
              results => {
                const init = 0;
                const average = Math.round((results.data.reduce((a: any, b: any) => a + b.resultat_numerique, init)/results.data.length)/10)*10;
                this.averageByDepartements.set(departement.code, average);
              }
            )}})}});
  }
}
