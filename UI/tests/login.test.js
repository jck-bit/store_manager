//Login test
require("../static/js/login")
describe("Test user login", () => {
    let fetchMock;
    beforeEach(() => {
        document.body.innerHTML += `
        <form id="login">
            <div class="welcome">
                <div class="col-25"><label >Email Address</label></div>
                <div class="col-75"><input id="email" type="text"  value="email@gmail.com"></div>
                <div class="col-25"><label >Password</label></div>
                <div class="col-75"><input id="password" type="password"  value="password"></div>
                <p id="output"></p>
                <a > <input type="submit" style="background-color: #0BC474" value="LogIn"></a>    
            </div>
        </form>`;
    
        fetchMock = jest.spyOn(global, "fetch")
        fetchMock.mockImplementation(() => Promise.resolve({
          json: () => Promise.resolve({Message: "Login successful, Welcome Promaster"})}))
    })
    
    //Tear Down
    afterEach(() => {
        fetchMock.mockRestore();
        jest.resetModules();
    })
    
    it("Registered user login and assign to the menu page.", async() => {
        document.getElementById("btnsubmit").click();
        expect(fetchMock).toHaveBeenCalledTimes(1);
        const fetchArgs = fetchMock.mock.calls[0];
        expect(fetchArgs[0]).toBe("https://morning-springs-84037.herokuapp.com/https://pro-fast-food-fast-api.herokuapp.com/api/v2/auth/login");
        expect(fetchArgs[1]).toEqual({
            method: "POST",
            body: JSON.stringify({
                username:"Promaster",
                password: "Promaster2018"
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        await Promise.resolve().then();
        expect(localStorage.getItem("user")).toEqual("Promaster");
        expect(localStorage.getItem("token")).not.toBeNull();
        expect(document.getElementById("error").innerHTML).toBe("Login successful, Welcome Promaster");
        await Promise.resolve().then();
        expect(assignMock).toHaveBeenCalledTimes(1);
        expect(assignMock.mock.calls[0][0]).toBe("/menu");
    })
})