/*
Aufgabe: Abschlussaufgabe
Name: Saskia Kempf
Matrikel: 257180
Datum: 19.07.2018
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", init);
    Abschlussaufgabe.flowers = []; //Gesammelte Blumen werden in dieses Array gespeichert
    let r = 61; //f�r den Timer
    let imgData;
    let player = new Abschlussaufgabe.Bee();
    let audio = new Audio("GameMusic3.wav"); //Spielemusik
    let score = 0; //Score steht zu Beginn auf 0
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe.crc2 = canvas.getContext("2d");
        console.log(Abschlussaufgabe.crc2);
        //Hintergund wird mittels einer Klasse erstellt
        Abschlussaufgabe.hintergrund();
        //Speichern des Bildes, damit es nicht jedes mal neu gezeichnet werden muss:
        imgData = Abschlussaufgabe.crc2.getImageData(0, 0, canvas.width, canvas.height);
        console.log(imgData);
        //window.addEventListener('keydown', flyingBee); //EventListener f�r Pfeiltasten
        //window.addEventListener('touchstart', moveByTouch);
        alert("Bbbsssss... Hello Friend! Can you help me collect those beautiful blossoms for my blossom honey? Be careful to not collect the green blossoms, they make me lose some other blossoms again");
        alert("Use your keyboard to move the bee up, down, left and right and if you'll play it on your smartphone or tablet, move your finger over the screen for moving the bee");
        audio.loop = true; //Damit Musik sich wiederholt
        audio.play(); //Abspielen der Musik
        animate(); //Funktionsaufruf f�r "animate"
        checkPosition();
        createFlowers();
        createTimer();
    }
    //Funktion f�r die Animation
    function animate() {
        window.setTimeout(animate, 10);
        //crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        Abschlussaufgabe.crc2.putImageData(imgData, 0, 0);
        moveObjects();
        drawObjects();
    }
    //Check-Position, damit Blumen nicht wie verr�ckt blinken und wahnsinnig machen
    function moveObjects() {
        for (let i = 0; i < Abschlussaufgabe.flowers.length; i++) {
            Abschlussaufgabe.flowers[i].checkPosition();
        }
    }
    //Objekte zeichnen
    function drawObjects() {
        for (let i = 0; i < Abschlussaufgabe.flowers.length; i++)
            Abschlussaufgabe.flowers[i].draw();
        player.draw(); //Biene wird gezeichnet
        showTimer(); //Timer wird gezeichnet
        showScore(); //Score wird gezeichnet
        gameEnd(); //Alert-Box
    }
    //Blumen werden random erstellt und in Array gespeichert 
    //(wie bei schon bei voriger Aufgabe mit der Farbe der Fische)
    function createFlowers() {
        window.setTimeout(createFlowers, 2500);
        let p = Math.floor(Math.random() * 4);
        switch (p) {
            case 0:
                let purpleFlowers = new Abschlussaufgabe.PurpleFlower();
                Abschlussaufgabe.flowers.push(purpleFlowers);
                break;
            case 1:
                let redFlowers = new Abschlussaufgabe.RedFlower();
                Abschlussaufgabe.flowers.push(redFlowers);
                break;
            case 2:
                let blueFlowers = new Abschlussaufgabe.BlueFlower();
                Abschlussaufgabe.flowers.push(blueFlowers);
                break;
            case 3:
                let greenFlowers = new Abschlussaufgabe.GreenFlower();
                Abschlussaufgabe.flowers.push(greenFlowers);
                break;
        }
    }
    //Kontrolle der Position
    //Hat Biene die selbe Position wie die Blume bzw befindet sich diese in deren Umfeld, verschwindet die Blume durch das splice
    function checkPosition() {
        window.setTimeout(checkPosition, 10);
        for (let i = 0; i < Abschlussaufgabe.flowers.length; i++) {
            let flower = Abschlussaufgabe.flowers[i];
            let collected = player.collectedFlowers(flower.x, flower.y);
            if (collected) {
                Abschlussaufgabe.flowers.splice(i, 1);
                gameScore(flower.blossoms);
            }
        }
    }
    //Fliegen der Biene am PC
    window.addEventListener('keydown', function flyingBee(_e) {
        if (_e.key == "ArrowUp") {
            player.flyUpwards();
        }
        if (_e.key == "ArrowDown") {
            player.flyDownwards();
        }
        if (_e.key == "ArrowLeft") {
            player.flyToLeft();
        }
        if (_e.key == "ArrowRight") {
            player.flyToRight();
        }
    }, false);
    //Fliegen der Biene am Smartphone/Tablet
    window.addEventListener('touchmove', function (_e) {
        if (_e.changedTouches[0].clientX < Abschlussaufgabe.crc2.canvas.clientWidth / 2) {
            player.flyToLeft();
        }
        else {
            player.flyToRight();
        }
        if (_e.changedTouches[0].clientY < Abschlussaufgabe.crc2.canvas.clientHeight / 2) {
            player.flyUpwards();
        }
        else {
            player.flyDownwards();
        }
    }, false);
    //Timer 
    function createTimer() {
        console.log("setTimer");
        setInterval(function () {
            if (r >= 0) {
                r--;
            }
        }, 1000);
    }
    //Anzeige des Timers
    function showTimer() {
        Abschlussaufgabe.crc2.font = "35px Comic Sans MS";
        Abschlussaufgabe.crc2.fillStyle = "white";
        Abschlussaufgabe.crc2.fillText("Time: " + r + " sec.", 60, 550);
    }
    //Punktestand des Spiels
    function gameScore(blossoms) {
        score += blossoms;
    }
    //Angzeige des Punktestandes
    function showScore() {
        Abschlussaufgabe.crc2.font = "35px Comic Sans MS";
        Abschlussaufgabe.crc2.fillStyle = "white";
        Abschlussaufgabe.crc2.fillText("Score: " + score + " Blossoms", 475, 550);
    }
    //Alert-Box 1 erscheint, wenn der Timer abgelaufen ist und zeigt gesammelte Bl�ten an
    //Alert-Box 2 erscheint, wenn Alert-Box 1 weggeklickt wurde
    function gameEnd() {
        if (r <= 0) {
            alert("Bsssss game's over! You've collected " + score + " blossoms");
            alert("Wanna play again? Reload page for another game");
        }
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Animation.js.map