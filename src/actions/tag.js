export const getTag = (e) => dispatch => 
{
		var eid = e;
    fetch("http://localhost:3006/base", {
        method:'GET'
    }).then((response) =>
    {
        return response.json()
    }).then((d) =>
    {
        dispatch({type:'GET_TAG', data:d, eid: eid})
    });
}
