import { NavLink } from 'react-router-dom'
import category from './category.json'
import { useState } from 'react'
function Demo()
{
  let[r,setr]=useState()
  let[m,setm]=useState()
  function search()
  {
    let m=category.filter((e)=>e.category==r);
    console.log(m)
    setm(m);
  }
  return<>
  <h1 className='text-center'><b>Search Recipes With Our Recipes</b></h1>
  <p className='text-center'>input Recipes Seprated by Comma(,)</p>
  <input type="text"onChange={(e) => setr(e.target.value)} className="text-center border p-2"/>
  <input type="text"onChange={(e)=>setr(e.target.value)} />

<button onClick={search}className="text-center border px-4 py-2 mt-2"> Search</button>
  <p className='text-center'><b>RECIPE   LIST   FOR   PRODUCTS</b></p>
  {
  m&& m.map((e)=> {
    return<> 
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src={e.image} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2"> {e.name}  </div>
    <p class="text-gray-700 text-base">
   {e.prize}{e.quantity} 
   <NavLink to="/show" state={{category:e.category,quantity:e.quantity,recipe:e.recipe}}>Go..</NavLink>
   
   </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-flex gap-2 mr-2 mb-2">
  <NavLink to="/detail"class="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold" state={{image:e.image,name:e.name,prize:e.prize,quantity:e.quantity, recipe:e.recipe}}><button className='bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold'> Detail </button></NavLink>
 <a href="https://example.com/recipe"target="_blank"class="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Recipe URL</a></span>
</div>
</div> 
  </>
  })
} 
  </>
}
export default Demo;