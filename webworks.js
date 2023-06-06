/*## **Part One: Solidify Terminology**

In your own terms, define the following terms:

- What is HTTP? = hypertext transfer protocol
- What is a URL? = uniform resource locator
- What is DNS? = Domain Name System
- What is a query string? it is what is being searched. it assigns values to specific parameters
- What are two HTTP verbs and how are they different? Post and Get....Post creates and is not safe. Get retrieves a resource and is safe.
- What is an HTTP request? you request a website with a URL. it goes to the server
- What is an HTTP response? you get a response - server sends a response to the web browser.
- What is an HTTP header? Give a couple examples of request and response headers you have seen. <html>, content type, content language
- What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser? a request is sent to the server to get the information that is on that page.

## ****Part Two: Practice Tools****

1. Using ***curl***, make a ***GET*** request to the *icanhazdadjoke.com* API to find all jokes involving the word “pirate” done.
2. Use ***dig*** to find what the IP address is for *icanhazdadjoke.com* done
3. Make a simple web page and serve it using ***python3 -m http.server***. Visit the page in a browser. done

## **Part Three: Explore Dev Tools**

Build a very simple HTML form that uses the GET method (it can use the same page URL for the action) when the form is submitted.

Add a field or two to the form and, after submitting it, explore in Chrome Developer tools how you can view the request and response headers.

Edit the page to change the form type to POST, refresh in the browser and re-submit. Do you still see the field in the query string? Explore in Chrome how you can view the request and response headers, as well as the form data.*/
<!DOCTYPE html>
<html>
<head>
  <title>Simple Form</title>
</head>
<body>
  <form method="GET" action="">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    <br><br>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <br><br>
    <input type="submit" value="Submit">
  </form>
</body>
</html>

## **Part Four: Explore the URL API**

At times, it’s useful for your JavaScript to look at the URL of the browser window and change how the script works depending on parts of that (particularly the query string).

[Read about the URL API](https://developer.mozilla.org/en-US/docs/Web/API/URL)

Try some of the code examples in the Chrome Console so that you can get comfortable with the basic methods and properties for instances of the URL class.