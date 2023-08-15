const request = require("supertest");
const app = require("../serverCarValue");
const EstCarValue = require("../serverCarValue");

describe("GET /", () => {
  it("should return the car values", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      { "Car Value": "$6614" },
      { "Car Value": "$12605" },
      { "Car Value": "$6607" },
      { "Car Value": "$8017" },
      { "Car Value": "$58907" },
      { error: "Negative year" },
      { error: "Wrong data type" },
    ]);
  });
});

it("Sunny day scenario", () => {
  const result = EstCarValue("Civic", 2020);
  expect(result["Car Value"]).toBe("$6600");
});

// it("Numbers only is ok", () => {
//   const result = EstCarValue("911", 2020);
//   expect(result).toEqual({ "Car Value": `$2020` });
// });

// it("Negative year", () => {
//   const result = EstCarValue("Task-Force", -987);
//   expect(result).toEqual({ error: "Negative year" });
// });

// it("Wrong data type", () => {
//   const result = EstCarValue("C200", "twenty twenty");
//   expect(result).toEqual({ error: "Wrong data type" });
// });
