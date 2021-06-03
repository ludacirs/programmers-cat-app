const END_POINT = 'https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev';


export const api = {
    async getRoot(){
        try {
            const response = await fetch(`${END_POINT}`);
            if(response.ok){
                return await response.json();
            }
        } catch (e){
            console.log(e);
        }
    },

    async getById(id){
        try {
            const response = await fetch(`${END_POINT}/${id}`);
            if(response.ok){
                return await response.json();
            }
        } catch (e){
            console.log(e);
        }
    }
}

export class getRoot {
}