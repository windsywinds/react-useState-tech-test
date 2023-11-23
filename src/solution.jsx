import { useState } from "react";



//set our array of countries we want to use
const countries = [
    {
        id: 1,
        name: "USA",
    },
    {
        id: 2,
        name: "Japan",
    },
    {
        id: 3,
        name: "New Zealand",
    },
]

const Solution = () => {
    //we only need a single useState to manage this, less is always better!
    const [selectedCountries, setselectedCountries] = useState([]);
    //we will set a variable to define how many options there are by using the arrays length
    const areAllCountriesSelected = selectedCountries.length === countries.length;




    return(
        <div className="sol-parent">
            <div className="solution-div">
            <label className="top-checkbox">
                <input type="checkbox" checked={areAllCountriesSelected} onChange={() => 
                    setselectedCountries(areAllCountriesSelected ? [] : countries)}
                /> Select All
            </label>
            <ul>
                {countries.map((country) => {
                    const isSelected =
                        selectedCountries.find(({ id }) => country.id === id) !== undefined;
                             return (
                                <li key={country.id} className="bottom-checkboxs">
                                    <label className="bottom-checkbox">
                                    <input type="checkbox" checked={isSelected} onChange={() => {
                                        if (isSelected) {
                                            setselectedCountries(selectedCountries.filter(({ id }) => country.id !== id));
                                        } else {
                                            setselectedCountries([...selectedCountries, country,]);
                                        }
                                    }}
                                    />{' '} {country.name}
                                    </label>
                                </li>
                        );
                })}
            </ul>
            </div>
        </div>
    )
}
export default Solution;