import { Component, OnInit, Input } from '@angular/core';
import { HeroeService } from "../../services/heroe.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
 @Input() heroedetalle:any = [];


  constructor(private servicio:HeroeService, private rutas:ActivatedRoute) {
    // this.servicio.getHeroes().subscribe((data:any)=>{
    //   console.log(data[0]);
    //   this.heroe = data[0];
    //  });

    //  this.rutas.params.subscribe(data=>{
    //    console.log(data);
    //    if(data.length > 0){
    //      this.actualizar = true;
    //    }else{
    //      this.actualizar = false;
    //    }
       
       
    //  });
   }

  ngOnInit(): void {
  }

}
