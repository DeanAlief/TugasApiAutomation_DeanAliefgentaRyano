const { getMethod, getMethod2, getMethod3, postMethod, putMethod, patchMethod, deleteMethod } = require ("../apiServer/apiObjects");
//test suite
describe("Tugas Supertest Restful API", function() {
    let id;
        //Post Test
        it("Testing POST", async function () {
            id = await postMethod(); 
        });

        //Get Test after post
        it("testing GET after POST", async function () {
            await getMethod(id); 
        });
        
        //Put Test
        it("Testing PUT", async function () {
            await putMethod(id); 
        });

        //Get Test after put
        it("Test GET after PUT", async function () {
            await getMethod2(id); 
        });

        //Patch test
        it("Testing PATCH", async function () {
            await patchMethod(id); 
        });

        //Get Test after patch
        it("Test GET after Patch", async function () {
            await getMethod3(id); 
        });

        //Delete Test
        it("test DELETE from function", async function () {
            await deleteMethod(id); 
        });
});