import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuemSomosComponent } from './quem-somos.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'quem-somos', component: QuemSomosComponent}
        ])
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        
    ]
})

export class QuemSomosRoutingModule{
    
}