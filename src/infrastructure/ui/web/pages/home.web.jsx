import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Header} from '../components/header';
import {ShoppingList} from '../components/ShoppingList';

export const Home = () => {
    return (
        <Router>
            <div className="container mx-auto">
                <Header/>
                <Switch>
                    <Route exact path="/" component={ShoppingList} />
                    {/*<Route exact path="/details/:breedName" component={BreedDetails} />*/}
                </Switch>
            </div>
        </Router>
    )
}