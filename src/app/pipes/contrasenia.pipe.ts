import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'contrasenia'
})
export class ContraseniaPipe implements PipeTransform {

    transform(value: string, activar: boolean = true): string {
        // let respuesta: string = value;
        // if(activar){
        //     respuesta = '';

        //     for (let index = 0; index < value.length; index++) {
        //         respuesta += '*';
        //     }
        // }

        // return respuesta;

        return ( activar ) ? '*'.repeat( value.length ): value;
    }

}
