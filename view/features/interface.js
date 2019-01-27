

import switchDomain from './switchDoman.js';

const {
  baseOrigin,
} = switchDomain.getBackEndIp();

// export const queryUrl = "../dist/a.json";
// export const queryArticlesUrl = 'http://127.0.0.1:7001' + '/api/articles';
export const queryArticlesUrl = 'http://39.107.73.145:7001' + '/api/articles';
// export const regirstUrl = 'http://127.0.0.1:7001' + '/api/users/signup';
export const regirstUrl = 'http://39.107.73.145:7001' + '/api/users/signup';
// export const signInUrl = 'http://127.0.0.1:7001' + '/api/users/signin';
export const signInUrl = 'http://39.107.73.145:7001' + '/api/users/signin';

