import { useState } from "react"; // Importing the useState hook from React
import "../styles/ShoppingCart.css"; 

export const ShoppingCart = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState("");

    const addItem = () => {
        if (newItem.trim() === "") 
        return; 

        const newAddedItem = { id: Date.now(), text: newItem, complete: false };
        setItems([...items, newAddedItem]);
        setNewItem(""); 
      };

      const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id));
      };
    
      
      const toggleComplete = (id) => {
        setItems(items.map(item => 
          item.id === id ? { ...item, complete: !item.complete } : item
        ));
      };

      const editItem = (id, newText) => {
        if (newText.trim() === "") 
        return;
        setItems(items.map(item => 
          item.id === id ? { ...item, text: newText } : item))
        };  

      return(
        <div className = "ShoppingCart">
            <center><h1>Shopping List</h1></center>
            <div className="add-item">
                <input
                    type = "text"
                    value = {newItem}
                    onChange = {(e) => setNewItem(e.target.value)}
                    placeholder="Add a new item"
                />
                <button onClick={addItem}>Add</button>
            </div>
            <ul>

        {items.map(item => (
          <li 
            key={item.id} 
            style={{ 
              textDecoration: item.complete ? 'line-through' : 'none', 
              color: item.complete ? 'grey' : 'black',
              background: item.complete ? '#aeffd0d8' : '#f7f7f7',
            }}
          >
            <span onClick={() => toggleComplete(item.id)}>{item.text}</span>
            <div className="modify">
                <button className = "edit" onClick={() => {
                const newText = prompt("Edit your item : ", item.text);
                if (newText !== null) editItem(item.id, newText);
                }}>Edit</button>
                
                <button className = "remove" onClick={() => removeItem(item.id)}>Remove</button>
            </div>
            
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;