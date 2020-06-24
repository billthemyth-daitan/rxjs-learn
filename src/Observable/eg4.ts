import { Observable } from "rxjs";


const simulateGetApi = async () => {
    return new Promise((resolve) => {
        setTimeout((() => {
            resolve(
                {
                    a: 12,
                    b: 24,
                    c: 26,
                })
        }), 1000)
    });
}


const observer = new Observable((subscribe) => {
    simulateGetApi().then((response) => {
        subscribe.next(response)
    })
});

observer.subscribe((response) => {
    console.log(response);
})

