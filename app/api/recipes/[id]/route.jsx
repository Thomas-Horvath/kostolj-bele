import connectDB from '../../connectionDb';
import Recipe from '../../models/Recipe';

export async function GET(req, { params }) {
    await connectDB();
    
    try {
        // Dinamikus ID lekérése a params-ból
        const { id } = params;

        // Keresés az adatbázisban az ID alapján
        const recipe = await Recipe.findOne({ id: Number(id) });

        if (!recipe) {
      
            return new Response(JSON.stringify({ message: 'Recept nem található' }), { status: 404 });
        }

        return new Response(JSON.stringify(recipe), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
 
        return new Response(JSON.stringify({ message: 'Hiba történt a recept lekérése közben' }), { status: 500 });
    }
}
