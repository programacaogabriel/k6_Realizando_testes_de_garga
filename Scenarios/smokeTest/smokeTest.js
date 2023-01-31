/*Smoke testing ou teste de fumaça são testes básicos que verificam as funcionalidade básicas da aplicação, 
é um processo que deve ser executado de 
forma rápida para determinar se o build ou a compilação da aplicação realizada está estável ou não. 
*/


import http from 'k6/http';
import { sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  vus: 1,
  duratiom: '1m'
}

export default function () {

  http.get('https://netshoes.com.br');

  sleep(1);

}
export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}