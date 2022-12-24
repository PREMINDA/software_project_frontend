export interface UserModal{
  "id": string;
  "nationalId": string;
  "fullName": string;
  "town": string;
  "district": string;
  "isVertified": string;
  "gender": string;
  "location": string;
  "birthDate": Date;
  "primaryContactNumber": string;
  "emergencyContactNumber": string;
  "userType": string;
  "permissions": string;
  "roles": string;
  "vaccinationData":VaccineData[],
  "organizationId":string;
}


export interface VaccineData{
  "vaccineType":string;
  "vaccineDoseNumber":number;
  "vaccinatedDate":string;
  "vaccinatedPlace":string;

}
