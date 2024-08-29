import { Component, OnInit } from '@angular/core';

interface TemplateDetails{
  time: string;
}

@Component({
  selector: 'app-owner-select-template',
  templateUrl: './owner-select-template.component.html',
  styleUrls: ['./owner-select-template.component.scss']
})
export class OwnerSelectTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  templateDetails: TemplateDetails[] = [
    {"time":'22 10 2022'},{"time":'22 10 2022'},{"time":'22 10 2022'},{"time":'22 10 2022'},{"time":'22 10 2022'},{"time":'22 10 2022'},
  ]


}
