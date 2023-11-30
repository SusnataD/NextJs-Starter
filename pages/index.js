import Tabs from "react-responsive-tabs";
import CardComponent from "../component/CardComponent";
import { useState } from "react";

const HomePage = ({ product, newCategories }) => {
  const [cart, setCart] = useState([]);
  const addItem = (item) => {
    setCart([...cart, { title: item.title, price: item.price }]);
  };
  console.log(cart);

  function getTabs() {
    {
      return Object.keys(newCategories).length > 0
        ? Object.keys(newCategories) // Create a copy of the array to avoid modifying the original
            .map((tab, index) => ({
              title: <div className="tab-item">{tab}</div>,
              getContent: () => (
                <div className="tab-body-content">
                  <div className="tab-content">
                    {newCategories[tab].map((item, index) => (
                      <div className="items" key={index}>
                        <CardComponent
                          image={item.image}
                          title={item.title}
                          description={item.description}
                          price={item.price}
                          addItem={addItem}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ),

              // /* Optional parameters */
              // key: index,
              tabClassName: "tab",
              panelClassName: "panel",
            }))
        : [];
    }
  }

  return (
    <div className="products">
      <h1>products!</h1>
      <div className="responsive-tab-accordian">
        <Tabs items={getTabs()} showMore={false} />
      </div>
      <div className="myCart">
        <h1 className="cart-title">My Cart</h1>
        {cart.length > 0 &&
          cart.map((item) => {
            return (
              <div key={Math.random()}>
                <p>{item.title}</p>
                <h3>{item.price}</h3>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default HomePage;

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const product = await res.json();

  //--------------------------------------------------------
  // const categorizedData = product.reduce((acc, curr) => {
  //   const { category, description } = curr;
  //   if (!acc[category]) {
  //     acc[category] = {
  //       items: [],
  //     };
  //   }
  //   acc[category].items.push(description);
  //   return acc;
  // }, {});
  //---------------------------------------------------------
  //console.log(categorizedData);

  let newCategories = {};

  product.forEach((product) => {
    if (newCategories[product.category]) {
      newCategories[product.category].push(product);
    } else {
      newCategories[product.category] = [product];
    }
  });

  return { props: { product, newCategories } };
}
