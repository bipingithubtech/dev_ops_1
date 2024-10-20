// app.test.js
const request = require("supertest");
const { app, server } = require("./app");

describe("GET /", () => {
  afterAll(() => {
    server.close(); // Close the server after tests are done
  });

  it("should return hello world", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("hello world");
  });
});
