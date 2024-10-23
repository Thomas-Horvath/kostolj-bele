import connectDB from '../connectionDb';
import Recipe from '../models/Recipe';


export async function GET(req, res) {
  await connectDB();

  

  try {
    const recipes = await Recipe.find();
  
    return new Response(JSON.stringify(recipes), { status: 200, headers: { 'Content-Type': 'application/json' },});
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Hiba történt a receptek lekérése közben' }), { status: 500 });
  }
}


