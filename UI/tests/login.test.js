//Login test
require("../static/js/login")
describe("Test user login", () => {
    let fetchMock;
    let assignMock;
    beforeEach(() => {
        document.body.innerHTML += `
        <form onsubmit="event.preventDefault();">
            <div class="welcome">
                <div class="col-25"><label >Email Address</label></div>
                <div class="col-75"><input id="email" type="text"  value="email@gmail.com"></div>
                <div class="col-25"><label >Password</label></div>
                <div class="col-75"><input id="password" type="password"  value="password"></div>
                <p id="output"></p>
                <a id="submit" onclick="login()" > <input type="submit" value="login"></a>    
            </div>
        </form>`;

        fetchMock = jest.spyOn(global, "fetch")
        fetchMock.mockImplementation(() => Promise.resolve({
            json: () => Promise.resolve({ status: "Success!", token: "dummytoken" })
        }))
        assignMock = jest.spyOn(window.location, "assign")
        assignMock.mockImplementation(() => {})
    })

    //Tear Down
    afterEach(() => {
        fetchMock.mockRestore();
        assignMock.mockRestore();
        jest.resetModules();
    })

    it("User can login", async() => {
        document.getElementById("submit").click();
        expect(fetchMock).toHaveBeenCalledTimes(1);
        const fetchArgs = fetchMock.mock.calls[0];
        expect(fetchArgs[0]).toBe("https://storemanager-v2.herokuapp.com/api/v2/auth/login");
        expect(fetchArgs[1]).toEqual({
            method: "POST",
            body: JSON.stringify({
                email: "email@gmail.com",
                password: "password"
            }),
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json'
            }
        })
        await Promise.resolve().then();
        await Promise.resolve().then();
        expect(localStorage.getItem("token")).not.toBeNull();
        expect(assignMock).toHaveBeenCalledTimes(1);
        expect(assignMock.mock.calls[0][0]).toBe("products.html");
    })
})
