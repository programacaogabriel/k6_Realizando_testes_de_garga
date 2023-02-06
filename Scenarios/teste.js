import http from 'k6/http';

import { sleep } from 'k6';

export const options = {
  scenarios: {
    constant_load: {
      executor: "constant-arrival-rate",
      preAllocatedVUs: 10,
      rate: 10,
      timeUnit: "1m",
    },
  },
};


export default function () {

  http.get('https://netshoes.com.br');

  sleep(1);

}

