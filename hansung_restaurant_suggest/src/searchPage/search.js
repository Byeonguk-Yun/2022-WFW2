import { useState } from "react";
import "./search.css";

export class search extends Component {
    constructor() {
        super();
        this.state = {
            restaurants : [],
        };
    }

    componentDidMount() {
        fetch('${RESTAURANT_LIST}')
        .then(res => res.json())
        .then(res =>
            this.setState( {
                restaurants : res.RESTAURANTS_LIST,
            })
            );
    }

    render() {
        const { restaurants } = this.state;
        //

        const filterRestaurants = restaurants.filter(restaurant => {
           // return restaurant.restaurant_name.includes
        });
    }


    return (
        //
    )
}