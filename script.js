


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
        console.log("Hi");
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