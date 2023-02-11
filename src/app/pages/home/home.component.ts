import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  hero: any;
  constructor(private obj:HeroService){}
  todos:any
  ngOnInit()
  {
    this.obj.getTodoData().subscribe((response: any)=>{this.todos=response})

  }
  delete(id:any){
    this.todos=this.todos.filter((e:{id:any})=>e.id!=id)
  }
  add(){
    let newdata={"title":"newdata"}

    this.todos=this.todos.concat(newdata);
  }

}
