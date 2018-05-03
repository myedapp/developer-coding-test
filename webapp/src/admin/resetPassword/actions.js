import { createAsyncAction } from '../../common/helpers';
import RESET_PASSWORD from './constants/actionTypes';

const resetPassword = createAsyncAction(RESET_PASSWORD);

export default resetPassword;
