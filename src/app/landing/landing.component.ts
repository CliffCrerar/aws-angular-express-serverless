import { Component, OnInit, HostListener } from '@angular/core';

@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
	public cardHover: boolean;
	public linkToHome: string
	constructor() {
		this.linkToHome = '/home';
		this.cardHover = false;
	}

	ngOnInit(): void {
	}

	@HostListener('mouseenter')
	@HostListener('mouseleave')
	mouseEnterMouseLeave(ev) {
		console.log('ev: ', ev);
		this.cardHover = !this.cardHover;
	}



}
