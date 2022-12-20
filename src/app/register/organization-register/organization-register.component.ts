import { Component, OnInit } from '@angular/core';
import {UserModal} from '../../admin/views/user-list-view/user.modal';
import {FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {OrganizationRegister} from '../../admin/views/organization-list/organization.modal';


@Component({
  selector: 'app-organization-register',
  templateUrl: './organization-register.component.html',
  styleUrls: ['./organization-register.component.scss']
})
export class OrganizationRegisterComponent implements OnInit {

  id = '';
  user !: UserModal;
  hide = true;
  hide1 = true;
  loader: boolean = true;
  match : boolean = false;
  form !: FormGroup;
  districts: string[] = ['Ampara','Anuradhapura','Badulla',
    'Batticaloa','Colombo','Galle','Gampaha','Hambantota','Jaffna',
    'Kalutara','Kandy','Kegalle','Kilinochchi','Kurunegala','Mannara','Matale','Matara',
    'Moneragala','Mullaitivu','Nuwara Eliya','Polonnaruwa','Puttalam','Rathnapura','Trincomalee',
    'Vavuniya'
  ];

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private location: Location
  ) {
    form: FormGroup;
  }

  ngOnInit(): void {
    this.createFrom();
  }

  createFrom(){
    this.form = this.fb.group({
      organizationName: ['', Validators.required ],
      address: ['', Validators.required ],
      city: ['', Validators.required ],
      state:['', Validators.required ],
      postalCode:['', Validators.required ],
      userType:['', Validators.required ],
      password:['', Validators.required ],
      confirmPassword:['', Validators.required],
      emailAddress:['', Validators.required ],
      mobileNumber:['', Validators.required,Validators.pattern("^[0-9]*$"),
        Validators.minLength(10) ],
      telNumber:['', Validators.required ,Validators.pattern("^[0-9]*$"),
        Validators.minLength(10)],
      organizationType:['', Validators.required ],
      isApproved:[false, Validators.required ],
    });
  }


  onSubmit() {
    const org = this.form.value as OrganizationRegister;
    console.log(this.form);
  }
}
