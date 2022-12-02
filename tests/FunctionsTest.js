describe("Closures and Scope - ",function(){
  var HTMLElements = {};
  document.getElementById = jasmine.createSpy('HTML Element').and.callFake(function(ID) {
    if(!HTMLElements[ID]) {
        var newElement = document.createElement('div');
        HTMLElements[ID] = newElement;
    }
    return HTMLElements[ID];
  });

  const arrayOfNumbers = [1,2,3,4,5,6];
  const notPresentItem = 9;
  const presentItem = 4;

  var createPopAttributes;
  beforeEach(function() {
    createPopAttributes = {
      title: document.createElement('h3'),
      currIndex: -1000000,
      check: false,    
    };
  });

  it("Define a function: createPop()", function(){
    expect(typeof createPop).toBe("function");
  });

  it("Initialize the attributes with values as -> currIndex:-1000000, title:document.createElement('h3'), check:false", function() {
    expect(createPopAttributes).toEqual(jasmine.objectContaining({
      currIndex:-1000000,
      title: document.createElement('h3'),
      check: false
    }));
  });

  it("Return `The item is not present and is at index -1000000`, when item is not present in the given array", function(){
    const dummy = createPop(arrayOfNumbers,notPresentItem);

    actualResult = `The item is not present and is at index -1000000`;

    expectedResult = dummy()

    expect(actualResult).toEqual(expectedResult);
  })

  it("Return `The item is present and is at index {the index of that item}`, when item is present in the given array", function(){
    const dummy = createPop(arrayOfNumbers,presentItem);

    actualResult = `The item is present and is at index 3`;

    expectedResult = dummy()
    
    expect(actualResult).toEqual(expectedResult);
  })
  
});

