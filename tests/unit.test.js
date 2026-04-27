function formatColor(color) {
  return color.trim().toLowerCase();
}

test("formats color correctly", () => {
  expect(formatColor(" Blue ")).toBe("blue");
});