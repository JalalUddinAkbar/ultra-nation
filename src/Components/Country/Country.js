import React from 'react';

const Country = (props) => {
    const {name, population, region,flag, currencies, } = props.country;
    const handleAddCountry = props.handleAddCountry;
    const btnStyle = {width: '200px', height: '30px', fontSize:'20px', borderRadius:'10px'}
    return (
        <div style = {{display: 'flex'}}>
            <div style = {{marginRight: '30px'}}>
                <img style= {{width: '600px'}} src={flag} alt=""/>
            </div>

            <div style = {{border:'1px solid red', width: '600px', }}>
                <h3>This is {name}</h3>
                <h4>Region: {region}</h4>
                <p>Population: {population}</p>
                <p>Currency: {currencies[0].name} ({currencies[0].symbol})</p>
                <button onClick = {() => handleAddCountry(props.country)} style = {btnStyle}>Add Country</button>
            </div>
            
            
        </div>
    );
};

export default Country;