import { expect, test } from "vitest";
import request from "supertest"
import { plusOne } from "../utils/common.js";
import { app } from "../index.js";
test("plusOne", () => {
    expect(plusOne(1)).toBe(2);
});

test('get', async () => {
   const res = await request(app).get('/').expect(200)
   expect(res.text).toBe("🤡 Hello, 鲲浪!");
})

