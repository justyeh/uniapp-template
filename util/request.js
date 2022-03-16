const baseUrl = "https://dev.aikangcloud.com";


function request(requestObject = {}, config = {}) {
  requestObject.url = baseUrl + requestObject.url;
  return new Promise((resolve, reject) => {
    uni.request({
      ...requestObject,
      success(res) {
        handleQequestSuccess(res, resolve, reject, config);
      },
      fail(error) {
        handleQequestError(error, reject, config);
      },
    });
  })
}

// 请求成功处理
function handleQequestSuccess(res, resolve, reject, config) {
  const {
    retcode,
    errMsg = "请求失败"
  } = res.data;
  if (retcode === "0000") {
    resolve(res.data);
    return;
  }
  if (retcode === "399") {
    uni.redirectTo({
      url: "/pages/login/index",
    });
    return;
  }
  config.isNotify &&
    uni.showToast({
      icon: "fail",
      title: errMsg,
    });
  return reject(new Error(errMsg));
}

// 请求失败处理
function handleQequestError(error, reject, config) {
  if (error.toString().indexOf("Error: timeout") !== -1) {
    config.isNotify &&
      uni.showToast({
        icon: "fail",
        title: "网络连接异常，请检查网络",
      });
    reject(error);
    return;
  }
  if (error && error.message === "interrupt") {
    reject(error);
    return;
  }
  config.isNotify &&
    uni.showToast({
      icon: "fail",
      title: "网络请求错误",
    });
  reject(error);
}

// post from请求
export function formRequest(url, data, config = {}) {
  return request({
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      url,
      data,
    },
    config
  );
}

// post json请求
export function jsonRequest(url, data, config = {}) {
  return request({
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      url,
      data,
    },
    config
  );
}

// get请求
export function getRequest(url, params, config = {}) {
  return request({
      method: "GET",
      url,
      params,
    },
    config
  );
}
