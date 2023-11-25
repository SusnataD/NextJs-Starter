import Tabs from "react-responsive-tabs";

const HomePage = ({ product, newCategories }) => {
  console.log(product);
  console.log(newCategories);
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
                      <p className="title" key={index}>
                        {item.title}
                      </p>
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
