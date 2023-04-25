import React from "react";

function InputForm({handleInputChange}){
    return(
        <form className="formularz">
            <label>
                Kwota brutto&nbsp;
                <input type="number" name="brutto" min="0" onChange={handleInputChange}/>
            </label>
            <label>
                Kwota podatek&nbsp;
                <select name="podatek" onChange={handleInputChange}>
                    <option value={18}>18%</option>
                    <option value={19}>19%</option>
                    <option value={20}>20%</option>
                </select>
            </label>
        </form>
    )
}

export default InputForm;