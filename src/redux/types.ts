export type UserPhotosType = {
  small: string | null;
  large: string | null;
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
  photos: UserPhotosType | null;
};

export type UsersType = {
  items?: any;
  users: Array<{ items: Array<UserType>; totalCount: number; error: any }>;
  userById: UserType;
  isLoading: boolean;
  isLoadingUser: boolean;
  usersCount: number;
  usersOnPage: number;
  followingInProgress: Array<number>;
};
