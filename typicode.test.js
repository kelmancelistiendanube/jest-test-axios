var mockAxios = require("jest-mock-axios").default;

var typicodeFetch = require("./api/typicodes");

describe("should be fetch typicodes", () => {
  afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset();
  });

  let catchFn = jest.fn(), // callback mock success
    thenFn = jest.fn(); // callback mock error

  beforeEach(() => {
    jest.setTimeout(5000); // create delay before each it jest
  });

  it("should be instance", () => {
    expect(typicodeFetch.findPostById).toBeDefined(); // verified if defined method before call
  });

  it("find typicode with id number 1", () => {
    typicodeFetch // created fist call to original method
      .findPostById(1)
      .then(thenFn)
      .catch(catchFn);

    expect(mockAxios.get).toHaveBeenCalledWith("/posts/1"); // verified if method is called  with arguments

    // simulating a server response
    let data = {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body:
          "quia et suscipit\n" +
          "suscipit recusandae consequuntur expedita et cum\n" +
          "reprehenderit molestiae ut ut quas totam\n" +
          "nostrum rerum est autem sunt rem eveniet architecto"
      },
      mockResponse = {
        config: {},
        data,
        headers: {},
        status: 200,
        statusText: "OK"
      };

    mockAxios.mockResponse(mockResponse); // create mock response for call api

    expect(thenFn).toHaveBeenCalledWith(mockResponse); // expected succes

    expect(catchFn).not.toHaveBeenCalled(); // verified no error when api method is called
  });
});
