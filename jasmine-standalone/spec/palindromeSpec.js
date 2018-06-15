describe('palindromes', function() {
  it('Works with a single word', function() {
    expect(palindrome('racecar')).toEqual(true);
  });
  it('Works with an ! or other punctuation', function() {
    expect(palindrome('Racecar!')).toEqual(true);
  });
  it('Works with multiple words', function() {
    expect(palindrome('A car, a man, a maraca.')).toEqual(true);
  });
  it('Works with multiple words (test 2)', function() {
    expect(palindrome('Animal loots foliated detail of stool lamina.')).toEqual(true);
  });
  it('Works when a non-palidrome is passed', function() {
    expect(palindrome('JavaScript and Java make the ultimate developer.')).toEqual(false);
  });

});

