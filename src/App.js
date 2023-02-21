import { useState } from "react";
import MaterialIcon, { colorPalette } from "material-icons-react";

function App() {
  const [showMenu, setShowMenu] = useState(false)
  const products = [
    {
      id: 1,
      image:
        "https://www.freeiconspng.com/uploads/juice-png-5.png",
      name: "Orange Juice",
      restaurant: "Health Home",
      price: 25.99,
    },
    {
      id: 2,
      image:
        "https://www.freeiconspng.com/uploads/juice-png-13.png",
      name: "Natural Cocktail",
      restaurant: "Health Home",
      price: 20.49,
    },
    {
      id: 3,
      image:
        "https://www.freeiconspng.com/uploads/drink-fruits-juice-png-11.png",
      name: "Juice X",
      restaurant: "Health Home",
      price: 15.99,
    },
    {
      id: 12,
      image:
        "https://www.freeiconspng.com/uploads/juice-png-22.png",
      name: "Carrot Cleanse",
      restaurant: "Health Home",
      price: 12.55,
    },
  ];
  return (
    <div className="p-0 md:p-6 h-screen w-screen bg-gray-200 flex flex-col">
      <div className="w-screen relative md:w-96 bg-white shadow-xl h-full m-auto rounded-lg">
       <div className="h-5/6 overflow-auto">
         {/* Menu bar */}
         <div className="w-full border-b-2 border-neutral-100 p-6 py-3 flex flex-row space-between">
          <div className="flex-grow">
            <h2 className="font-semibold text-orange-500 text-2xl">
              Food Joint
            </h2>
          </div>
          <button>
            <MaterialIcon
              icon="shopping_cart"
              size="30"
              color={colorPalette.amber.A700}
            />
          </button>
          {!showMenu && <button onClick={() => setShowMenu(!showMenu)} className="ml-3">
            <MaterialIcon icon="filter_list" size="30" />
          </button>}
          {showMenu && <button onClick={() => setShowMenu(!showMenu)} className="ml-3">
            <MaterialIcon icon="close" size="30" />
          </button>}
        </div>
        {/* Extra Menu Items */}
        {showMenu && <div className="w-full px-6 border-b-2 pt-2 border-gray-100 flex flex-row space-between">
          <div className="flex-grow" />
          <button className="ml-3">
            <MaterialIcon icon="person" size="30" />
          </button>
          <button className="ml-3">
            <MaterialIcon icon="notifications" size="30" />
          </button>
        </div>}
        
        {/* Banner */}
        <div className="p-6 pt-3">
          <h3 className="font-semibold text-neutral-600 text-4xl">Welcome!</h3>
          <div className="py-4 flex flex-row">
            <button className="bg-neutral-100 rounded-l-full pt-3 pb-1 px-3">
              <MaterialIcon icon="search" size="25" />
            </button>
            {/* Search bar */}
            <input
              className="flex-grow pl-1 p-3 bg-neutral-100 font-semibold"
              placeholder="Search"
            />
            <button className="bg-neutral-100 rounded-r-full pt-3 pb-1 px-3">
              <MaterialIcon icon="tune" size="25" />
            </button>
          </div>
        </div>

        {/* Food Items */}
        <div className="px-6 pb-6 flex flex-row flex-wrap">
          {products.map((product) => (
            <div className="p-2 w-1/2">
            <div key={product.id} className="p-2 h-auto rounded-xl ring-1 ring-neutral-200 shadow-lg hover:shadow-sm transition duration-500 bg-neutral-100">
              <img src={product.image} className="rounded-xl" alt={product.name} />
              <h4 className="font-bold text-neutral-800 my-1 text-base">
                {product.name}
              </h4>
              <h6 className="font-light text-neutral-600 mb-1 text-xs">
                {product.restaurant}
              </h6>
              <h4 className="font-bold text-neutral-800 my-1 text-lg">
                <span className="text-sm  text-neutral-600">GHS </span>{product.price}
              </h4>
              <div className="text-right">
              <button className="pt-0 pb-1 p-2 bg-orange-600 font-extrabold text-xl text-white rounded-xl">+</button>
              </div>
            </div>
            </div>
          ))}
        </div>

       </div>

        {/* Bottom Nav */}
        <div className="h-1/6 border-t-2 border-neutral-200 bottom-0 bg-zinc-50 rounded-b-xl left-0 w-full p-3 text-center flex flex-row shadow-lg">
          <button className="m-auto flex-grow flex flex-col p-auto items-center">
            <MaterialIcon
              icon="shopping_cart"
              size="30"
              color={colorPalette.amber.A700}
            />
            <span className="font-semibold m-1 text-center text-sm text-yellow-500">Dishes</span>
          </button>
          <button className="m-auto flex-grow flex flex-col p-auto items-center">
            <MaterialIcon
              icon="shopping_cart"
              size="30"
            />
            <span className="font-semibold m-1 text-center text-sm text-gray-500">Food Joints</span>
          </button>
          <button className="m-auto flex-grow flex flex-col p-auto items-center">
            <MaterialIcon
              icon="shopping_cart"
              size="30"
            />
            <span className="font-semibold m-1 text-center text-sm text-gray-500">Orders</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
