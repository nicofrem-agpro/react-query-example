import { rest } from "msw";
import { faker } from "https://cdn.skypack.dev/@faker-js/faker";

const users = [...Array(10)].map((_, i) => ({
  id: i + 1,
  name: faker.name.findName(),
  avatar: faker.image.avatar(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber(),
}));

const description = faker.lorem.paragraph();

export const handlers = [
  rest.get("http://localhost:3030/users", (_, res, ctx) => {
    return res(ctx.status(200), ctx.delay(2000), ctx.json(users));
  }),
  rest.get("http://localhost:3030/users/:id", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(2000),
      ctx.json({
        ...users.find(({ id }) => String(id) === req.params.id),
        description,
      })
    );
  }),
];
