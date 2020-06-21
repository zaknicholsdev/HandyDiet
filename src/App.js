import React, { Fragment } from 'react';
import { BrowserRouter as HashRouter, Route, Switch } from "react-router-dom"

import './App.css';

import SearchRecipes from './components/Recipe/SearchRecipes';
import RecipeDetails from './components/Recipe/RecipeDetails/Details';
import Menu from './components/Menu/Menu';
import MenuItemDetails from './components/Menu/MenuItemDetails';
import SearchByMacros from './components/SearchByMacros';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MealPlan from './components/MealPlan';

const App = () => {
  return (
    <HashRouter>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/meal-plan" component={MealPlan} />
          <Route exact path="/recipes" component={SearchRecipes} />
          <Route exact path="/recipes/:id/information" component={RecipeDetails} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/food/menuItems/:id" component={MenuItemDetails} />
          <Route exact path="/search-by-macros" component={SearchByMacros} />
        </Switch>
      </Fragment>
    </HashRouter>
  );
}

export default App;