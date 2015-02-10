describe("anagram", function() {
  it("checks a word against the master word", function() {
    expect(anagram("god", ["dog"])).to.eql(["dog"]);
  });

  it("checks a words against multiple words", function() {
    expect(anagram("boat", ["toab", "punt", "abot"])).to.eql(["toab", "abot"]);
  });

  it("checks for partial matches", function() {
    expect(anagram("path", ["hat"])).to.eql(["hat"]);
  });
});
