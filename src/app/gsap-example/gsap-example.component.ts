import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap'

@Component({
  selector: 'app-gsap-example',
  templateUrl: './gsap-example.component.html',
  styleUrls: ['./gsap-example.component.css']
})
export class GsapExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {  

  }



  animation() { 
    gsap.timeline().from('p',{ duration: 2, opacity: 0, delay: 1, ease: 'step'}).from('input', {opacity:0, ease:'back'})
  }
  
}
