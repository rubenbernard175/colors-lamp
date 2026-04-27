test("color JSON has required fields", () => {
  const color = {
    id: 1,
    name: "blue",
    hex: "#0000ff"
  };

  expect(color).toHaveProperty("id");
  expect(color).toHaveProperty("name");
  expect(color).toHaveProperty("hex");
});