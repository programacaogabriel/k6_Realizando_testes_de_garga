
import http from 'k6/http';
import { sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";


//Carga Constante
export const options = {
    vus: 40,
    duration: '20m'
}


export default function () {

    http.get('https://netshoes.com.br');

    sleep(1);

}
export function handleSummary(data) {
    return {
        "summaryCsv.html": htmlReport(data),
    };
}