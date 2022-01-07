#include <Adafruit_IS31FL3731.h>
#include <Wire.h>

Adafruit_IS31FL3731 ledmatrix = Adafruit_IS31FL3731();
int pushButton = 3;
int i=0;

void setup() {

Wire.begin();
 
    if (! ledmatrix.begin()) {
    Serial.println("IS31 not found");
    while (1);
  }
  Serial.println("IS31 found!");
  
  pinMode(pushButton, INPUT);

}

void loop() {

  int buttonState = digitalRead(pushButton);

  if (buttonState == HIGH){
    i++;
    Serial.println("bottone");
  }

   if (((i % 2) != 0)) {
    ledmatrix.drawPixel(3,0,255);
    ledmatrix.drawPixel(3,1,255);
    ledmatrix.drawPixel(2,2,255);
    ledmatrix.drawPixel(3,2,255);
    ledmatrix.drawPixel(4,2,255);
    ledmatrix.drawPixel(1,3,255);
    ledmatrix.drawPixel(2,3,255);
    ledmatrix.drawPixel(3,3,255);
    ledmatrix.drawPixel(4,3,255);
    ledmatrix.drawPixel(5,3,255);
    ledmatrix.drawPixel(1,4,255);
    ledmatrix.drawPixel(2,4,255);
    ledmatrix.drawPixel(4,4,255);
    ledmatrix.drawPixel(5,4,255);
    ledmatrix.drawPixel(1,5,255);
    ledmatrix.drawPixel(2,5,255);
    ledmatrix.drawPixel(2,6,255);
    ledmatrix.drawPixel(3,6,255);
    ledmatrix.drawPixel(4,6,255);
    ledmatrix.drawPixel(4,7,255);
    ledmatrix.drawPixel(5,7,255);
    ledmatrix.drawPixel(10,7,255);
    ledmatrix.drawPixel(11,7,255);
    ledmatrix.drawPixel(13,7,255);
    ledmatrix.drawPixel(14,7,255);
    ledmatrix.drawPixel(10,6,255);
    ledmatrix.drawPixel(11,6,255);
    ledmatrix.drawPixel(12,6,255);
    ledmatrix.drawPixel(13,6,255);
    ledmatrix.drawPixel(14,6,255);
    ledmatrix.drawPixel(11,5,255);
    ledmatrix.drawPixel(12,5,255);
    ledmatrix.drawPixel(13,5,255);
    ledmatrix.drawPixel(12,4,255);
    ledmatrix.drawPixel(12,3,255);
   }
   
    else if ((i % 2) == 0) {
    ledmatrix.drawPixel(3,0,0);
    ledmatrix.drawPixel(3,1,0);
    ledmatrix.drawPixel(2,2,0);
    ledmatrix.drawPixel(3,2,0);
    ledmatrix.drawPixel(4,2,0);
    ledmatrix.drawPixel(1,3,0);
    ledmatrix.drawPixel(2,3,0);
    ledmatrix.drawPixel(3,3,0);
    ledmatrix.drawPixel(4,3,0);
    ledmatrix.drawPixel(5,3,0);
    ledmatrix.drawPixel(1,4,0);
    ledmatrix.drawPixel(2,4,0);
    ledmatrix.drawPixel(4,4,0);
    ledmatrix.drawPixel(5,4,0);
    ledmatrix.drawPixel(1,5,0);
    ledmatrix.drawPixel(2,5,0);
    ledmatrix.drawPixel(2,6,0);
    ledmatrix.drawPixel(3,6,0);
    ledmatrix.drawPixel(4,6,0);
    ledmatrix.drawPixel(4,7,0);
    ledmatrix.drawPixel(5,7,0);
    ledmatrix.drawPixel(10,7,0);
    ledmatrix.drawPixel(11,7,0);
    ledmatrix.drawPixel(13,7,0);
    ledmatrix.drawPixel(14,7,0);
    ledmatrix.drawPixel(10,6,0);
    ledmatrix.drawPixel(11,6,0);
    ledmatrix.drawPixel(12,6,0);
    ledmatrix.drawPixel(13,6,0);
    ledmatrix.drawPixel(14,6,0);
    ledmatrix.drawPixel(11,5,0);
    ledmatrix.drawPixel(12,5,0);
    ledmatrix.drawPixel(13,5,0);
    ledmatrix.drawPixel(12,4,0);
    ledmatrix.drawPixel(12,3,0);
   }

   delay(300);
}
