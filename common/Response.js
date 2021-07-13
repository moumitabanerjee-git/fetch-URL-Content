const Response = {
    _DefineResponse(statusCode = 500, response = {}) {
        return {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Origin': '*',
            },
            statusCode,
            statusText: response.error !== undefined ? response.error : response.statusText,
            body: response.error === undefined ? JSON.stringify(response.data) : null,
        };
    },

    OK(data = {}) {
        return this._DefineResponse(200, data);
    },
    CREATED(data = {}) {
        return this._DefineResponse(201, data);
    },
    ACCEPTED(data = {}) {
        return this._DefineResponse(202, data);
    },
    NO_CONTENT(data = {}) {
        return this._DefineResponse(204, data);
    },


    BAD_REQUEST(data = {}) {
        return this._DefineResponse(400, {
            error: data
        });
    },
    UNAUTHORISED(data = {}) {
        return this._DefineResponse(401, {
            error: data
        });
    },
    FORBIDDEN(data = {}) {
        return this._DefineResponse(403, {
            error: data
        });
    },
    NOT_FOUND(data = {}) {
        return this._DefineResponse(404, {
            error: data
        });
    },
    METHOD_NOT_ALLOWED(data = {}) {
        return this._DefineResponse(405, {
            error: data
        });
    },
    NOT_ACCEPTABLE(data = {}) {
        return this._DefineResponse(406, {
            error: data
        });
    },
    UNSUPPORTED_MEDIA_TYPE(data = {}) {
        return this._DefineResponse(415, {
            error: data
        });
    },


    INTERNAL_SERVER_ERROR(data = {}) {
        return this._DefineResponse(500, {
            error: data
        });
    },
    NOT_IMPLEMENTED(data = {}) {
        return this._DefineResponse(501, {
            error: data
        });
    },
    BAD_GATEWAY(data = {}) {
        return this._DefineResponse(502, {
            error: data
        });
    },
    SERVICE_UNAVAILABLE(data = {}) {
        return this._DefineResponse(503, {
            error: data
        });
    },
    GATEWAY_TIMEOUT(data = {}) {
        return this._DefineResponse(504, {
            error: data
        });
    }
};

module.exports = Response;