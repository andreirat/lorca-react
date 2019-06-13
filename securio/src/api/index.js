import { api } from '../config';
import { post } from '../utils/superagent';

// export default data => post(`${api}/subscribe`, data, null);
export default data => {
  
  post(`${api}/user/register`, data, null);
}
