require(["FoodItem"],function(){
    
    let foodItems = [];
    let totalCal = 0;

    var totalBtn = document.getElementById("TotalButton");
    totalBtn.addEventListener("click", buttonClicked, false);
    //button.onclick=myFunction;
    var clearBtn = document.getElementById("clearButton");
clearBtn.addEventListener("click", buttonClear, false);




function buttonClear () {
    document.getElementById ("name").value = "";
    document.getElementById ("Calories").value = "";
    document.getElementById ("HowMany").value = "";
   
    

}


    function buttonClicked() {
        myFunction();
        outputText = "";
        for (i = 0; i < foodItems.length; i++) {
            outputText += foodItems[i].name + ", " + foodItems[i].Calories + ", " + foodItems[i].HowMany;
            totalCal +=  foodItems[i].totalCalories;
          

  
        }

        document.getElementById("output1").innerHTML = outputText;
        document.getElementById("output2").innerHTML = totalCal;
      

    }

    function myFunction() {
        
        let name = document.getElementById ("name").value;
        let Calories = document.getElementById ("Calories").value;
        let qty = document.getElementById("HowMany").value;
        let newFoodItem = new FoodItem(name, Calories, qty);

        foodItems.push(newFoodItem);

        return;
    }
    

  });