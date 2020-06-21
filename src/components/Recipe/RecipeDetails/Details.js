import React, { Component } from 'react'

import Ingredients from './Ingredients'
import Instructions from './Instructions'
import Nutrition from './Nutrition'

class Recipe extends Component {

    state = {
        error: null,
        isLoaded: false,
        recipe: []
    };

    componentDidMount = async () => {
        const { id } = this.props.match.params;
        try {
            const data = await fetch(
                `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=bb6a675616934bed81e967cc50497f10`
            );
            const result = await data.json();
            console.log(result);
            this.setState({
                isLoaded: true,
                recipe: result,
            });
        } catch (error) {
            this.setState({
                isLoaded: true,
                error,
            });
        }
    }

    render() {
        const { isLoaded } = this.state;

        if (!isLoaded) return (
            <div className="text-center mt-3">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
        
        const { id } = this.props.match.params;
        const {
            title,
            image,
            readyInMinutes,
            servings,
            spoonacularScore,
            extendedIngredients: ingredients,
            analyzedInstructions: instructions,
            nutrition: { nutrients }
        } = this.state.recipe;

        return (
            <div className="container">
                <div>id: {id}</div>
                <h3>{title}</h3>
                <div className="col-xs-12 col-md-6 offset-md-3 my-3">
                    <img src={image} className="img-fluid" />
                </div>
                <div className="row">
                    <div className="col text-center">
                        Ready In: {readyInMinutes} Minutes
                    </div>
                    <div className="col text-center">
                        Servings: {servings}
                    </div>
                    <div className="col text-center">
                        Score: {spoonacularScore}%
                    </div>
                </div>
                <div className="row mt-2">
                    <ul className="col-xs-12 col-md-4">
                        <h5>Nutrition Info</h5>
                        <Nutrition nutrition={{ nutrients }} />
                    </ul>
                    <ul className="col-xs-12 col-md-4">
                        <h5>Ingredients</h5>
                        <Ingredients ingredients={ingredients} />
                    </ul>
                    <ul className="col-xs-12 col-md-4">
                        <h5>Instructions</h5>
                        <Instructions instructions={instructions} />
                    </ul>
                </div>
            </div>
        )
    }
}

export default Recipe;