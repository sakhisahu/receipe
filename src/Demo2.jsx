import { useLocation } from "react-router-dom";
function Demo2()
{
    let p=useLocation();
    let quantity=p.state.quantity;
    let category=p.state.category;
    let recipe=p.state.recipe;
    
    return<>
        {quantity}<br></br>
        {category} <br></br>
        {recipe}
    </>

}

export default Demo2;