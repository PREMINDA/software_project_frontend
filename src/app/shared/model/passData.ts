export interface PassData{
  "id":string,
  "generatedDateTime": Date,
  "isValid": boolean,
  "passCategory": string,
  "from": string,
  "to": string,
  "isApproved": true,
  "isReoccurring": true,
  "startDateTime": Date,
  "endDateTime": Date,
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
