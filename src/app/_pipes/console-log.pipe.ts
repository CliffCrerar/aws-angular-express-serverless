import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'consolelog'
})
export class ConsoleLogPipe implements PipeTransform {

	transform(value: unknown, ...args: unknown[]): unknown {
		console.log('value: ', value);
		console.log('value: ', Object.entries(value));
		return null;
	}

}
