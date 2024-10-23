
const RecipeDetails = async ({ params }) => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/recipes/${params.recipeid}`);
  const recipe = await data.json();
  console.log('lefut detals')

  return (
    <div className="section">
      <p>page {params.recipeid}</p>
      <h2>{recipe.name || "Nincs név"}</h2>
      {recipe.rate}
      <ul>
        {recipe.ingredients.map(x => <li key={x._id}>{x.name} {x.quantity}</li>)}
      </ul>
    </div>
  );
}

export default RecipeDetails