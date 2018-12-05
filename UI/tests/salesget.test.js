//products test
require("../static/js/all-sales")
describe("Test Get all sales", () => {
    let fetchMock;
    beforeEach(() => {
        document.body.innerHTML += `
        <div >
            <h2>Sale Record</h2>
            <p id="output"></p>
            <h3 id="total"></h3>
            <div >
                <table id="tablecontents">
                    <tr>
                        <th>Product</th>
                        <th>Number</th>
                        <th>Time Stamp</th>
                        <th>Sold by</th>
                        <th>Cost(KSH)</th>
                    </tr>
                </table>
            </div>
        </div>`;
        fetchMock = jest.spyOn(global, "fetch")
        fetchMock.mockImplementation(() => Promise.resolve({
            json: () => Promise.resolve({ status: "Success!", sales:[{
                "product_name":"nametest",
                "number_of_products":20,
                "sold_on":"34:64",
                "seller":"kwanj",
                "Amount":400
            }] })
        }))
    })

    //Tear Down
    afterEach(() => {
        fetchMock.mockRestore();
        jest.resetModules();
    })

    it("User can get all sales", async() => {
        expect(fetchMock).toHaveBeenCalledTimes(1);
        const fetchArgs = fetchMock.mock.calls[0];
        let token = 'null';
        expect(fetchArgs[0]).toBe(`https://storemanager-v2.herokuapp.com/api/v2/sales`);
        expect(fetchArgs[1]).toEqual({
            method: 'GET',
            headers: {
                'Access-Control-Request-Headers': '*',
                'Authorization': 'Bearer ' + token
            }
        })
    })
})
