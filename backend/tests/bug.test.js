const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");
const Bug = require("../models/Bug");

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterEach(async () => {
  await Bug.deleteMany();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Bug API", () => {
  it("should create a bug", async () => {
    const res = await request(app)
      .post("/api/bugs")
      .send({ title: "Test bug", description: "A test", status: "open" });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("Test bug");
  });

  it("should fetch all bugs", async () => {
    await Bug.create({ title: "Bug 1", description: "desc" });
    const res = await request(app).get("/api/bugs");
    expect(res.body.length).toBeGreaterThan(0);
  });
});
