import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'handle'
})
export class HandleUndefinedPipe implements PipeTransform {

	transform(value: any, ...args: unknown[]): unknown {
		console.log('handle: ', value);
		return null;
	}

}
