import React, { Component } from 'react'
import Fooditem from './Fooditem'
import propTypes from 'prop-types'
import Spinner from './Spinner';
export class Foods extends Component {

    static propTypes={

        category:propTypes.string
    }
    constructor() {
        super();
        console.log("Food- constructor");

        this.state = {
            items: [],
            loading: true

        };

    }

    async componentDidMount(){

        let res= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.props.category}`);   

        
        // console.log(res)

        let x= await res.json();
        // console.log(x);
        
        
        this.setState({items:x.meals,loading:false});
        
      
    }

 


    

    render() {

        
        return (
            <div className='container-fluid  bg-secondary'>
                <h1>FOOD ITEMS</h1>
                { this.state.loading && <Spinner></Spinner>}
                <div className='row'>
                    {
                        this.state.items.map((x) => {

                            return <div className='col-md-3 my-5' key={x.idMeal}>


                                <Fooditem  itemname={x.strMeal} itemdesc={x.idMeal} itemimg={x.strMealThumb} />
                            </div>

                        })
                    }
                </div>


            </div>
        )
    }
}

export default Foods
