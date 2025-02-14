import fetch from 'node-fetch';

type Response = {
    id: string,
    author: string,
    width: number,
    height: number,
    url: string
    download_url: string,
}

const getImageAPI = async (): Promise<Response[]> => {
    const response = await fetch("https://picsum.photos/v2/list");
    if(response.status !== 200) {
        throw Error(`Status code ${response.status} received.`);
    }          
    return(response.json() as Promise<Response[]>);
}
