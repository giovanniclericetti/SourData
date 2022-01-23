// digital pin 2 has a pushbutton attached to it. Give it a name:
int pushButton = 3;

// the setup routine runs once when you press reset:
void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(115200);
  // make the pushbutton's pin an input:
  pinMode(pushButton, INPUT);
}

// the loop routine runs over and over again forever:
void loop() {
  // read the input pin:
  int buttonState = digitalRead(pushButton);
   if (buttonState == HIGH) {
  Serial.println("bottone");
   delay(300); 
   }
}
