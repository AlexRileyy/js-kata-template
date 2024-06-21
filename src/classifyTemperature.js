/* 

Write a function, `classifyTemperature` which takes a number representing a temperature in celsius and returns a string roughly categorising that temperature, according to the following rules:

-infinity to -20: → `"very freezing"`

-20 to 0 → `"freezing"`

0 to 15 → `"chilly"`

15 to 25 → `"pleasant"`

25 to 40 → `"hot"`

above 40 → `"too hot"`

if the temperature is exactly on an upper bound, it should be reported as the next category.  e.g. 15 is “pleasant”, not “chilly”.

Note the function should return a string to the caller, NOT log anything to the console.

### Example:

`classifyTemperature(26.3)` should return `"hot"`

*/ 

function classifyTemperature(temperature){
    if (temperature <= -21) {
        return "very freezing" 
    } 
    else if (temperature >= -20 || temperature <= -1) {
        return "freezing"
    }
    else if (temperature >= 0 || temperature <= 14) {
        return "chilly"
    }
    else if (temperature >= 15 || temperature <= 24) {
        return "pleasant"
    }
    else if (temperature >= 25 || temperature <= 39) {
        return "hot"
    }
    else (temperature >= 40); {
        return "too hot"
    }

}
    
  console.log(classifyTemperature(30))


  export { classifyTemperature };
