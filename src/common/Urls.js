import Env from './Env';

const CURRENT_ENV = Env.CURR_ENV;

const BASE_URL = {
  LOCAL: 'http://localhost:3000',
  STAGE: '',
  PREPROD: '',
  PROD: ''
};

//const JOBLISTINGSERVICE = `${BASE_URL[CURRENT_ENV]}`;

const FRIENDLIST = `${BASE_URL[CURRENT_ENV]}`;

export const getFriendAPI = () => ({
  GET_FRIEND: `${FRIENDLIST}/api/friends`
});


