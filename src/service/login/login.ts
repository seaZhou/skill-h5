import { hpLoginRequest } from '../index';
import { Account } from './types';
enum LoginApi {
  AccountLogin = 'api/public/user/login',
}
export function accountLoginRequest(account: Account) {
  console.log(account, 'account');
  return hpLoginRequest.post({
    url: LoginApi.AccountLogin,
    data: account,
  });
}
