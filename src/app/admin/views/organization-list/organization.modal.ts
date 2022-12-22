export interface Organization{
  "id"?: string;
  "organizationName"?: string;
  "organizationType"?: string;
  "isApproved"?: boolean;
}

export interface OrganizationRegister{
  "id"?:string;
  "organizationName":string;
  "address":string;
  "city":string;
  "state":string;
  "postalCode":string;
  "userType":string;
  "password":string;
  "emailAddress":string;
  "mobileNumber":string;
  "telNumber":string;
  "organizationType":string;
  "isApproved":boolean;
}

export interface OrganizationResponse{
  "id"?:string;
  "organizationName":string;
  "address":string;
  "city":string;
  "state":string;
  "postalCode":string;
  "userType":string;
  "emailAddress":string;
  "mobileNumber":string;
  "telNumber":string;
  "organizationType":string;
  "isApproved":boolean;
}

export interface OrganizationLoginResponse{
  "id": string,
  "userType": string,
  "emailAddress":string,
  "token":string;
  "refreshToken":string,
  "organizationResponse":OrganizationRegister
}
