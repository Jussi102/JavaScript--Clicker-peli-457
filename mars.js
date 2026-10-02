let pisteet = 0;
let klikkausvoima = 1;
let klikkausVaihde = 1;

let autoClicker = 1;
let autoClickerVaihde = 1;
let autoClickerVoima = 1;
let autoClickerUpgradeVaihde = 1;
let autoClickerUpgradeMax = false;
let autoClickerVaihdeMax = false;
let klikkausVaihdeMax = false;
document.getElementById("lukittu").style.color = "lime";
document.getElementById("lukittu2").style.color = "red";
function paivitaVarit() {

    // Klikkauspäivitys
    if (klikkausVaihde === 1) {
        if (pisteet >= 100) {
            document.getElementById("klikkausvoima").style.color = "lime";
        } else {
            document.getElementById("klikkausvoima").style.color = "red";
        }
    }

    if (klikkausVaihde === 2) {
        if (pisteet >= 500) {
            document.getElementById("klikkausvoima").style.color = "lime";
        } else {
            document.getElementById("klikkausvoima").style.color = "red";
        }
    }

    if (klikkausVaihde === 3) {
        if (pisteet >= 1000) {
            document.getElementById("klikkausvoima").style.color = "lime";
        } else {
            document.getElementById("klikkausvoima").style.color = "red";
        }
    }

    if (klikkausVaihde === 4) {
        if (pisteet >= 5000) {
            document.getElementById("klikkausvoima").style.color = "lime";
        } else {
            document.getElementById("klikkausvoima").style.color = "red";
        }
    }

    if (klikkausVaihde === 5) {
        if (pisteet >= 20000) {
            document.getElementById("klikkausvoima").style.color = "lime";
        } else {
            document.getElementById("klikkausvoima").style.color = "red";
        }
    }

    if (klikkausVaihde === 6) {
        if (pisteet >= 100000) {
            document.getElementById("klikkausvoima").style.color = "lime";
        } else {
            document.getElementById("klikkausvoima").style.color = "red";
        }
    }


    // Autoclicker
    if (autoClickerVaihde === 1) {
        if (pisteet >= 1000) {
            document.getElementById("autoClickerHinta").style.color = "lime";
        } else {
            document.getElementById("autoClickerHinta").style.color = "red";
        }
    }

    if (autoClickerVaihde === 2) {
        if (pisteet >= 20000) {
            document.getElementById("autoClickerHinta").style.color = "lime";
        } else {
            document.getElementById("autoClickerHinta").style.color = "red";
        }
    }

    if (autoClickerVaihde === 3) {
        if (pisteet >= 100000) {
            document.getElementById("autoClickerHinta").style.color = "lime";
        } else {
            document.getElementById("autoClickerHinta").style.color = "red";
        }
    }

    if (autoClickerVaihde === 4) {
        if (pisteet >= 1000000) {
            document.getElementById("autoClickerHinta").style.color = "lime";
        } else {
            document.getElementById("autoClickerHinta").style.color = "red";
        }
    }

    // Autoclickerin voima
    if (autoClickerUpgradeVaihde === 1) {
        if (pisteet >= 1500) {
            document.getElementById("autoClickerUpgradeHinta").style.color = "lime";
        } else {
            document.getElementById("autoClickerUpgradeHinta").style.color = "red";
        }
    }

    if (autoClickerUpgradeVaihde === 2) {
        if (pisteet >= 5000) {
            document.getElementById("autoClickerUpgradeHinta").style.color = "lime";
        } else {
            document.getElementById("autoClickerUpgradeHinta").style.color = "red";
        }
    }

    if (autoClickerUpgradeVaihde === 3) {
        if (pisteet >= 50000) {
            document.getElementById("autoClickerUpgradeHinta").style.color = "lime";
        } else {
            document.getElementById("autoClickerUpgradeHinta").style.color = "red";
        }
    }
}


// PÄÄNAPPI
document.getElementById("button").addEventListener("click", function() {

    pisteet += klikkausvoima;
    console.log(pisteet);
    document.getElementById("pistemaara").textContent = pisteet;
    paivitaVarit();


    // KLIKKAUS-UPGRADEN VÄRI

    if (klikkausVaihde === 1) {
        if (pisteet >= 100) {
            document.getElementById("klikkausvoima").style.color = "lime";
        } else {
            document.getElementById("klikkausvoima").style.color = "red";
        }
    }

    if (klikkausVaihde === 2) {
        if (pisteet >= 500) {
            document.getElementById("klikkausvoima").style.color = "lime";
        } else {
            document.getElementById("klikkausvoima").style.color = "red";
        }
    }

    if (klikkausVaihde === 3) {
        if (pisteet >= 1000) {
            document.getElementById("klikkausvoima").style.color = "lime";
        } else {
            document.getElementById("klikkausvoima").style.color = "red";
        }
    }

    if (klikkausVaihde === 4) {
        if (pisteet >= 5000) {
            document.getElementById("klikkausvoima").style.color = "lime";
        } else {
            document.getElementById("klikkausvoima").style.color = "red";
        }
    }

    if (klikkausVaihde === 5) {
        if (pisteet >= 20000) {
            document.getElementById("klikkausvoima").style.color = "lime";
        } else {
            document.getElementById("klikkausvoima").style.color = "red";
        }
    }

    if (klikkausVaihde === 6) {
        document.getElementById("klikkausvoima").style.color = "lime";
    }



    if (autoClickerVaihde === 1) {
        if (pisteet >= 1000) {
            document.getElementById("autoClickerHinta").style.color = "lime";
        } else {
            document.getElementById("autoClickerHinta").style.color = "red";
        }
    }

    if (autoClickerVaihde === 2) {
        if (pisteet >= 20000) {
            document.getElementById("autoClickerHinta").style.color = "lime";
        } else {
            document.getElementById("autoClickerHinta").style.color = "red";
        }
    }

    if (autoClickerVaihde === 3) {
        if (pisteet >= 100000) {
            document.getElementById("autoClickerHinta").style.color = "lime";
        } else {
            document.getElementById("autoClickerHinta").style.color = "red";
        }
    }

    if (autoClickerVaihde === 4) {
        if (pisteet >= 1000000) {
            document.getElementById("autoClickerHinta").style.color = "lime";
        } else {
            document.getElementById("autoClickerHinta").style.color = "red";
        }
    }




    if (autoClickerUpgradeVaihde === 1) {
        if (pisteet >= 1500) {
            document.getElementById("autoClickerUpgradeHinta").style.color = "lime";
        } else {
            document.getElementById("autoClickerUpgradeHinta").style.color = "red";
        }
    }

    if (autoClickerUpgradeVaihde === 2) {
        if (pisteet >= 3000) {
            document.getElementById("autoClickerUpgradeHinta").style.color = "lime";
        } else {
            document.getElementById("autoClickerUpgradeHinta").style.color = "red";
        }
    }

    if (autoClickerUpgradeVaihde === 3) {
        if (pisteet >= 5000) {
            document.getElementById("autoClickerUpgradeHinta").style.color = "lime";
        } else {
            document.getElementById("autoClickerUpgradeHinta").style.color = "red";
        }
    }


});



document.querySelector(".valinta1").addEventListener("click", function() {


    // UPGRADE 1

    if (klikkausVaihde === 1) {

        if (pisteet >= 100) {

            pisteet -= 100;
            klikkausvoima += 5;
            klikkausVaihde = 2;

            console.log(pisteet);
            console.log(klikkausvoima);

            document.getElementById("pistemaara").textContent = pisteet;
            document.getElementById("klikkausvoima").textContent = "[500]";
            document.getElementById("upgradeTeksti").textContent = " Klikkaus (+20)";

            if (pisteet >= 500) {
                document.getElementById("klikkausvoima").style.color = "lime";
            } else {
                document.getElementById("klikkausvoima").style.color = "red";
            }

            return;
        }
    }


    // UPGRADE 2

    if (klikkausVaihde === 2) {

        if (pisteet >= 500) {

            pisteet -= 500;
            klikkausvoima += 20;
            klikkausVaihde = 3;

            console.log(pisteet);
            console.log(klikkausvoima);

            document.getElementById("pistemaara").textContent = pisteet;
            document.getElementById("klikkausvoima").textContent = "[1000]";
            document.getElementById("upgradeTeksti").textContent = " Klikkaus (+100)";

            if (pisteet >= 1000) {
                document.getElementById("klikkausvoima").style.color = "lime";
            } else {
                document.getElementById("klikkausvoima").style.color = "red";
            }

            return;
        }
    }


    // UPGRADE 3

    if (klikkausVaihde === 3) {

        if (pisteet >= 1000) {

            pisteet -= 1000;
            klikkausvoima += 100;
            klikkausVaihde = 4;

            console.log(pisteet);
            console.log(klikkausvoima);

            document.getElementById("pistemaara").textContent = pisteet;
            document.getElementById("klikkausvoima").textContent = "[5000]";
            document.getElementById("upgradeTeksti").textContent = " Klikkaus (+200)";

            if (pisteet >= 5000) {
                document.getElementById("klikkausvoima").style.color = "lime";
            } else {
                document.getElementById("klikkausvoima").style.color = "red";
            }

            return;
        }
    }


    // UPGRADE 4

    if (klikkausVaihde === 4) {

        if (pisteet >= 5000) {

            pisteet -= 5000;
            klikkausvoima += 200;
            klikkausVaihde = 5;

            console.log(pisteet);
            console.log(klikkausvoima);

            document.getElementById("pistemaara").textContent = pisteet;
            document.getElementById("klikkausvoima").textContent = "[20K]";
            document.getElementById("upgradeTeksti").textContent = " Klikkaus (+500)";

            if (pisteet >= 20000) {
                document.getElementById("klikkausvoima").style.color = "lime";
            } else {
                document.getElementById("klikkausvoima").style.color = "red";
            }

            return;
        }
    }


    // UPGRADE 5

    if (klikkausVaihde === 5) {

        if (pisteet >= 20000) {

            pisteet -= 20000;
            klikkausvoima += 500;
            klikkausVaihde = 6;

            console.log(pisteet);
            console.log(klikkausvoima);

            document.getElementById("pistemaara").textContent = pisteet;
            document.getElementById("klikkausvoima").textContent = "[100K]";
            document.getElementById("upgradeTeksti").textContent = " Klikkaus (+1000)";

            if (pisteet >= 100000) {
                document.getElementById("klikkausvoima").style.color = "lime";
            } else {
                document.getElementById("klikkausvoima").style.color = "red";
            }

            return;
        }
    }


    // MAX

    if (klikkausVaihde === 6) {
        pisteet -= 100000;
        document.getElementById("pistemaara").textContent = pisteet;
        document.getElementById("klikkausvoima").textContent = "[MAX]";
        document.getElementById("upgradeTeksti").textContent = "Klikkaus: ";
        document.getElementById("klikkausvoima").style.color = "lime";
        klikkausVaihdeMax = true;

        if (autoClickerUpgradeMax && autoClickerVaihdeMax && klikkausVaihdeMax) {
    document.getElementById("lukittu2").textContent = "[10M]";
    document.getElementById("lukittu2").style.color = "lime";
}
        return;
    }

});




document.querySelector(".valinta2").addEventListener("click", function() {


    // AUTOCLICKER 1

    if (autoClickerVaihde === 1) {

        if (pisteet >= 1000) {

            pisteet -= 1000;
            autoClickerVaihde = 2;

           setInterval(function() {
    pisteet += autoClickerVoima;
    document.getElementById("pistemaara").textContent = pisteet;
    paivitaVarit();
}, 100);

            document.getElementById("autoClickerHinta").textContent = "[20K]";
            document.getElementById("autoClickerUpgrade").textContent = "Autoclicker (10/s)";


            if (pisteet >= 20000) {
                document.getElementById("autoClickerHinta").style.color = "lime";
            } else {
                document.getElementById("autoClickerHinta").style.color = "red";
            }

            return;
        }
    }


    // AUTOCLICKER 2

    if (autoClickerVaihde === 2) {

        if (pisteet >= 20000) {

            pisteet -= 20000;
            autoClickerVaihde = 3;

            setInterval(function() {
            pisteet += autoClickerVoima;
            document.getElementById("pistemaara").textContent = pisteet;
            paivitaVarit();
}, 50);


            document.getElementById("autoClickerHinta").textContent = "[100K]";
            document.getElementById("autoClickerUpgrade").textContent = "Autoclicker (20/s)";


            if (pisteet >= 100000) {
                document.getElementById("autoClickerHinta").style.color = "lime";
            } else {
                document.getElementById("autoClickerHinta").style.color = "red";
            }

            return;
        }
    }


    // AUTOCLICKER 3

    if (autoClickerVaihde === 3) {

        if (pisteet >= 100000) {

            pisteet -= 100000;
            autoClickerVaihde = 4;

            setInterval(function() {
    pisteet += autoClickerVoima;
    document.getElementById("pistemaara").textContent = pisteet;
    paivitaVarit();
}, 1);


            document.getElementById("autoClickerHinta").textContent = "[1M]";
            document.getElementById("autoClickerUpgrade").textContent = "Autoclicker (Super nopea)";


            if (pisteet >= 1000000) {
                document.getElementById("autoClickerHinta").style.color = "lime";
            } else {
                document.getElementById("autoClickerHinta").style.color = "red";
            }

            return;
        }
    }



    if (autoClickerVaihde === 4) {

        if (pisteet >= 1000000) {

            pisteet -= 1000000;
            autoClickerVaihde = 5;

            setInterval(function() {
    pisteet += autoClickerVoima;
    document.getElementById("pistemaara").textContent = pisteet;
    paivitaVarit();
}, 1);


            document.getElementById("autoClickerHinta").textContent = "[MAX]";
            document.getElementById("autoClickerUpgrade").textContent = "Autoclicker";
            document.getElementById("autoClickerHinta").style.color = "lime";
            autoClickerVaihdeMax = true;
            if (autoClickerUpgradeMax && autoClickerVaihdeMax && klikkausVaihdeMax) {
    document.getElementById("lukittu2").textContent = "[10M]";
    document.getElementById("lukittu2").style.color = "lime";
}

            return;
        }
    }
});



document.getElementById("autoClickerUpgradeHinta").style.color = "red";
document.querySelector(".valinta3").addEventListener("click", function() {


    // AUTOCLICKER VOIMA 1

    if (autoClickerUpgradeVaihde === 1) {

        if (pisteet >= 1500) {

            pisteet -= 1500;
            autoClickerVoima += 2;
            autoClickerUpgradeVaihde = 2;

            document.getElementById("pistemaara").textContent = pisteet;
            document.getElementById("autoClickerUpgradeHinta").textContent = "[5000]"
            document.getElementById("autoClickerVoimaUpgrade").textContent = "Autoclicker [ II ]";


            if (pisteet >= 5000) {
                document.getElementById("autoClickerUpgradeHinta").style.color = "lime";
            } else {
                document.getElementById("autoClickerUpgradeHinta").style.color = "red";
            }

            return;
        }
    }


    // AUTOCLICKER VOIMA 2

    if (autoClickerUpgradeVaihde === 2) {

        if (pisteet >= 5000) {

            pisteet -= 5000;
            autoClickerVoima += 3;
            autoClickerUpgradeVaihde = 3;

            document.getElementById("pistemaara").textContent = pisteet;
            document.getElementById("autoClickerUpgradeHinta").textContent = "[50K]"
            document.getElementById("autoClickerVoimaUpgrade").textContent = "Autoclicker [ III ]";


            if (pisteet >= 50000) {
                document.getElementById("autoClickerUpgradeHinta").style.color = "lime";
            } else {
                document.getElementById("autoClickerUpgradeHinta").style.color = "red";
            }

            return;
        }
    }


    // AUTOCLICKER VOIMA 3

    if (autoClickerUpgradeVaihde === 3) {

        if (pisteet >= 50000) {

            pisteet -= 50000;
            autoClickerVoima += 1;
            autoClickerUpgradeVaihde = 4;

            document.getElementById("pistemaara").textContent = pisteet;

            document.getElementById("autoClickerVoimaUpgrade").textContent = "Autoclicker";
            document.getElementById("autoClickerUpgradeHinta").textContent = "[MAX]";
            document.getElementById("autoClickerUpgradeHinta").style.color = "lime";
            autoClickerUpgradeMax = true;
            if (autoClickerUpgradeMax === true && autoClickerVaihdeMax === true && klikkausVaihdeMax === true) {
            document.getElementById("lukittu2").textContent = "[50M]";
            document.getElementById("lukittu2").style.color = "lime";
}
            return;
        }
    }

});


document.getElementById("planeetta2").addEventListener("click", function() {
    if (pisteet >= 5000000) {
        window.location.href = "lopputekstit.html";
    }
    
});



