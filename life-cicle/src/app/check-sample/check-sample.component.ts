import {
	Component,
	OnInit,
	DoCheck,
	AfterContentInit,
	AfterContentChecked,
	AfterViewChecked,
	OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent
implements
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewChecked,
OnDestroy
{
  quantidade: number = 0

	constructor() {}

	adcionar(){
		this.quantidade += 1
	}
	decrementar(){
		this.quantidade -= 1
	}

	ngDoCheck(): void {
		console.log('ngDoCheck')
	}
	ngAfterContentInit(): void {
		console.log('ngAfterContentInit')
	}
	ngAfterContentChecked(): void {
		console.log('ngAfterContentChecked')
	}
	ngAfterViewChecked(): void {
		console.log('ngAfterViewChecked')
	}
  ngOnInit(): void {
		console.log('ngOnInit')
  }
	ngOnDestroy(): void {

		console.log('Goodbye my friend')
	}
}
