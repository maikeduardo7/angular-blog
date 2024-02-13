import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { dataFake } from'../../data/dataFake'

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  @Input()
  photoCover:string="https://miro.medium.com/v2/resize:fit:1400/1*1HXCJCOpzKdmQI33ZrEIlg.png";
  
  @Input()
  contentTitle:string="MINHA NOTÍCIA";
  
  @Input()
  contentDescription:string="Olá Mundo!";

  private id:string = "0";

  constructor(private route:ActivatedRoute){
  }

  ngOnInit():void{
    this.route.paramMap.subscribe(
      value => this.id = value.get("id") ?? "0"
    )

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id:string){

    const result = dataFake.filter(article => article.id == id)[0];

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photoCover;

  }

}
