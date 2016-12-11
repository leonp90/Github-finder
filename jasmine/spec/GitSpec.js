describe("GitHub finder", function() {

  it("should exist requestGit", function(){
    expect( requestGit ).toBeDefined();             
  });
  it("should exist userData", function(){
    expect( userData ).toBeDefined();             
  });
  it("should exist reposData", function(){
    expect( reposData ).toBeDefined();             
  });
  it("should show error", function(){

      let messageError = document.getElementById("error")
     expect( requestGit('GET', messageError)).toBe(undefined);
   });
});
