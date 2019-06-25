import Env from './Env';

const CURRENT_ENV = Env.CURR_ENV;

const BASE_URL = {
  LOCAL: '',
  STAGE: '',
  PREPROD: '',
  PROD: ''
};

//const JOBLISTINGSERVICE = `${BASE_URL[CURRENT_ENV]}`;

const FRIENDLIST = `${BASE_URL}`;

export const getJoblistingAPI = () => ({
  GET_FRIEND: `${FRIENDLIST}/api/listfriends`
});


