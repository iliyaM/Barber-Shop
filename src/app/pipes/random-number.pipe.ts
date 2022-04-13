import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'randomNumber'
})
export class RandomNumberPipe implements PipeTransform {

    transform(value: unknown, ...args: unknown[]): number {
        return Math.floor(Math.random() * (50 - 10 + 1)) + 10;
    }

}
