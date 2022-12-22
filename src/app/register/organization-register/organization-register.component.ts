import { Component, OnInit } from '@angular/core';
import {UserModal} from '../../admin/views/user-list-view/user.modal';
import {FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {OrganizationRegister} from '../../admin/views/organization-list/organization.modal';
import {matchValidator} from '../../utils/CustomValidator';
import {config} from '../../config';


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

  orgTypes: string[] = ['Hospital','University','School',
    'Garment','Pharmacy','Other','Gampaha','Hambantota','Jaffna',
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
    this.loader= false;
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


  onSubmit() {
    const org = this.form.value as OrganizationRegister;
    this.http.post(`${config.apiUrl}/Orgnization/RegisterOrgnization`,org).subscribe(res=>{

    })
  }

  get fPassword(){
    return this.form.get('confirmPassword');
  }
}
