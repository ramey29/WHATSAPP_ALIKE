import Proteus from '../common/Proteus';
import { getFriendAPI } from '../common/Urls';

const getFriend = () => {
  return Proteus().get(getFriendAPI().GET_FRIEND);
};

export default {
  getFriend
};
