const initState = [];

export default function app(state = initState, action){
    
    switch (action.type){
        case 'GET_BASE':

        return{
            ...action.data,
        }

        default: return state;

    }
}