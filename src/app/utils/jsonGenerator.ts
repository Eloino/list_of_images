import { ItemList } from "../model/list";

export const generateJson = (numOfElelement: number, withImg: number, heigthImg: number): ItemList[]  => {
    let arra: ItemList[] = [];
    for (let index = 0; index < numOfElelement; index++) {
        let indexId: number = index + 1;
        let numOfCaracters: number = 20;
        let urlPhoto = `https://picsum.photos/id/${index}/${withImg}/${heigthImg}`;
        let text = generateRandomString(numOfCaracters);
        const element: ItemList = {
            id: indexId,
            photo: urlPhoto,
            text: text
        };
        arra.push(element); 
    }
    return arra;
}

export const  generateRandomString = (num: number): string => {
    var result:string = '';
    var characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength: number = characters.length;
    for ( var i = 0; i < num; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}