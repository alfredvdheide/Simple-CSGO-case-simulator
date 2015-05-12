/*
 Total Cases: 2023
 BLUE: 1594 (78.79%)
 Purple: 343 (16.96%)
 Pink: 57 (2.82%)
 Red: 20 (0.99%)
 Knife: 9 (0.44%)
 */
//document.write(item); use this to print stuff from javascript onto a html page

var itemColor; //variable used to store the item colour e.g. blue, purple
var itemWeapon;//the weapon name+condition
var totalCases = [];
var counting = 0;
var itemList = "";
var itemListBlue = "";
var itemListPurple = "";
var itemListPink = "";
var itemListRed = "";
var itemListKnife = "";
var totalBlue = [];
var totalPurple = [];
var totalPink = [];
var totalRed = [];
var totalKnife = [];
var delay = 800;

function unbox() {


    var number = Math.random() * 100; //random number from 0 -100
    var weaponCondition = Math.random() * 5;//factor determining the condition
    var randomKnife = Math.random() * 30;
//variables


//Part 1 Creating a Weapon colour picker
//--------------------------------------
    if (number >= 21.21)
        itemColor = "blue";

    else if (number >= 4.25)
        itemColor = "purple";

    else if (number >= 1.43)
        itemColor = "pink";

    else if (number >= 0.44)
        itemColor = "red";

    else if (number >= 0.00)
        itemColor = "knife";


// Part 2 getting an actual weapon from the color
//-----------------------------------------------
//blue items. total = 6 items
    if (itemColor == "blue") {
        var randomBlue = Math.random() * 6;

        if (randomBlue >= 5)
            itemWeapon = "AK-47 Elite Build";

        else if (randomBlue >= 4)
            itemWeapon = "MP7 Armor Core";

        else if (randomBlue >= 3)
            itemWeapon = "Desert Eagle Bronze Deco";

        else if (randomBlue >= 2)
            itemWeapon = "P250 Valence";

        else if (randomBlue >= 1)
            itemWeapon = "Negev Man-o'-war";

        else if (randomBlue >= 0)
            itemWeapon = "Sawed-Off Origami";
    }

//purple items. total = 4 items
    else if (itemColor == "purple") {
        var randomPurple = Math.random() * 4;

        if (randomPurple >= 3)
            itemWeapon = "AWP Worm God";

        else if (randomPurple >= 2)
            itemWeapon = "MAG-7 Heat";

        else if (randomPurple >= 1)
            itemWeapon = "CZ75-Auto Pole Position";

        else if (randomPurple >= 0)
            itemWeapon = "UMP-45 Grand Prix";
    }

//pink items. total = 3 items
    else if (itemColor == "pink") {
        var randomPink = Math.random() * 3;

        if (randomPink >= 2)
            itemWeapon = "Five-Seven Monkey Business";

        else if (randomPink >= 1)
            itemWeapon = "Galil AR Eco";

        else if (randomPINK >= 0)
            itemWeapon = "FAMAS Djinn";

    }

//red items. total = 2 items
    else if (itemColor == "red") {
        var randomRed = Math.random() * 2;

        if (randomRed >= 1)
            itemWeapon = "M4A1-S Hyper Beast";

        else if (randomRed >= 0)
            itemWeapon = "MAC-10 Neon Rider";
    }

//knife items. total = 30 items
    else if (itemColor == "knife") {


        //Damascus Steel

        if (randomKnife >= 29)
            itemWeapon = "Bayonet Damascus Steel";

        else if (randomKnife >= 28)
            itemWeapon = "Karambit Damascus Steel";

        else if (randomKnife >= 27)
            itemWeapon = "M9 Bayonet Damascus Steel";

        else if (randomKnife >= 26)
            itemWeapon = "Flip Knife Damascus Steel";

        else if (randomKnife >= 25)
            itemWeapon = "Gut Knife Damascus Steel";

        //Doppler

        else if (randomKnife >= 24)
            itemWeapon = "Bayonet Doppler";

        else if (randomKnife >= 23)
            itemWeapon = "Karambit Doppler";

        else if (randomKnife >= 22)
            itemWeapon = "M9 Bayonet Doppler";

        else if (randomKnife >= 21)
            itemWeapon = "Flip Knife Doppler";

        else if (randomKnife >= 20)
            itemWeapon = "Gut Knife Doppler";

        //Marble Fade

        else if (randomKnife >= 19)
            itemWeapon = "Bayonet Marble Fade";

        else if (randomKnife >= 18)
            itemWeapon = "Karambit Marble Fade";

        else if (randomKnife >= 17)
            itemWeapon = "M9 Bayonet Marble Fade";

        else if (randomKnife >= 16)
            itemWeapon = "Flip Knife Marble Fade";

        else if (randomKnife >= 15)
            itemWeapon = "Gut Knife Marble Fade";

        //Tiger Tooth

        else if (randomKnife >= 14)
            itemWeapon = "Bayonet Tiger Tooth";

        else if (randomKnife >= 13)
            itemWeapon = "Karambit Tiger Tooth";

        else if (randomKnife >= 12)
            itemWeapon = "M9 Bayonet Tiger Tooth";

        else if (randomKnife >= 11)
            itemWeapon = "Flip Knife Tiger Tooth";

        else if (randomKnife >= 10)
            itemWeapon = "Gut Knife Tiger Tooth";

        //Rust Coat

        else if (randomKnife >= 9)
            itemWeapon = "Bayonet Rust Coat";

        else if (randomKnife >= 8)
            itemWeapon = "Karambit Rust Coat";

        else if (randomKnife >= 7)
            itemWeapon = "M9 Bayonet Rust Coat";

        else if (randomKnife >= 6)
            itemWeapon = "Flip Knife Rust Coat";

        else if (randomKnife >= 5)
            itemWeapon = "Gut Knife Rust Coat";

        //Ultraviolet

        else if (randomKnife >= 4)
            itemWeapon = "Bayonet Ultraviolet";

        else if (randomKnife >= 3)
            itemWeapon = "Karambit Ultraviolet";

        else if (randomKnife >= 2)
            itemWeapon = "M9 Bayonet Ultraviolet";

        else if (randomKnife >= 1)
            itemWeapon = "Flip Knife Ultraviolet";

        else if (randomKnife >= 0)
            itemWeapon = "Gut Knife Ultraviolet";
    }

//Part 3 giving each one of the items a weapon condition
//------------------------------------------------------

    if (weaponCondition >= 4)
        itemWeapon = itemWeapon + " Factory New";

    else if (weaponCondition >= 3)
        itemWeapon = itemWeapon + " Minimal Wear";

    else if (weaponCondition >= 2)
        itemWeapon = itemWeapon + " Field-Tested";

    else if (weaponCondition >= 1)
        itemWeapon = itemWeapon + " Well-Worn";

    else if (weaponCondition >= 0)
        itemWeapon = itemWeapon + " Battle-Scarred";

    if (itemColor == "blue") {
        totalBlue.push(itemWeapon);
        document.getElementById("totalBlue").innerHTML = totalBlue.length;
    }

    else if (itemColor == "purple") {
        totalPurple.push(itemWeapon);
        document.getElementById("totalPurple").innerHTML = totalPurple.length;
    }

    else if (itemColor == "pink") {
        totalPink.push(itemWeapon);
        document.getElementById("totalPink").innerHTML = totalPink.length;
    }

    else if (itemColor == "red") {
        totalRed.push(itemWeapon);
        document.getElementById("totalRed").innerHTML = totalRed.length;
    }

    else if (itemColor == "knife") {
        totalKnife.push(itemWeapon);
        document.getElementById("totalKnife").innerHTML = totalKnife.length;
    }

    document.getElementById("demo").innerHTML = itemWeapon;
    // document.getElementById("list").innerHTML = totalCases.length;
    totalCases.push(itemWeapon);
    document.getElementById("totalCases").innerHTML = totalCases.length;//total cases unboxed


//history of items unboxed
    itemList += "<br />" + totalCases.length + ". " + itemWeapon + "";
    document.getElementById("list").innerHTML = itemList;

}





