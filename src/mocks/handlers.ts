// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.post("/todos", (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.get("/todos", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          username: "keeper",
          title: "공부 하자",
          content: "react-query 마스터 할거야",
        },
        {
          id: 2,
          username: "keeper",
          title: "운동 하자",
          content: "복근 마스터 할거야",
        },
        {
          id: 3,
          username: "keeper",
          title: "독서 하자",
          content: "마음의 양식 마스터 할거야",
        },
      ])
    );
  }),
];
