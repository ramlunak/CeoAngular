import { NgModule } from '@angular/core';

import {
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,   
    MatInputModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatIconModule,
    MatToolbarModule
} from '@angular/material'

@NgModule({
    imports:[      
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,    
        MatInputModule,
        MatDialogModule,
        MatButtonToggleModule,
        MatIconModule,
        MatToolbarModule
    ],
    exports:[      
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,       
        MatInputModule,
        MatDialogModule,
        MatButtonToggleModule,
        MatIconModule,
        MatToolbarModule
    ]
})

export class appMaterial{}