export type UserPhotosType = {
  small: string | undefined;
  large: string | undefined;
};

export type UserType = {
  aboutMe: string | null;
  contacts: Object;
  lookingForAJob: boolean;
  lookingForAJobDescription: string | null;
  fullName: string;
  userId: number;
  id?: number;
  name?: string;
  status?: string;
  followed?: boolean;
  photos: UserPhotosType;
};

export type UsersType = {
  items?: any;
  users: Array<{ items: Array<UserType>; totalCount: number; error: any }>;
  userById: Array<UserType>;
  isLoading: boolean;
  isLoadingUser: boolean;
  usersCount: number;
  usersOnPage: number;
  followingInProgress: Array<number>;
};

export enum ResultCodeEnum {
  Success = 0,
  Error = 1,
}

export type MyResponseType<D = {}, RC = ResultCodeEnum> = {
  data: D;
  messages: Array<string>;
  resultCode: RC;
};

export type GetItemsType = {
  items: Array<UserType>;
  totalCount: number;
  error: string | null;
};
