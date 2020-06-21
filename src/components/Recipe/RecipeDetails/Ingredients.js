import React, { Fragment } from 'react'

function RecipeIngredients(props) {
    const ingredients = props.ingredients
    const eachIngredient = ingredients.map(ingredient => {
        return (
            <li key={ingredient.id}>{ingredient.original}</li>
        )
    })
    return (
        <Fragment>{eachIngredient}</Fragment>
    )
}

export default RecipeIngredients