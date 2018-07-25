export const getBaseAction = () => dispatch => 
{
    fetch("http://localhost:3006/base", {
        method:'GET'
    }).then((response) =>
    {
        return response.json()
    }).then((d) =>
    {
        dispatch({type:'GET_BASE', data:d})
    });
}