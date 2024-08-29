import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

interface Template{
        id: string,
        name: string,
        fileName: string,
        code: string
}

interface TemplateParameter{
    templateId: string,
    paramId: string,
    paramKey: string,
    paramType: string,
    defaultValue: string,
    availableValues:string,
    value:undefined
}

@Component({
  selector: 'app-monthly-payslip',
  templateUrl: './monthly-payslip.component.html',
  styleUrls: ['./monthly-payslip.component.scss']
})


export class MonthlyPayslipComponent implements OnInit {
  public templates: Template[] = [];
  public templateParameters: TemplateParameter[] =[];

  monthlyPayslip=false;
  loanPayslip=false;
  selected: any;
  templateId: string = "";



  constructor(private employeeservice:EmployeeService) { }


  ngOnInit(): void {
    this.employeeservice.getTemplates().subscribe((data)=>{
      this.templates = data;
    })
  }

  //calling api when select Request payslip
  getTemplateParameters(templateId:string){
    this.templateId = templateId;
    this.employeeservice.getTemplateParameters(templateId).subscribe((data)=>{
      this.templateParameters = data;

    })
  }

  generatePdf(){
    this.employeeservice.downloadPdf(this.templateId, this.templateParameters).subscribe(data=>{
      console.log(data);
      const file = data;
      const url = window.URL.createObjectURL(new Blob([data as BlobPart], { type: 'application/pdf' }));

      var link = document.createElement('a');
      document.body.appendChild(link);
      link.setAttribute('style', 'display: none');
      link.href = url;
      link.download = 'payslip.pdf';
      link.click();
    });
  }




  // selectPayslip(event:any):void{
  //   console.log(event.target.value);

  //   const selectedValue = event.target.value;
  //   if(selectedValue==="payslip"){
  //     this.monthlyPayslip = true;
  //     this.loanPayslip = false;
  //   }else{
  //     this.loanPayslip = true;
  //     this.monthlyPayslip = false;
  //   }
  // }


  selectChangeHandler(event:any):void{
    this.selected = event.target.value;
  }

}

