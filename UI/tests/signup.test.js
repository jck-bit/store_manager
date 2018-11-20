//Signup test
require("../static/js/signup")
describe("store registration",() => {
    let fetchMock;
    beforeEach(() => {
        document.body.innerHTML += `
        <form id="addStore"  >
            <div class="welcome">
                <div class="col-25" ><label >Store Name</label></div>
                <div class="col-75"><input id="storename" type="text" value="ctrimtest"></div>
                <div class="col-25"><label >Type of Store</label></div>
                <div class="col-75"><input id="category" type="text" value="categorytest"></div>
                <div class="col-75"><label >Email Address</label></div>
                <div class="col-75"><input id="email" type="text"  value="ctrimtest@gmail.com"></div>
                <div class="col-25"><label >Password</label></div>
                <div class="col-75"><input id="password" type="password"  value="ctrimtestpass"></div>
                <div class="col-75"><label >Confirm Password</label></div>
                <div class="col-75"><input id="confirmpassword" type="password"  value="ctrimtestpass"></div>
                <p id="output"></p>
                <a id="submit" onclick="addStore()"> <input type="submit" value="CreateStore"></a>
                    
            </div>
        </form>`;

    fetchMock = jest.spyOn(global, "fetch")
    fetchMock.mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({status: "Success!",message:"Store successfully created"})}))
})

//Tear Down
afterEach(()=>{
    fetchMock.mockRestore();
    jest.resetModules();
})

//Test for valid user registration
it("user can add a store.", async() => {
    document.getElementById("submit").click();
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const fetchArgs = fetchMock.mock.calls[0];
    expect(fetchArgs[0]).toBe("https://storemanager-v2.herokuapp.com/api/v2/signup");
    expect(fetchArgs[1]).toEqual({
        method: "POST",
        body: JSON.stringify({
            "name":"ctrimtest",
            "category":"categorytest",
            "email":"ctrimtest@gmail.com",
            "password":"ctrimtestpass"}),
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type':'application/json'
        }
    })
    await Promise.resolve().then();
    expect(document.getElementById("output").innerHTML).toBe("Store successfully created");
    })
})

