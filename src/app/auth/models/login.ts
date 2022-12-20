import {User} from './user';

export interface Login{
  nationalId:string;
  password:string;
}

export interface LogResponse{
  id: string;
  nationalId: string;
  refreshToken: string;
  token:string;
  user:User;
}
