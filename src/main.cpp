#include <Arduino.h>
#include <TinyGPS++.h>
#include <SoftwareSerial.h>
#include <WiFi.h>
#include "ThingSpeak.h"
#include "DHT.h"
#include <Adafruit_Sensor.h>
#define DHTPIN 4
#define DHTTYPE DHT22


DHT dht(DHTPIN, DHTTYPE);

char ssid[] = "DIRECT-eX-P"; // your network SSID (name)
char pass[] = "ghostmend";   // your network password

WiFiClient client;

const int buzzer=13;
unsigned long myChannelNumber = 2001088;
const int FieldNumber1 = 5;  // Campo de lectura de ThingSpeak
int statusCode=0;
int aux=0;

const char *myWriteAPIKey = "NT0153KAI4PTGWQW";
const char *myReadAPIKey = "VPRUHCQ9MV2DNMSH";

//const char *myWriteAPIKey = "RJQSMQLRYCCMCHC6";
//const char *myReadAPIKey = "OMI8H24VIBVAQXII";

static const int RXPin = 3, TXPin = 1; // Here we make pin 4 as RX of arduino & pin 3 as TX of arduino
static const uint32_t GPSBaud = 9600;
TinyGPSPlus gps;
SoftwareSerial ss(RXPin, TXPin);

void setup()
{
  Serial.begin(9600); // Initialize serial
  ss.begin(GPSBaud);
  dht.begin();
  pinMode(buzzer, OUTPUT);
 digitalWrite(buzzer, LOW);
  while (!Serial)
  {
    ; // wait for serial port to connect. Needed for Leonardo native USB port only
  }

  WiFi.mode(WIFI_STA);
  ThingSpeak.begin(client); // Initialize ThingSpeak
}

void loop()
{

  // Connect or reconnect to WiFi
  if (WiFi.status() != WL_CONNECTED)
  {
    Serial.print("Attempting to connect to SSID: ");
    // Serial.println(SECRET_SSID);
    while (WiFi.status() != WL_CONNECTED)
    {
      WiFi.begin(ssid, pass); // Connect to WPA/WPA2 network. Change this line if using open or WEP network
      Serial.print(".");
      delay(5000);
    }
    Serial.println("\nConnected.");
  }

  while (ss.available() > 0)
    if (gps.encode(ss.read()))
    {
      Serial.print(F("Location: "));
      if (gps.location.isValid())
      {
        Serial.print(gps.location.lat(), 6);
        Serial.print(F(","));
        Serial.print(gps.location.lng(), 6);
        float latitud;
        float longitud;
        latitud = (float)gps.location.lat(), 6;
        longitud = (float)gps.location.lng(), 6;

        float h = dht.readHumidity();
        // Read temperature as Celsius (the default)
        float t = dht.readTemperature();

        Serial.print("Humidity: ");
        Serial.print(h);
        Serial.print(" %\t");
        Serial.print("Temperature: ");
        Serial.print(t);
        Serial.print(" *C ");

        // set the fields with the values
        ThingSpeak.setField(1, latitud);
        ThingSpeak.setField(2, longitud);
        ThingSpeak.setField(3, t);
        ThingSpeak.setField(4, h);
      
        // Write to ThingSpeak. There are up to 8 fields in a channel, allowing you to store up to 8 different
        // pieces of information in a channel.  Here, we write to field 1.
        aux=aux+1;
        if (aux == 50){
          aux=0;
          int x = ThingSpeak.writeFields(myChannelNumber, myWriteAPIKey);
          // int x = ThingSpeak.writeField(myChannelNumber, 1, latitud, myWriteAPIKey);
          if (x == 200)
          {
            Serial.println("Channel update successful.");
  
          }
          else
          {
            Serial.println("Problem updating channel. HTTP error code " + String(x));
          }
          
                
      }
      else
      {
        Serial.print(F("INVALID"));
      }

      Serial.print(F("  Date "));
      if (gps.date.isValid())
      {
        Serial.print(gps.date.month());
        Serial.print(F("/"));
        Serial.print(gps.date.day());
        Serial.print(F("/"));
        Serial.print(gps.date.year());
      }
      else
      {
        Serial.print(F("INVALID"));
      }

            //start read thingspeak
                              //configuracion para leer datos desde thingspeak alarma buzzer
                    float valor1 = ThingSpeak.readFloatField(myChannelNumber , FieldNumber1, myReadAPIKey);
                    statusCode = ThingSpeak.getLastReadStatus();
                     String num = String(valor1);
                    if (statusCode == 200)
                    {
                      Serial.print("Estado del buzzer: ");
                      Serial.println(valor1);
                      if(num == "1.00"){
                         digitalWrite(buzzer, HIGH);
                         Serial.println("Buzzer encendido");
                      }else{
                        digitalWrite(buzzer, LOW);
                        Serial.println("Buzzer Apagado");
                      }
                    }
                    else
                    {
                      Serial.println("Sin conexión a Internet");
                    }
             
          //end read thingspeak
        }
      Serial.println("-----");
      Serial.println("aux: ");
      Serial.println(String(aux));
      Serial.println("-----");
      delay(50);
      Serial.println();
    }

  if (millis() > 5000 && gps.charsProcessed() < 10)
  {
    Serial.println(F("No GPS detected: check wiring."));
    while (true)
      ;
  }


 //delay(100);
}