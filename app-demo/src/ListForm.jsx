import React, {useState} from "react";

const ListForm = () => { 
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleAddItem = (e) => {
    e.preventDefault();
    if(inputValue.trim()) {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  return ( 
    <div className="flex flex-col items-center p-4">
      <form onSubmit={handleAddItem} className="mb-4">
        <input
          type="text" 
          className="border border-gray-300 p-2 mr-2 bg-white rounded"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter an item"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add Item
        </button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="border-b border-gray-200 py-1">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListForm;