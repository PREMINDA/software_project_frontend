export interface PassData{
  "id":string,
  "generatedDateTime": string,
  "isValid": boolean,
  "passCategory": string,
  "from": string,
  "to": string,
  "isApproved": true,
  "isReoccurring": true,
  "startDateTime": string,
  "endDateTime": string,
  "userId": string,
  "nationalId": string,
  "fullName": string,
  "primaryContactNumber": String,
  "data": passAddData[]
}

export interface passAddData{
  "key": string,
  "value": string
}
