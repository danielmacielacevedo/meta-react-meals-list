import "./App.css"
import MealsProvider from "./providers/MealsProvider";
import MealsList from "./components/MealsList";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">

      {/* Start Meal List Code */}
      <div className="MealListContent">
        <MealsProvider>
          <MealsList />
          <Counter />
        </MealsProvider>
      </div>
      {/* End Meal List Code */}

      <div className="PoweredByDanielMacielAcevedo">
        <p>Powered by Daniel Maciel Acevedo</p>
        <a href="https://google.com/" ><span></span>ver codigo</a>
        
      </div>
    </div>
  );
}

export default App;