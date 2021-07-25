import Axios from 'axios'

const baseURL = 'https://api.github.com'

const client = Axios.create({
  baseURL,
  timeout: 20000
})

client.defaults.headers.common.Accept = 'application/json'
client.defaults.headers.common['X-App-Key'] = 'xxxxxx'

// Intercept before sending HTTP requests
client.interceptors.request.use(
  (response) => {
    //   const accessToken = store(_config.app.keyAccessToken);

    // if (accessToken != null) {
    // 	const _decryptToken = cbc.app.decrypt(accessToken);
    // 	config.headers.common['Authorization'] = 'Bearer ' + _decryptToken;
    // }

    // const timestamp = bloc.get.timestamp()

    // if (bloc.state.hash != undefined && bloc.state.hash != null && bloc.state.hash != "") {
    // 	config.headers.common['X-Hash'] = cbc.app.decrypt(bloc.state.hash);
    // }

    // config.headers.common['X-Timestamp'] = timestamp;

    // if (config.method.toLowerCase() == "post") {
    // 	if (config.data != undefined) {
    // 		let hash = sha256.hmac.create(_config.api.checksumKey)
    // 		hash.update(JSON.stringify(config.data) + "|" + timestamp);

    // 		config.headers.common['X-Checksum'] = hash.hex();
    // 	}

    // } else if (config.method.toLowerCase() == "get") {
    // 	if (config.params != undefined) {
    // 		config.paramsSerializer = params => {
    // 			return qs.stringify(params)
    // 		}
    // 	}
    // }
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)
// Intercept after received HTTP requests
client.interceptors.response.use(
  (response) => {
    /**
     * you can process response and error here
     */
    // bloc.func.clearHash();
    return response
  },
  (error) => {
    //   if (error.response?.status == 401) {
    // 	bloc.func.removeUser();
    // 	bloc.func.removeToken();

    // 	_ui.notifyError(_config.app.msgUnauthorized);

    // 	router.replace({
    // 		name: _config.route.login
    // 	})
    // } else if (
    // 	error.response?.status == 500 ||
    // 	error.response?.status == 404

    // ) {
    // 	const _errorMessage = error.response?.data?.meta?.message;

    // 	if (_errorMessage.toLowerCase() == "unexpected control character found") {
    // 		bloc.func.removeToken();
    // 	}

    // 	_ui.notifyError(_errorMessage);
    // } else if (error.response?.status == 406) {
    // 	_ui.notifyError(`terjadi kesalahan (code:${error.response?.data?.meta?.message})`);
    // }

    // if (error.message === "Network Error") {
    // 	_ui.notifyError(`network error: tidak dapat terhubung ke Server`);
    // }
    return Promise.reject(error)
  }
)
export default client
