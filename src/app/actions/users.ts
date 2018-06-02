import { createAction } from 'redux-actions';
import { UserModel } from 'app/models';

export namespace UserActions {
  export enum Type {
    LOGIN_USER = 'LOGIN_USER',
    LOGOUT_USER = 'LOGOUT_USER',
    EDIT_USER = 'EDIT_USER',
    IS_AUTHENTICATED = 'IS_AUTHENTICATED'
  }

  export const loginUser = createAction<PartialPick<UserModel, 'username'>>(Type.LOGIN_USER);
  export const logoutUser = createAction<UserModel['token']>(Type.LOGOUT_USER);
  export const isAuthentificated = createAction<UserModel>(Type.IS_AUTHENTICATED);
}

export type UserActions = Omit<typeof UserActions, 'Type'>;
