# Math API Documentation

This documentation describes all available API endpoints in this project. Each endpoint includes request format, expected response format, example usage, and notes.

This API provides several math-related calculations using REST endpoints.

---

## **Hello Endpoint**

**Request Format:** `/hello`

**Request Type:** GET

**Returned Data Format:** JSON

**Description:** Responds with a simple greeting in JSON format.

**Example Request:**
/hello

**Example Response:**

{
  "hello": "world"
}

--------

**Circle Calculation:**

**Request Format:** `/math/circle/:r`  
**Request Type:** GET  
**Returned Data Format:** JSON  

**Description:** Calculates the area and circumference of a circle using the supplied radius value in the URL.

**Example Request:**
/math/circle/2

**Example Response:**

{
  "area": 12.566370614359172,
  "circumference": 12.566370614359172
}
 


---


## Rectangle Calculation

**Request Format:** `/math/rectangle/:width/:height`  
**Request Type:** GET  
**Returned Data Format:** JSON  

**Description:** Calculates the area and perimeter of a rectangle from the values provided in the URL.

**Example Request:**
/math/rectangle/4/2

**Example Response:**

{
  "area": 8,
  "perimeter": 12
}
Exponent and Optional Root Calculation

Request Format: /math/power/:base/:exponent

Optional Query Parameter: root=true

Request Type: GET

Returned Data Format: JSON

Description: Calculates the exponent result. If root=true is included in the query, the square root of the base will also be returned.

Without Query Parameter

Example Request:
/math/power/4/2
{
  "result": 16
}
With root=true

Example Request:

/math/power/4/2?root=true
Example Response:

{
  "result": 16,
  "root": 2
}
