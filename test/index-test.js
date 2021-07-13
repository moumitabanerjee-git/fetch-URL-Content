const {describe, it} = require("mocha");
const should = require('chai').should();
const fetchApi = require('../index');

describe('First Test suit ', function () {
    it('Testing for all correct URLs', () => {
        const arrayOfURLs = ['https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
            'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
        ]
        return fetchApi(arrayOfURLs).then(urlContent => {
            urlContent.should.be.a('array');
            urlContent.should.have.lengthOf(2);
            describe('Testing First suit each URL', () => {
                urlContent.forEach((eachURlContent, index) => {
                    it('Testing URL Content[' + index + ']', () => {
                        eachURlContent.should.be.a('object');
                        eachURlContent.should.have.property('body').to.not.empty;
                        eachURlContent.should.have.property('body').to.not.equals(null);
                        eachURlContent.should.have.property('headers');
                        eachURlContent.should.have.property('statusCode').equals(200);
                    })
                })
            })
        });
    });
})

describe('Second Test suit ', function () {
    it('Testing for partial correct URLs', () => {
        const arrayOfURLs = ['https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
            'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd', //Wrong Url
        ];
        return fetchApi(arrayOfURLs).then(urlContent => {
            urlContent.should.be.a('array');
            urlContent.should.have.lengthOf(2);
            describe('Testing Second suit each URL', () => {
                it('Testing URL[0]', () => {
                    urlContent[0].should.be.a('object');
                    urlContent[0].should.have.property('statusCode').equals(200);
                })
                it('Testing URL[1]', () => {
                    urlContent[1].should.be.a('object');
                    urlContent[1].should.have.property('statusCode').equals(403);
                    urlContent[1].should.have.property('body').equals(null);
                })
            })
        })
    })
})

describe('Third Test suit ', function () {
    it('Testing for URLs with empty response body', () => {
        const arrayOfURLs = ['https://jsonplaceholder.typicode.com/todos/2',
            'https://jsonplaceholder.typicode.com/todos/3'];

        return fetchApi(arrayOfURLs).then(urlContent => {
            const emptyResponseObject = {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Methods': '*',
                    'Access-Control-Allow-Origin': '*',
                },
                statusCode: 204,
                statusText: 'Ok',
                body: {},
            };
            urlContent.push(emptyResponseObject);
            urlContent.should.be.a('array');
            urlContent.should.have.lengthOf(3);
            describe('should pass for empty response', () => {
                it('Testing for empty response body', () => {
                    urlContent[2].should.be.a('object');
                    urlContent[2].should.have.property('statusCode').equals(204);
                    urlContent[2].should.have.property('body').to.be.empty;
                })
            })
        })
    })
})