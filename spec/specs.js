describe("titleCase",function() {
    it('capitalizes the first letter of a word',function() {
      expect(titleCase("cat")).to.equal("Cat");
    });
    it('capitalizes the first letter of each word in a two word title', function() {
      expect(titleCase("cat soup")).to.equal("Cat Soup");
    });
    it('capitalizes the first letter of each word excpet for certain words', function(){
      expect(titleCase("cat the soup")).to.equal("Cat the Soup");
    });
    it('will always capitalize the first word of a title', function() {
      expect(titleCase("the cat pizza")).to.equal("The Cat Pizza");
    });
    it('will not capitalize non-capitalized words twice', function() {
      expect(titleCase("the cat and the hat")).to.equal("The Cat and the Hat");
    });
    it('will take any capitalization and make it correct', function() {
      expect(titleCase("the cAt piZza")).to.equal("The Cat Pizza");
    });
});
