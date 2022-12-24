import { Component, OnInit } from '@angular/core';
import {UserModal} from '../../admin/views/user-list-view/user.modal';
import {FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {OrganizationRegister} from '../../admin/views/organization-list/organization.modal';
import {matchValidator} from '../../utils/CustomValidator';
import {config} from '../../config';
import {districts} from '../../shared/model/constent'
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PopWindowComponent} from '../../shared/components/pop-window/pop-window.component';
import { FormGroupDirective } from '@angular/forms';


@Component({
  selector: 'app-organization-register',
  templateUrl: './organization-register.component.html',
  styleUrls: ['./organization-register.component.scss'],
  providers: [FormGroupDirective]
})
export class OrganizationRegisterComponent implements OnInit {

  id = '';
  user !: UserModal;
  hide = true;
  hide1 = true;
  loader: boolean = false;
  match : boolean = false;
  form !: FormGroup;
  formInit !: FormGroup;
  dis: string[] = districts;
  data = 'Wait Until Approve Your Organization';

  orgTypes: string[] = ['Hospital','University','School', 'Garment','Pharmacy'];

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private location: Location,
    private dialog: MatDialog,
    formDirective: FormGroupDirective
  ) {
    form: FormGroup;
  }

  ngOnInit(): void {
    this.createFrom();
    this.formInit = this.form;
    this.loader= false;
  }

 openMatBox(){
   this.dialog.open(PopWindowComponent, {
     width: '500px',
     height: '300px',
     data: {
       dataKey: this.data
     }
   });
 }

  createFrom(){
    this.form = this.fb.group({
      organizationName: ['', Validators.required ],
      address: ['', Validators.required ],
      city: ['', Validators.required ],
      state:['', Validators.required ],
      postalCode:['', Validators.required ],
      password:['', [Validators.required, matchValidator('confirmPassword', true)]],
      confirmPassword:['', [Validators.required,matchValidator('password')]],
      emailAddress:['', [Validators.required, Validators.email]],
      mobileNumber:["", [Validators.required, Validators.minLength(10),
        Validators.maxLength(10), Validators.pattern("^[0-9]*$")]],
      telNumber:["", [Validators.required, Validators.minLength(10),
        Validators.maxLength(10), Validators.pattern("^[0-9]*$")]],
      organizationType:['', Validators.required ],
      isApproved:[false, Validators.required ],
    });
  }


  onSubmit(formDirective:FormGroupDirective) {
    this.loader = true;
    const org = this.form.value as OrganizationRegister;
    this.http.post(`${config.apiUrl}/Orgnization/RegisterOrgnization`,org).subscribe(res=>{
      this.openMatBox();
      this.form.reset();
      formDirective.resetForm();
      this.loader = false;
    })
  }

  get fPassword(){
    return this.form.get('confirmPassword');
  }
}
