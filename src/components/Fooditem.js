import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
export class Fooditem extends Component {

    constructor() {
        super();


        this.state = {
            ytlink: {}

        };

    }

    async myfun(id) {
        console.log(id);
      

       
        const resp = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}` 
        );
    
        const respData = await resp.json();
        const meal = respData.meals[0];

        console.log(meal)
        
        console.log(meal.strYoutube)
        let url=meal.strYoutube;
        window.open(url,'_blank','noopener,noreferrer');

    
    }




    render() {
        let { itemname, itemdesc, itemimg } = this.props;







        return (

            <div className="card" style={{ width: "18rem" }}>
                <img src={itemimg} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{itemname}</h5>
                    <h6>{itemdesc}</h6>

                    <button type="button" onClick={() => this.myfun(itemdesc)} className="btn btn-primary">Watch Video</button>
                    {/* <a href="https://www.youtube.com/watch?v=B0YX0yPX4Wo" rel="noreferrer" target="_blank" className="btn btn-primary">More</a>   */}
                </div>
            </div>

        )
    }
}

export default Fooditem
