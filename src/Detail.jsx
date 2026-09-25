import { useLocation } from "react-router-dom";
function Detail()
{
    let p=useLocation();
    let image=p.state.image;
    let quantity=p.state.quantity;
    let category=p.state.category;
    let recipe=p.state.recipe;
    
    return<>
        <img src={image}/><br></br>
        {quantity}<br></br>
        {category} <br></br>
        {recipe}
    </>

}

export default Detail;