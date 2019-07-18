import React, {useState} from "react";
import axios from 'axios';
import { DebounceInput } from "react-debounce-input";


export default function SearchBar() {

    let [ string, setString ] = useState('');
    let [ arrayVals, setArrayVals ] = useState(null);

    async function performSearch(str) {
        let url = 'https://swapi.co/api/people/?search=' + str;
        let res = await axios.get(url);
        let vals = res.data.results;

        if (vals && vals.length) {
            let tempArray = vals.map((val) => val.name);
            return tempArray;
        } else {
            return null;
        }
    }

    async function handleChange(e)  {
        if (!e || !e.target) {
            return;
        }
        let val = e.target.value;

        setString(val);
        setArrayVals(null);

        if (val.length) {
            let arr = await performSearch(val);
            setArrayVals(arr);
        }
    }

    function showResultsMap() {
        return (
            <div className="search-results">
                {
                    arrayVals.map((val, idx) =>
                        <div key={val + idx} >{val}</div>
                    )
                }
            </div>
        )
    }

    return (
        <div className="platt-header-input-container">
            <DebounceInput
                className="platt-header-input"
                type="input"
                debounceTimeout={1000}
                value={string}
                placeholder="What are you looking for?"
                onChange={handleChange}
            />

            { arrayVals && arrayVals.length ? showResultsMap() : null}
        </div>
    );
}