describe("triangle", function() {
  it("compares the length of 3 sides and returns false if it's not a valid triangle", function() {
    expect(triangle(2, 2, 8)).to.equal(false);
  });

  it("returns the number of equal sides", function() {
    expect(triangle(5, 5, 8)).to.equal(2);
  });
});
