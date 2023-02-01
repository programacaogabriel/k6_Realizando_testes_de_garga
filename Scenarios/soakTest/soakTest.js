
import http from 'k6/http';
import { sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";


export const options = {
    stages: [
        { duration: '2m', target: 100 },
        { duration: '1h5m', target: 100 },
        { duration: '2m', target: 0 },

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