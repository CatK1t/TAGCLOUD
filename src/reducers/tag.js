const initState = [];

export default function tag(state = initState, action){
    
    switch (action.type){
				case 'GET_TAG':
					let filtred = []; 
					let tags = action.data;
					let eid = action.eid;
					tags.map((el,k)=>{
						if(el.id === eid)
						filtred.push(el);
						return filtred
					})
        return{
            ...filtred[0],
				}
				

        default: return state;

		}
		
}