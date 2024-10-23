import styles from '../styles/recipeCard.module.scss';
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const RecipeCard = ({ recipe }) => {
    const imageUrl = `/images/${recipe.imageURL}`;

    return (
        <div className={styles.card}>
            <img src={imageUrl} alt={recipe.name} className={styles.image} />
            <div className={styles.content_container}>
                <div className={styles.starsWrapper}>
                    <FaStar className={styles.star} />
                    <FaStar className={styles.star} />
                    <FaStar className={styles.star} />
                    <FaStarHalfAlt className={styles.star} />
                    <FaRegStar className={styles.star} />
                </div>
                <h2 className={styles.title}>{recipe.name}</h2>
            </div>
            <button className='btn-green'>Részletek</button>
        </div>
    );
};

export default RecipeCard;
