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
  rest.get("/next-todo", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 4,
        username: "keeper",
        title: "다음달 독서",
        content: "다음달에 독서왕",
      })
    );
  }),
  rest.get("/friends-todos", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          username: "BF1",
          title: "하루 운동 1시간",
          content: "다음달에 운동왕",
        },
        {
          id: 2,
          username: "BF3",
          title: "하루 독서 1시간",
          content: "다음달에 독서왕",
        },
        {
          id: 3,
          username: "BF2",
          title: "하루 공부 1시간",
          content: "다음달에 공부왕",
        },
        {
          id: 4,
          username: "BF1",
          title: "하루 영양제 섭취",
          content: "다음달에 영양왕",
        },
      ])
    );
  }),
  rest.get("/friends-todos/filter", (req, res, ctx) => {
    const username = req.url.searchParams.get("username");

    return res(
      ctx.status(200),
      ctx.json(
        [
          {
            id: 1,
            username: "BF1",
            title: "하루 운동 1시간",
            content: "다음달에 운동왕",
          },
          {
            id: 2,
            username: "BF3",
            title: "하루 독서 1시간",
            content: "다음달에 독서왕",
          },
          {
            id: 3,
            username: "BF2",
            title: "하루 공부 1시간",
            content: "다음달에 공부왕",
          },
          {
            id: 4,
            username: "BF1",
            title: "하루 영양제 섭취",
            content: "다음달에 영양왕",
          },
        ].filter((li) => li.username === username)
      )
    );
  }),
];
