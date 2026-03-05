import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {FundData} from '../../Interfaces/fund-data';
import {FundService} from '../../Services/fund-service';
import {ActivatedRoute, Router} from '@angular/router';
import {fundProjectList} from '../../Content/fund-list';
@Component({
  selector: 'app-modify-list-item.component',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css',
})
class ModifyListItemComponent implements OnInit {
  fundProjectsForm : FormGroup;
  fundProjectList: FundData[] | undefined;
  constructor(
    private formBuilder: FormBuilder,
    private fundService: FundService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.fundProjectsForm = this.formBuilder.group({
      fundId: ['', Validators.required],
      fundCode: ['', Validators.required],
      fundName: ['', Validators.required],
      fundManager: ['', Validators.required],
      portfolioManager: ['', Validators.required],
      startPrice: ['', Validators.required],
    });
  }

  ngOnInit() {
    const fundId = this.route.snapshot.paramMap.get('fundId');

    if (fundId){
      this.fundService.getFundById(Number(fundId)).subscribe({
        next: fundProjectList => {
          if (fundProjectList) {
            this.fundProjectsForm?.patchValue(fundProjectList);
          }
        },
        error: err => {
          // @ts-ignore
          this.error = "Error fetching fund projects"
          console.error("Error Fetching: ", err)
        }
      });
    }
  }

  onSubmit(): void {
    if (this.fundProjectsForm?.valid) {
      const fundProjectList: FundData = this.fundProjectsForm?.value

      console.log("ID in the modify component: ", Number(fundProjectList.fundId))

      if (!isNaN(Number(fundProjectList.fundId))) {
        this.fundService.updateFundProject(fundProjectList).subscribe(() => this.router.navigate(['/funds']))
      } else {
        fundProjectList.fundId = this.fundService.generateNewId()
        this.fundService.addFundProject(fundProjectList).subscribe(() => this.router.navigate(['/funds']))
      }
    }
  }

  onDelete() {
    const fundId = this.fundProjectsForm?.value.fundId
    if (fundId){
      this.fundService.deleteFundProject(fundId)
      this.router.navigate(['/funds'])
    }
  }
  navBackToFundList() {
    this.router.navigate(['/funds'])
  }

}

export default ModifyListItemComponent

