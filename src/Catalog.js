import React, { useState } from 'react';
import { Dropdown, Button, Card, ListGroup } from 'react-bootstrap';
const Catalog = () => {
  const [selectedItem, setSelectedItem] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [availableItems, setAvailableItems] = useState(['Idly', 'Dosa', 'Poori', 'Bajji']);

  const handleSelectedItem = (e) => {
    setSelectedItem(e.target.text);
  };
  //adding items to the cart
  const addToCart = () => {
    if(selectedItem !== ''){
      setCartItems([...cartItems, selectedItem]);
      setAvailableItems(availableItems.filter(item => item !== selectedItem));
      setSelectedItem('');
    }
  }

  //deleting items from the cart
  const deleteFromCart = (itemToDelete) => {
    setCartItems(cartItems.filter(item => item !== itemToDelete));
    setAvailableItems([...availableItems, itemToDelete]);
  };

  return (
    <div>
      <Card className="bg-dark text-white mt-2 mb-2">
      <Dropdown  className='ml-5 mt-3'>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selectedItem || 'Select an item'}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {availableItems.map((item, id) => (
            <Dropdown.Item key={id} onClick={handleSelectedItem}>{item}</Dropdown.Item> 
          ))}
        </Dropdown.Menu>
      </Dropdown>
      
      <div className='ml-5 mt-3'>
          <Button className='primary ml-3' onClick={addToCart}>Add To Cart</Button>
          <Card className="bg-dark text-white mt-2 mb-2">
            <div className='ml-3 mt-3 mb-3'>
              <h5>Selected Items from Menu:</h5>
              <ListGroup>
                {cartItems.map((item, id) => (
                  <ListGroup.Item key={id}>
                    {item}
                    <Button className="ml-2" variant="danger" size="sm" onClick={() => deleteFromCart(item)}>Remove</Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </Card>
        </div>
      </Card>
    </div>
  )
}

export default Catalog