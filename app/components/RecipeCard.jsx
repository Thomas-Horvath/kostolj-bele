'use client';
import { useState } from 'react';
import styles from '../styles/recipeCard.module.scss';
import { FaStar, FaRegStar, FaStarHalfAlt, FaRegHeart, FaHeart, FaOldRepublic } from "react-icons/fa";

import Link from 'next/link';

const RecipeCard = ({ recipe }) => {
    const imageUrl = `/images/${recipe.imageURL}`;
    const [addFavorit, setAddFavorite] = useState(false);

    const handleClick = () => {
        setAddFavorite(old => !old)
    }

    return (
        (<div className={styles.card}>

            <span className={styles.heart} onClick={handleClick}>
                {!addFavorit ? <FaRegHeart className={styles.svg} /> : <FaHeart className={`${styles.svg} ${styles.added_heart}`} />}
            </span>

            <img src={imageUrl} alt={recipe.name} className={styles.image} />
            <div className={styles.content_container}>
                <div className={styles.rate_container}>
                    <div className={styles.starsWrapper}>
                        <FaStar className={styles.star} />
                        <FaStar className={styles.star} />
                        <FaStar className={styles.star} />
                        <FaStarHalfAlt className={styles.star} />
                        <FaRegStar className={styles.star} />
                    </div>
                    <p>{recipe.rate}</p>
                </div>
                <h2 className={styles.title}>{recipe.name}</h2>
            </div>
            <Link href={`./recipes/${recipe.id}`} className='btn-green'>Részletek</Link>
        </div>)
    );
};

export default RecipeCard;
