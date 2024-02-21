const request = require ("supertest"); //import supertest 
// const path = require("path");
const {expect} = require ("chai"); //import chai
const baseUrl = require("../globalVariable/baseUrl");

const url = `${baseUrl}`; //global variable

async function postMethod () {
    const response = await request(url)
    .post("/objects")
    .send({
            name: "Dean Aliefgenta Ryano",
            data: {
               gender: "Male",
               age: 28,
               telpon : 628221234567
            }
    });
    //Assertion/verivikasi status
    expect(response.status).to.equal(200);
    expect(response.body.name).to.equal("Dean Aliefgenta Ryano");
    expect(response.body.data.gender).to.equal("Male");
    expect(response.body.data.age).to.equal(28);
    expect(response.body.data.telpon).to.equal(628221234567);

    expect(response.body.createdAt).to.not.be.null;
    
    const id = response.body.id;
    console.log("id after POST :", id);
    return id;
}; 

async function getMethod (id) {
    const response = await request(url)
    .get(`/objects/${id}`);
    //Assertion/verivikasi status
    expect(response.status).to.equal(200);
    expect(response.body.id).to.equal(id);
    expect(response.body.name).to.equal("Dean Aliefgenta Ryano");
    expect(response.body.data.gender).to.equal("Male");
    expect(response.body.data.age).to.equal(28);
    expect(response.body.data.telpon).to.equal(628221234567);
    console.log(response.body); 
}
      
async function putMethod (id) {
    const response = await request(url)
    .put(`/objects/${id}`)
    .send({
            name: "Ainun Hasibuan",
            data: {
                gender: "Female (PUT)",
                telpon: 62887654321
            }
    });
    //Assertion/verivikasi status
    expect(response.status).to.equal(200);
    expect(response.body.name).to.equal("Ainun Hasibuan");
    expect(response.body.data.gender).to.equal("Female (PUT)");
    expect(response.body.data.telpon).to.equal(62887654321);


}

async function getMethod2 (id) {
    const response = await request(url)
    .get(`/objects/${id}`);
    //Assertion/verivikasi status
    expect(response.status).to.equal(200);
    expect(response.body.id).to.equal(id);
    expect(response.body.name).to.equal("Ainun Hasibuan");
    expect(response.body.data.gender).to.equal("Female (PUT)");
    console.log(response.body); 
}

async function patchMethod (id) {
    const response = await request(url)
    .patch(`/objects/${id}`)
    .send({
            "name" : "Dean (Patched)"
    });
    //Assertion/verivikasi status
    expect(response.status).to.equal(200);
    expect(response.body.name).to.equal("Dean (Patched)");
    
}

async function getMethod3 (id) {
    const response = await request(url)
    .get(`/objects/${id}`);
    //Assertion/verivikasi status
    expect(response.status).to.equal(200);
    expect(response.body.id).to.equal(id);
    expect(response.body.name).to.equal("Dean (Patched)");
    expect(response.body.data.gender).to.equal("Female (PUT)");
    expect(response.body.data.telpon).to.equal(62887654321);
    console.log(response.body); 
}


async function deleteMethod (id) {
    const response = await request(url)
    .delete(`/objects/${id}`);
    
    //Assertion/verivikasi status
    expect(response.body.message).to.equal(`Object with id = ${id} has been deleted.`);
    // expect(response.body.error).to.equal(`object with id = ${id} was not found.`);
}


module.exports = {getMethod, getMethod2, getMethod3, postMethod, putMethod, patchMethod, deleteMethod};