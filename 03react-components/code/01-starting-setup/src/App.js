import Expenses from "./components/Expenses/Expenses";

// JSX is short for javascript xml (html is a kind of xml?)
const App = () => {
  // we return html code inside of a javascript file... this is not valid js code ... it is JSX which is a special syntax invented by the react team
  // In regular javascript you would use an imperative approach
  //document.getElementById('root')
  // const pararaph = document.createElement('p')
  // paragraph.textContent = 'this is also  visible'
  //document.getElementById('root').append(paragraph)

  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
