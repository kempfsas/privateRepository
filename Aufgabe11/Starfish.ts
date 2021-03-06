namespace Aufgabe11 {


    export class Starfish extends MovingObject {
        //x: number;
        //y: number;

    constructor() {
            super();
            this.setRandomPosition();
            this.setColor();
        }
        
        setRandomPosition(): void {
            this.x = (460);
            this.y = (690);

            }
        
        setColor(): void {
            this.color = "rgb(255, 51, 255)";
            }

        move(): void {
            this.x += Math.random() * 2- 1;
            this.y += Math.random() * 2 - 1;
        }


        //Funktion f�r Seesterne
        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = this.color;//"rgb(255, 51, 255)";
            crc2.moveTo(this.x, this.y - 25);
            crc2.lineTo(this.x + 20, this.y);
            crc2.lineTo(this.x - 5, this.y + 25);
            crc2.lineTo(this.x + 30, this.y + 18);
            crc2.lineTo(this.x + 50, this.y + 40);
            crc2.lineTo(this.x + 50, this.y + 12);
            crc2.lineTo(this.x + 80, this.y - 5);
            crc2.lineTo(this.x + 50, this.y - 8);
            crc2.lineTo(this.x + 50, this.y - 35);
            crc2.lineTo(this.x + 30, this.y - 12);
            crc2.lineTo(this.x, this.y - 25);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }


    }

}