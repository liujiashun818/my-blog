

import switchDomain from './switchDoman.js';

const {
  baseOrigin,
} = switchDomain.getBackEndIp();
const ipHost = 'http://39.107.73.145:7001';
const baseHost = 'http://127.0.0.1:7001';

// export const queryUrl = "../dist/a.json";
export const queryArticlesUrl = `${ipHost}/api/articles`;
// export const queryArticlesUrl = `${baseHost}/api/articles`;
export const regirstUrl = `${ipHost}/api/users/signup`;
// export const regirstUrl = `${baseHost}/api/users/signup`;
export const signInUrl = `${ipHost}/api/users/signin`;
// export const signInUrl = `${baseHost}/api/users/signin`;
// export const categoriesUrl = ipHost + '/api/categories'; //分类
export const articleUrl = `${ipHost}/api/articles`; // 保存文章
// export const articleUrl = `${baseHost}/api/articles`; 
export const detailUrl = `${ipHost}/api/articles/detail`; // 获取文章详情
// export const detailUrl = `${baseHost}/api/articles/detail`; // 获取文章详情

