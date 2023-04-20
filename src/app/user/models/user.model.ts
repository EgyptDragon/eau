export interface User {
  id: string;
  firstName: string;
  lastName: string;
  displayName: string;
  mail: string;
  password: string;
  profilePic: string;
  birthDate: string;
  groups: string[];
}

export interface UserCredentials {
  mail: string;
  password: string;
}

export interface UserAuthData {
  token: string;
}

export interface Group {
  id: string;
  memberIds: string[];
  type: string;
}

// export class GroupType {
//   public static readonly family = {id:'1', label:'family'};
//   public static readonly friends = {id:'2', label:'friends'};
// }

// export enum GroupTypeEnum {
//   Family = 'Family',
//   Friends = '',
// }
