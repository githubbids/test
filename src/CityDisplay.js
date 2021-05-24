import React from 'react';

export default function CityDisplay(props){

const renderList = ({cityName}) => {
    if(cityName){
        return cityName.map((item) => {
            return(
                <div>
                    <center>
                        <h2>{item.city_name}</h2>
                        </center>
                </div>
            )
        })
    }
}

    return(
       /** with props
        * <div>
            <h2>Currently I am staying {props.cityName}</h2>
        </div>
        *  */ 

        <div>
            <center>
                <h1>City List</h1>
            </center>
                {renderList(props)}
        </div>
    )
};