# About the solution

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

For testing [Testing Library](https://testing-library.com/) and [JEST](https://jestjs.io/) was used.

---

### Local Testing

0. Prerequisites: Node.js and npm.  

1. Clone the repository to your local machine.

2. Run the command below to install node modules:
```bash
npm install
```
3. Build the solution with the following command:
```bash
npm run build
```
4. Run unit test with:
```bash
npm run test
```  
5. Then, run the development server:  

```bash
npm run dev
```
6. Open http://localhost:3000 with your browser to see the result.  

7. You can interact with the solution.
  
<br>
<br>
<br>

# Remarks

### Data timing
The data is not registered instantly with the POST API calls.  
You must wait (approximately a half day, maybe more) to appear in the database and after that can be the data pulled with the ".../spendings/" call.  

Also the data can be accessed instantly via specifing the id like ".../spendings/398/"

I hope I did not make mistake in the REST calls, causing this issue.  
I double checked on the web framework, also there the newest data is not present.

---

### Error handling

The error handling is done by the default input system of the input HTML elements.  

If the form is not suitable (well it is ugly), in that case it can be upgraded by React in a few steps:  
1. Add state variables to the component which needs better errors.
2. Overwrite default error handling in the specific elements, with own functions.
3. Connect the state with the new error handling.
4. Add cinditional rendering to the error lables / elements.

---

### Redux Store

Because this task was "smaller" one, I did not set up a React Redux store.  
I used callbacks instead.  

The data flows down in the DOM (from root to leaves), but even in this task there were cases where the data should flow upwards also in the tree (to notify other components).  
In this case to setup Redux Store would make sense to reduce data passing through properties.  

If the task was a little bit bigger and more complex, I would definitely set up a Redux store for it.


---

### UI Library and Elements

I did not used any other library like Material UI or its descendants.  
After the project, I feel I should have used them to spare some time in development.  

Next time I will definitely use some UI library for faster prototyping, even use the framework redefinitions for existing HTML elements from React (like Button, etc.).

---

### Animations

I would like to add more animations, but the scope got a little bit bigger, than I could manage.  

Also if there would be animations I would leave out Tailwind from the project.  
It is good for prototyping, but in my opinion bigger projects does not scale well (in readability and complexity adds more layers).  
I intend to use CSS Modules if there should be more animations, because it can be a better modular solution.

---

<br>
<br>
<br>

I hope you will like my solution!  
Have a great day!

Kornél