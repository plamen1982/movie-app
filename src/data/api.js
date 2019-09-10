/**
 * Create a customable closure for fetching data based on the CRUD methods.
 * @param {String} method
 * @returns { Function }
 * @example const get = requester("get");
 */
const requester = method => {
    const getAuthHeader = () => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNWUzMzJmYzYxMDVjMDAwNGJmN2ZiOSIsImlhdCI6MTU2ODA5NTUyMywiZXhwIjoxNTY4NzAwMzIzfQ.ioMYnX7zCmRKXfmPJvMSL5ErpGAtWXAjGUbzeh7fHYQ';
        return { "x-access-token": token };
    };

    return async (url, data, options) => {
        const authHeader = getAuthHeader();

        const response = await fetch(url, {
            method,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                ...authHeader
            },
            body: JSON.stringify(data),
            ...options,
        });
        return response.json();
    };
};

/**
 * get data at url
 * @param {String} url
 * @param {Object} options
 * @returns {Promise} with the data from the api at this url
 * @example get('https://afternoon-chamber-67331.herokuapp.com/movies');
 */
export const get = requester("get");

/**
 * post data at url
 * @param {String} url
 * @param {Object} data
 * @param {Object} options
 * @returns {Promise} with the data from the api at this url
 * @example post('https://afternoon-chamber-67331.herokuapp.com/movies', { key: value });
 */
export const post = requester("post");

/**
 * put data at url
 * @param {String} url
 * @param {Object} data
 * @param {Object} options
 * @returns {Promise} with the data from the api at this url
 * @example put('https://afternoon-chamber-67331.herokuapp.com/movies/{movieID}', { key: value });
 */
export const put = requester("put");

/**
 * delete data at url
 * @param {String} url
 * @param {Object} options
 * @returns {Promise} with the data from the api at this url
 * @example remove('https://afternoon-chamber-67331.herokuapp.com/movies/{movieID}');
 */
export const remove = requester("delete");
