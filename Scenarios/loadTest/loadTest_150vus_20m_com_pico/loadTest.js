
import http from 'k6/http';
import { sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";


//Carga variavel
export const options = {
    stages: [
        { duration: '5m', target: 150 },
        { duration: '10m', target: 150 },
        { duration: '5m', target: 0 }

    ]
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