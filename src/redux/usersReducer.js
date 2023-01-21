import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      id: 1,
      imgSrc:
        "https://avatars.mds.yandex.net/i?id=0393e6b5b8874243329b425b83cc44b074caef0d-7086266-images-thumbs&n=13&exp=1",
      fullName: "Igor",
      status: "Im God",
      location: { city: "Syktyvkar", country: "Russia" },
      followed: true,
    },
    {
      id: 1,
      imgSrc:
        "https://avatars.mds.yandex.net/i?id=0393e6b5b8874243329b425b83cc44b074caef0d-7086266-images-thumbs&n=13&exp=1",
      fullName: "Igor",
      status: "Im God",
      location: { city: "Syktyvkar", country: "Russia" },
      followed: false,
    },
    {
      id: 1,
      imgSrc:
        "https://avatars.mds.yandex.net/i?id=0393e6b5b8874243329b425b83cc44b074caef0d-7086266-images-thumbs&n=13&exp=1",
      fullName: "Igor",
      status: "Im God",
      location: { city: "Syktyvkar", country: "Russia" },
      followed: true,
    },
  ],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const usersReducer = usersSlice.reducer;
