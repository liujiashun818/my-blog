

import switchDomain from './switchDoman.js';

const {
  baseOrigin,
} = switchDomain.getBackEndIp();

// export const queryUrl = "../dist/a.json";
export const queryArticlesUrl = 'http://127.0.0.1:7002' + '/api/articles';
export const regirstUrl = 'http://127.0.0.1:7002' + '/api/users/signup';
export const signInUrl = 'http://127.0.0.1:7002' + '/api/users/signin';

