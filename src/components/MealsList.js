import { useMealsListContext } from "../providers/MealsProvider";

const MealsList = () => {
    const { meals } = useMealsListContext();

    return (
        <div className="ListContainer">
            <h1>Meals List using Context API</h1>
            {meals.map((meal, index) => (
                <h2 key={index}>{meal}</h2>
            ))}
        </div>
    );
}

export default MealsList;