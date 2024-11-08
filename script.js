
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
        document.getElementById("images").setAttribute("src", "https://media.ed.edmunds-media.com/audi/q7/2025/oem/2025_audi_q7_4dr-suv_prestige_fq_oem_1_1280.jpg")
    } 
    if(Age == "Over 16" && Children == "You have Children" && Place == "Countryside" && Salary == "Over 100k"){
        document.getElementById("images").setAttribute("src", "https://lp-auto-assets.s3.amazonaws.com/23/land-rover/defender/M3/header.jpg")
    } 
    }
    if(Age == "Over 16" && Children == "You have Children" && Place == "Countryside" && Salary == "under 100k"){
        document.getElementById("images").setAttribute("src", "https://media.cnn.com/api/v1/images/stellar/prod/2025-toyota-4runner-trdpro-mudbath-048.jpg?c=16x9&q=h_833,w_1480,c_fill")
    
    if(Age == "Over 16" && Children == "You have Children" && Place == "City" && Salary == "under 100k"){
        document.getElementById("images").setAttribute("src", "https://media.ed.edmunds-media.com/toyota/highlander-hybrid/2022/oem/2022_toyota_highlander-hybrid_4dr-suv_bronze-edition_fq_oem_1_1600.jpg")
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



