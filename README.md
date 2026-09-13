# 🚀 Dev Stack

Dev Stack is a modern React-based web application that helps developers explore different technologies and build their own development stack.

Users can explore technologies, check their category, difficulty, rating, and add their favorite technologies to a personalized stack.

## 🌐 Live Site

https://dev-stack123.netlify.app/

## 📦 GitHub Repository

https://github.com/Amena-Begum/Dev-Stack

---

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- React-Toastify
- JSON
- Vite

---

## ✨ Features

### 1. Explore Technologies

Users can explore different frontend, backend, database, language, styling, DevOps, and tool technologies with their description, difficulty, rating, and category.

### 2. Build Your Own Stack

Users can add technologies to the "Your Stack" section and create their own personalized development stack.

### 3. Stack Management

Users can remove individual technologies or remove all technologies from their stack. Toast notifications are also shown for add, duplicate, remove, and remove-all actions.

---

# 📚 React Questions & Answers
## 1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript.

It makes React components easier to write and understand.

Example:
```jsx
function App() {
  return <h1>Hello React</h1>;
}
```
## 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component.

State is used to store and manage data that can change inside a component.

In this project, props are used to pass technology data, while state is used to manage the selected technologies.

## 3. What does the useState hook do, and where did you use it in this project?

The useState hook is used to create and manage state in a React component.

In this project, I used useState to store the technologies selected by the user.

I also used it to control the mobile menu in the Navbar.

Example:
```jsx
const [selectedTechnologies, setSelectedTechnologies] = useState([]);
```
## 4. What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook is used to perform side effects in a React component.

In this project, I used useEffect to load technology data from the local JSON file when the component loads.

Example:
```jsx
useEffect(() => {
  fetch("/data/technologies.json")
    .then((response) => response.json())
    .then((data) => {
      setTechnologies(data);
      setLoading(false);
    });
}, []);
```
## 5. Why does every item in a .map() list need a unique key prop?

Every item in a .map() list needs a unique key so that React can identify each item correctly.

It helps React efficiently update, add, or remove items from the list.

In this project, I used the technology id as the key.

Example:
```jsx
{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}
```
## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

In this project, I used conditional rendering in the Your Stack section.

If no technology is selected, it shows an empty message. If technologies are selected, it shows the selected items.

Example:
```jsx
{selectedTechnologies.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <div>
    {/* Selected technologies */}
  </div>
)}
```
## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can pass data to a child component using props.

A child component can send information back to the parent by calling a function that the parent passes through props.

In this project, the parent passes the onAdd function to the child component.

Example:
```jsx
<TechnologyCard
  technology={technology}
  onAdd={onAdd}
/>
```
The child calls the function when the user clicks the Add to Stack button:
```jsx
onAdd(technology);
```
This allows the parent to update the selected technologies.

