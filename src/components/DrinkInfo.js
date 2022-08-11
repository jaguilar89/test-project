import React from "react";
import { useLocation } from "react-router-dom";
import { Chip, Stack } from "@mui/material";

export default function DrinkInfo() {
    const location = useLocation();
    const drinkInfo = location.state;
    const ingredients = [];
    const measurements = [];

    for (let [key, value] of Object.entries(drinkInfo)) {
        if (key.startsWith('strIngredient') && value !== null) {
            ingredients.push(value)
        }
        if (key.startsWith('strMeasure') && value !== null) {
            measurements.push(value)
        }
    };

    const mixingDetails = measurements.map((measurement, index1) =>
        ingredients.map((ingredient, index2) => {
            if (index1 === index2) {
                return <li key={ingredient}>{measurement} of {ingredient}</li>
            }
        })
    )

    return (
        <>
            <h1>{drinkInfo.strDrink}</h1>
            <div className="drinkinfo-parent">
                <div className="drinkinfo-img">
                    <img src={drinkInfo.strDrinkThumb} alt="drink image" />
                </div>
                <div className="drinkinfo-instructions">
                    <Stack direction="row" spacing={1}>
                        <Chip label={drinkInfo.strCategory} color="primary" />
                        <Chip label={drinkInfo.strAlcoholic} color="primary"/>
                        <Chip label={drinkInfo.strGlass} color="primary"/>
                    </Stack>
                    <h2>Ingredients</h2>
                    <ul>
                        {mixingDetails}
                    </ul>
                    <h2>Instructions</h2>
                    <p>{drinkInfo.strInstructions}</p>
                </div>
            </div>
        </>
    )
}