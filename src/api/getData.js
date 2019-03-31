import axios from 'axios'

/**
 * 跨域访问测试
 */
export const crossDomain = () => axios.get('/api/Ocean863Web_MAIN/AjaxHandler/FirstPageHandler.ashx?flag=getplans');

/**
 * 登录
 */
//export const login = (userName, pwd) => axios.post('/user/login', { userName: userName, pwd: pwd });
export const login = (userName, pwd) => new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (userName == 'admins' && pwd == '123456') {
      resolve({
        status: '1', statusText: '成功',
        data: { Status: 1, Data: { id: '1', name: 'admins' }, Msg: '' },
      });
    } else {
      reject('账号密码错误');
    }
  }, 2000);
});

/**
 * 根据ID获取用户信息
 */
//export const getUserInfoById = id => axios.get('/user/getUserInfo', { params: { id: id } });
export const getUserInfoById = id => new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (id > 0) {
        resolve({
          status: '1', statusText: '成功',
          data: { Status: 1, Data: { id: '1', name: 'admins' }, Msg: '' },
        });
    } else {
      reject('用户不存在');
    }
  }, 2000);
});