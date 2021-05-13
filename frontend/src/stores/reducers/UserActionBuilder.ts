import User from "../../interfaces/User";

interface _UserActions {
  updateUser: User;
  logout: null;
}

export type UserActionsTypes = keyof _UserActions;

export interface UserActions<P extends UserActionsTypes> {
  type: P;
  payload: _UserActions[P];
}

const UserActionBuilder = {

  buildUpdateUser: (
    data: User
  ): UserActions<'updateUser'> => ({
    type: 'updateUser',
    payload: data
  }),

  buildLogout: (): UserActions<'logout'> => ({
    type: 'logout',
    payload: null
  }),

};

export default UserActionBuilder;