describe("triangle", function() {
  it("compares the length of 3 sides and returns false if it's not a valid triangle", function() {
    expect(triangle(2, 2, 8)).to.equal(false);
  });
});
