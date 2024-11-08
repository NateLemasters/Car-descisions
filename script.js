
function getCar(){
    var Age = document.getElementById("Age").value;
    var Salary = document.getElementById("Salary").value;
    var Place = document.getElementById("Place").value;
    var Children = document.getElementById("Children").value;

    console.log(Age);
    console.log(Salary);
    console.log(Place);
    console.log(Children);

   

    if(Age == "Over 16" && Children == "You have Children" && Place == "City" && Salary == "Over 100k"){
        document.getElementById("images").setAttribute("src", "https://mediapool.bmwgroup.com/cache/P9/202309/P90522951/P90522951-the-bmw-i5-edrive40-driving-10-2023-2247px.jpg")
    } 
    if(Age == "Over 16" && Children == "You have Children" && Place == "Countryside" && Salary == "Over 100k"){
        console.log("hi");
    }
    if(Age == "Over 16" && Children == "You have Children" && Place == "Countryside" && Salary == "under 100k"){
        console.log("hi");
    }
    if(Age == "Over 16" && Children == "You have Children" && Place == "City" && Salary == "under 100k"){
        console.log("hi");
    }
    


    if(Age == "Over 16" && Children == "No Children" && Place == "City" && Salary == "Over 100k"){
        console.log("Hi");
    }
    if(Age == "Over 16" && Children == "No Children" && Place == "Countryside" && Salary == "Over 100k"){
        console.log("Hi");
    }
    if(Age == "Over 16" && Children == "No Children" && Place == "Countryside" && Salary == "under 100k"){
        console.log("hi");
    }
    if(Age == "Over 16" && Children == "No Children" && Place == "City" && Salary == "under 100k"){
        console.log("hi");
    }
    
    
}



