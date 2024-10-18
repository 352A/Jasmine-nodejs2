const request = require("supertest");
const app = require("../..");

const req = request(app);

describe("root routes:", () => {
  it("get req(/): should get todos = [] ", async () => {
    let res = await req.get("/");

    expect(res.body.data).toEqual([]);
  });
  it("get req(/asd): should get not found", async () => {
    let res = await req.get("/asd");

    expect(res.status).toBe(404);
    expect(res.body.message).toBe("Not found");
  });
});
