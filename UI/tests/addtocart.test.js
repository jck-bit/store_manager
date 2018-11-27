//products test
require("../static/js/addtocart")
describe("Test Add Product To Cart", () => {
    let fetchMock;
    beforeEach(() => {
        document.body.innerHTML += `
        <form  onsubmit="event.preventDefault();">
            <div id="number" >
                <div class="col-75"><label >Number of items</label></div>
                <div class="col-75"><input id="cnumber" placeholder="i.e 4" value=null></div>
                <p id="output2"></p>
                <a id="submit" onClick="cartAdd();" ><input type="submit" value="AddtoCart"></a>
            </div>
        </form>`;
        fetchMock = jest.spyOn(global, "fetch")
        fetchMock.mockImplementation(() => Promise.resolve({
            json: () => Promise.resolve({ status: "Success!", message: "Added to cart" })
        }))
    })

    //Tear Down
    afterEach(() => {
        fetchMock.mockRestore();
        jest.resetModules();
    })

    it("User can add a product to cart", async() => {
        document.getElementById("submit").click();
        expect(fetchMock).toHaveBeenCalledTimes(1);
        const fetchArgs = fetchMock.mock.calls[0];
        let productId = 'null';
        let token = 'null';
        expect(fetchArgs[0]).toBe(`https://storemanager-v2.herokuapp.com/api/v2/products/${productId}`);
        expect(fetchArgs[1]).toEqual({
            method: 'POST',
            headers: {
                'Content-type':'application/json',
                'Authorization': 'Bearer '+ token
            },
            body:JSON.stringify({"number":Number(number)})
            })
        await Promise.resolve().then();
        await Promise.resolve().then();
        expect(document.getElementById("output2").innerHTML).toBe("Added to cart");
    })
})
