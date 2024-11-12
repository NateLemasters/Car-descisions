// this is the start of our first function. The function is called and goes through itself to spit out anything it was that correlates with what it is suppose to do.
function getCar(){
// These are the variable in our code. These variables help find the perfect car for the user.   
    var Age = document.getElementById("Age").value;
    var Salary = document.getElementById("Salary").value;
    var Place = document.getElementById("Place").value;
    var Children = document.getElementById("Children").value;

    console.log(Age);
    console.log(Salary);
    console.log(Place);
    console.log(Children);

   
//Each of these if statements are in the function. The if statements use all of our variables and they make it so what ever the combination is, there will always be an output.
    if(Age > 16 && Children == "You have Children" && Place == "City" && Salary == "Over 100k"){
        document.getElementById("images").setAttribute("src", "https://media.ed.edmunds-media.com/audi/q7/2025/oem/2025_audi_q7_4dr-suv_prestige_fq_oem_1_1280.jpg");
    } 
    //the part that uses Age > 16 makes is my number variable.
    if(Age > 16 && Children == "You have Children" && Place == "Countryside" && Salary == "Over 100k"){
        document.getElementById("images").setAttribute("src", "https://lp-auto-assets.s3.amazonaws.com/23/land-rover/defender/M3/header.jpg")
    } 
    if(Age > 16 && Children == "You have Children" && Place == "Countryside" && Salary == "Under 100k"){
    //The line of code below is to put in an image and it connects back to the index.html slide because its part of the if statement and is also one of the visual features of the website.
        document.getElementById("images").setAttribute("src", "https://media.cnn.com/api/v1/images/stellar/prod/2025-toyota-4runner-trdpro-mudbath-048.jpg?c=16x9&q=h_833,w_1480,c_fill")
    //To put in an image you must use this code, <script src="script.js"></script> from index.html and the code above. To put in the picture form safari or wherever else you must copy link address and then slot it in after src.
    }
    if(Age > 16 && Children == "You have Children" && Place == "City" && Salary == "Under 100k"){
        document.getElementById("images").setAttribute("src", "https://media.ed.edmunds-media.com/toyota/highlander-hybrid/2022/oem/2022_toyota_highlander-hybrid_4dr-suv_bronze-edition_fq_oem_1_1600.jpg")
    }
    if(Age > 16 && Children == "No Children" && Place == "City" && Salary == "Over 100k"){
       document.getElementById("images").setAttribute("src","https://media.ed.edmunds-media.com/bmw/3-series/2023/oem/2023_bmw_3-series_sedan_m340i_fq_oem_1_600.jpg")
    }
    if(Age > 16 && Children == "No Children" && Place == "Countryside" && Salary == "Over 100k"){
        document.getElementById("images").setAttribute("src", "https://www.penbaypilot.com/sites/default/files/2021/03/field/image/1993%20LWB.jpeg")
    }
    if(Age > 16 && Children == "No Children" && Place == "Countryside" && Salary == "Under 100k"){
        document.getElementById("images").setAttribute("src", "https://hips.hearstapps.com/hmg-prod/images/2025-subaru-outback-101-661ff4374e14a.jpg?crop=0.293xw:0.515xh;0.285xw,0.305xh&resize=768")
    }
    if(Age > 16 && Children == "No Children" && Place == "City" && Salary == "Under 100k"){
        document.getElementById("images").setAttribute("src", "https://www.mazdausa.com/siteassets/vehicles/2024/mx-5-rf/vlp/gallery/desktop/2024-mazda-mx-5-miata-rf-convertible-sports-car-d")
    }
    if(Age < 16){
        document.getElementById("images").setAttribute("src", "https://www.shutterstock.com/image-vector/isolated-red-transit-signal-car-260nw-421397878.jpg")
    }
    getNice(Age, Salary, Place, Children)
}


//function variables that when used in a parictular order push out a comment about the car that came up.
function getNice(Age, Salary, Place, Children){
    if(Age > 16 && Children == "You have Children" && Place == "City" && Salary == "Over 100k"){
    //document.getElementById("feedback").innerHTML helps messages get displayed on the actual website.
        return document.getElementById("feedback").innerHTML = "Nice choice -- Audi Q7";
    }  
    // the && below makes it so I can include many different variable to come out with a specific picture/car.
    if(Age > 16 && Children == "You have Children" && Place == "Countryside" && Salary == "Over 100k"){
        return document.getElementById("feedback").innerHTML = "Thats the one for you -- Land Rover Defender ";
    } 
    if(Age > 16 && Children == "You have Children" && Place == "Countryside" && Salary == "Under 100k"){
        return document.getElementById("feedback").innerHTML = "Intelligent choice -- Toyota 4 Runner";
    }
    if(Age > 16 && Children == "You have Children" && Place == "City" && Salary == "Under 100k"){
        return document.getElementById("feedback").innerHTML = "Can't go wrong with that -- Toyota Highlander";
    }
    if(Age > 16 && Children == "No Children" && Place == "City" && Salary == "Over 100k"){
        return document.getElementById("feedback").innerHTML = "You'll be wishing you bought it sooner -- BMW 3 Series";
    }
    if(Age > 16 && Children == "No Children" && Place == "Countryside" && Salary == "Over 100k"){
        return document.getElementById("feedback").innerHTML = "Rough and Tough -- Land Rover Defender 110";
    }
    if(Age > 16 && Children == "No Children" && Place == "Countryside" && Salary == "Under 100k"){
        return document.getElementById("feedback").innerHTML = "One of the very best -- Suburu Outback";
    }
    if(Age > 16 && Children == "No Children" && Place == "City" && Salary == "Under 100k"){
        return document.getElementById("feedback").innerHTML = "Small, quick, and perfect for the city -- Mazda Miada MX 5";
    }
    //We don't use any of the other variables here because if under 16 then you won't be able to have a car no matter what.
    if(Age < 16){
        return document.getElementById("feedback").innerHTML = "You'll have to wait a little longer -- No Car";
    }
}

