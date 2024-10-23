
import styles from '../../styles/recipes.module.scss';
import RecipeCard from '../../components/RecipeCard';



const Recipes = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/recipes`, { cache: 'no-store' }); // API végpont lekérése
  const recipesJson = await res.json();


  return (
    <div className={`${styles.recipesContainer} section`}>
      <h1>Receptek</h1>
      <div className={styles.recipesGrid}>
        {recipesJson.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
