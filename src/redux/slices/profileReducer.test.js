import { addPost } from "./profileReducer";

it("new post added", () => {
  const state = {
    posts: [
      { id: 1, user: "Igor", text: "post1", likesCount: 2 },
      { id: 2, user: "Igor", text: "post2", likesCount: 6 },
      { id: 3, user: "Igor", text: "post3", likesCount: 42 },
      { id: 4, user: "Igor", text: "post4", likesCount: 77 },
      { id: 5, user: "Igor", text: "post5", likesCount: 112 },
    ],
  };

  const action = {
    payload: { id: 11, user: "sasas", text: "post6", likesCount: 2 },
  };

  addPost(state, action);

  expect(state.posts.length).toBe(6);
});
