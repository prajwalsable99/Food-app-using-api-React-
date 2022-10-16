import React, { Component } from 'react'

export class Fooditem extends Component {
        
   

    render() {
        let  {itemname,itemdesc,itemimg}=this.props;
        
        

        return (

            <div className="card" style={{ width: "18rem" }}>
                <img src={itemimg} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{itemname}</h5>
                    
                    <a href={`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${itemdesc}`} rel="noreferrer" target="_blank" className="btn btn-primary">More</a>  
                </div>
            </div>

        )
    }
}

export default Fooditem
