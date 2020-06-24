import { Observable } from "rxjs";
import { map } from "rxjs/operators";

const simulateGetApi = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            return {
                a: 12,
                b: 24,
                c: 26,
            }
        }, 1000);
    })

}

const observer = new Observable((subscribe) => {
    simulateGetApi().then((response)=>{
        console.log(response);
        subscribe.next(response);
        subscribe.complete();
    })
});

observer.subscribe((response)=>{
    console.log(response);
})