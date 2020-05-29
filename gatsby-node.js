// custom source plugin
const fetch = require('node-fetch');

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  try {
    // Fetch the data
    const res = await fetch(`https://api.mediehuset.net/bakeonline/categories`);

    // Transform the data into json
    const data = await res.json();
     // console.log(data);

    // Map over the categories array, calling action.createNode on each item in the array
    data.categories.forEach(categories => {
      const node = {
        ...categories, // Copy all of the properties from the categories object
        id: createNodeId(`${categories.id}`), // Needs to be unique
        internal: {
          type: 'categories',
          contentDigest: createContentDigest(categories), // Pass in the categories object to make sure it's unique
        },
      };

      // Create the actual data node
      actions.createNode(node);
    });
  } catch (error) {
    console.log(error);
  }

  try {
    // Fetch the data
    const res = await fetch(`https://api.mediehuset.net/bakeonline/products`);

    // Transform the data into json
    const data = await res.json();
     // console.log(data);

    // Map over the products array, calling action.createNode on each item in the array
    data.products.forEach(products => {
      const node = {
        ...products, // Copy all of the properties from the products object
        id: createNodeId(`${products.id}`), // Needs to be unique
        internal: {
          type: 'products',
          contentDigest: createContentDigest(products), // Pass in the products object to make sure it's unique
        },
      };

      // Create the actual data node
      actions.createNode(node);
    });
  } catch (error) {
    console.log(error);
  }
};
