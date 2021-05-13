import User from "../../interfaces/User";
import { UserActions, UserActionsTypes } from "./UserActionBuilder";

export type UserStoreType = {
  user?: User
};

type StoreType = UserStoreType | null;

const INITIAL_STATE: StoreType = null;

const UserReducer = (
  state: StoreType = INITIAL_STATE,
  action: UserActions<UserActionsTypes>
): StoreType => {
  switch (action.type) {
    case 'updateUser':
      return { user: action.payload as User };
    case 'logout':
      localStorage.removeItem('token');
      return null;
    default:
      return state;
  }
}

export default UserReducer;