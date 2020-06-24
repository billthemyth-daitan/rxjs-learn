import { Observable } from 'rxjs';

const observable = Observable.create((observer : any )=>{
    observer.next('Hue')
});

observable.subscribe((obs:any)=>{
    console.log(obs)
});
