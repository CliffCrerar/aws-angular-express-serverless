import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'testpipe'
})
export class TestPipe implements PipeTransform {

	transform(value: unknown, ...args: unknown[]): unknown {
		console.log('value: ', value);
		return null;
	}

}
