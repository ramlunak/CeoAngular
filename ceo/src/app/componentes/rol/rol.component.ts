import { Component, OnInit ,ViewChild} from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import {Roles} from '../../models/roles';
import {RolesService} from '../../services/roles.service';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.less']
})

export class RolComponent implements OnInit {
  rolesArray: Roles[] = [
    {id:1,nombre:'Admin'},
    {id:2,nombre:'Profesor'},
    {id:3,nombre:'Estudiante'}
  ]; 
  //DataTable --
  displayedColumns: string[] = ['id', 'nombre','commands',];
  dataSource = new MatTableDataSource<Roles>(this.rolesArray);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(public rolesService:RolesService) {}
    
  nombre:string="";

  ngOnInit() {
  //  this.rolesService.getRoles().subscribe(
  //      data=>{this.rolesArray = data;}
  //      ,error => console.log('error')
  //   )

  this.dataSource.paginator = this.paginator;

  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  guardarClick(event: Event) {
    
    this.rolesArray.push({
      id:1,
      nombre:this.nombre
    });
    this.dataSource = new MatTableDataSource<Roles>(this.rolesArray);
    this.dataSource.paginator = this.paginator;
    this.nombre ="";
  }

}
