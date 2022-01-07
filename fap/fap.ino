#include <Wire.h>                 // Must include Wire library for I2C
#include "SparkFun_MMA8452Q.h"    // Click here to get the library: http://librarymanager/All#SparkFun_MMA8452Q

MMA8452Q accel;

int fap = 0;
int vecchioSegno = 0;
int segno;
float numAcc;
int numAccInt;
int tempo = 0;
float tempo2 = 0;
int tempo3 = 0;

void setup() {

  Serial.begin(115200);
  Serial.println("MMA8452Q Basic Reading Code!");
  Wire.begin();

  if (accel.begin() == false) {
    Serial.println("Not Connected. Please check connections and read the hookup guide.");
    while (1);
  }
}

void loop() {

   
  tempo = millis();
  
  //Serial.println(tempo);

  if ((tempo % 10000) == 0){
    Serial.print("ACC=");
     Serial.print(fap / 2);
     Serial.println();
     fap = 0;
  }
  
  getAccelerometerData();

  

}

void getAccelerometerData() {
  if (accel.available()) {      // Wait for new data from accelerometer
    // Acceleration of x, y, and z directions in g units

    
    numAcc = (accel.getCalculatedY());
    numAccInt = (numAcc * 1.01);

    if (numAccInt > 1.01) {
      segno = 1;
    }
    else {
      segno = 0;
    }

    if (vecchioSegno != segno) {
      fap++;
      vecchioSegno = segno;
    }
    else {
      vecchioSegno = segno;
    }

   // if ((tempo % 10000) == 0){
     
   // }
    
  }
}
