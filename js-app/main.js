const beanVarietyUrl = "https://localhost:5001/api/beanvariety/";
const coffeeUrl = "https://localhost:5001/api/coffee/";

const button = document.querySelector("#run-button");

// button.addEventListener("click", () => {
//   getAllBeanVarieties()
//     .then((beanVarieties) => {
//       console.log(beanVarieties);
//     })
//     .then(() => {
//       getAllCoffees().then((coffees) => {
//         console.log(coffees);
//       });
//     });
// });

button.addEventListener("click", () => {
  getAllBeanVarieties().then((beanVarieties) => {
    console.log(beanVarieties);
  });
  getAllCoffees().then((coffees) => {
    console.log(coffees);
  });
});

const getAllBeanVarieties = () => {
  return fetch(beanVarietyUrl).then((resp) => resp.json());
};

const getAllCoffees = () => {
  return fetch(coffeeUrl).then((resp) => resp.json());
};
