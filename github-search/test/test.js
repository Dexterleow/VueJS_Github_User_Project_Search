var should = require("should");
var request = require("request");
var expect = require("chai").expect;
var util = require("util");

var baseUrl_user_info = "https://api.github.com/users/dexterleow";
var baseUrl_user_project_readme = "https://api.github.com/repos/dexterleow/VueJS_Github_User_Project_Search";

describe("return user's github repository", function(){
    it("return user's github repository", function(done){
        request.get({ url: baseUrl_user_info,  headers: {
            'User-Agent': 'request'
        } },
            function(error, response, body){
                    expect(response.statusCode).to.equal(200);
                    console.log(body);
                done();
            });
    });
});

describe("return dexter's VueJS_Github readme", function(){
    it("return dexter's VueJS_Github readme", function(done){
        request.get({ url: baseUrl_user_project_readme,  headers: {
            'User-Agent': 'request'
        } },
            function(error, response, body){
                    expect(response.statusCode).to.equal(200);
                    console.log(body);
                done();
            });
    });
});
