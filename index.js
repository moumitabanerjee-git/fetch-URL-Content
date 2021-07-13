const axios = require("axios");
const HttpResponse = require('./common/Response')

/**
 *
 * @param URLs - The array of URL Strings
 * @returns {Promise}- return the content of urls in a promise
 */

function fetchURLContent(URLs) {
    return Promise.all(URLs.map(fetchData));
}

function fetchData(URL) {
    return axios
        .get(URL)
        .then(function (response) {
            if (Object.keys(response.data).length === 0) {
                return HttpResponse.NO_CONTENT(response)
            } else {
                return HttpResponse.OK(response);
            }
        })
        .catch(function (error) {
            if (error.response) {
                //if request is made and server responded with a status code that falls out of range
                if (error.response.status === 500)
                    return HttpResponse.INTERNAL_SERVER_ERROR(error.response.statusText);
                else if (error.response.status === 404) {
                    return HttpResponse.NOT_FOUND(error.response.statusText)
                } else if (error.response.status === 400) {
                    return HttpResponse.BAD_REQUEST(error.response.statusText)
                } else if (error.response.status === 403) {
                    return HttpResponse.FORBIDDEN(error.response.statusText)
                } else if (error.response.status === 401) {
                    return HttpResponse.UNAUTHORISED(error.response.statusText)
                } else if (error.response.status === 503) {
                    return HttpResponse.SERVICE_UNAVAILABLE(error.response.statusText)
                } else if (error.response.status === 502) {
                    return HttpResponse.BAD_GATEWAY(error.response.statusText)
                } else if (error.response.status === 415) {
                    return HttpResponse.UNSUPPORTED_MEDIA_TYPE(error.response.statusText)
                }
            } else if (error.request) {
                // if request is made but server did not respond. For eg. Like Network error
                const errorObj = {
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Methods': '*',
                        'Access-Control-Allow-Origin': '*',
                    },
                    statusCode: error.request.statusCode,
                    statusText: error.request.statusText
                }
                return errorObj;
            } else {
                // Something other than these error happens
                return error;
            }
        });
}

module.exports = fetchURLContent;
