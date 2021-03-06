var Aufgabe10;
(function (Aufgabe10) {
    window.addEventListener("load", init);
    let fishes = [];
    let bubbles = [];
    let starfishes = [];
    let n = 16;
    let m = 0;
    let imgData;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe10.crc2 = canvas.getContext("2d");
        console.log(Aufgabe10.crc2);
        //Hintergund wird mittels einer Klasse erstellt
        let hg = new Aufgabe10.Background;
        hg.screen();
        //Speichern des Bildes, damit es nicht jedes mal neu gezeichnet werden muss:
        imgData = Aufgabe10.crc2.getImageData(0, 0, canvas.width, canvas.height);
        console.log(imgData);
        //Luftblasen aus der Schatzkiste
        for (let i = 0; i < n; i++) {
            let bubble = new Aufgabe10.Bubbles();
            bubble.x = (740);
            bubble.y = Math.random() * 625;
            bubble.radius = Math.random() * 10;
            bubbles.push(bubble);
        }
        //Seesterne
        for (let i = 0; i <= m; i++) {
            let starfish = new Aufgabe10.Starfish();
            starfish.x = (325);
            starfish.y = (675);
            starfishes.push(starfish);
        }
        for (let i = 0; i <= m; i++) {
            let starfish = new Aufgabe10.Starfish();
            starfish.x = (550);
            starfish.y = (750);
            starfishes.push(starfish);
        }
        //Fische
        for (let i = 0; i < n; i++) {
            let fish = new Aufgabe10.Fishes();
            fish.x = Math.random() * Aufgabe10.crc2.canvas.width;
            fish.y = Math.random() * Aufgabe10.crc2.canvas.height;
            fish.r = Math.random() * 600;
            fish.g = Math.random() * 100;
            fish.b = Math.random() * 200;
            fishes.push(fish);
        }
        //Animation wird aufrufen
        animate();
    }
    //Funktion f�r Animation der Objekte
    function animate() {
        window.setTimeout(animate, 18);
        //console.log(animate);
        Aufgabe10.crc2.putImageData(imgData, 0, 0);
        //crc2.clearRect( 0, 0, crc2.canvas.width, crc2.canvas.height );
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (let i = 0; i < starfishes.length; i++) {
            starfishes[i].move();
        }
        for (let i = 0; i < fishes.length; i++) {
            fishes[i].move();
        }
        for (let i = 0; i < bubbles.length; i++) {
            bubbles[i].move();
        }
    }
    function drawObjects() {
        for (let i = 0; i < starfishes.length; i++)
            starfishes[i].drawStarfish();
        for (let i = 0; i < fishes.length; i++)
            fishes[i].draw();
        for (let i = 0; i < bubbles.length; i++)
            bubbles[i].drawBubble();
    }
})(Aufgabe10 || (Aufgabe10 = {})); //Schlie�en von namespace
//# sourceMappingURL=Aufgabe10.js.map