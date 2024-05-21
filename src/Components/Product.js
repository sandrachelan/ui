import {useEffect, useState } from "react";
import axios from 'axios';
function Product()
{
    const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [supplier, setSupplier] = useState("");
  const [contact, setContact] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [product, setUsers] = useState([]);

useEffect(() => {
  (async () => await Load())();
  }, []);
  
  
  async function  Load()
  {
     const result = await axios.get(

        "http://127.0.0.1:8000/student");
        setUsers(result.data);
        console.log(result.data);
 }
   
 
async function save(event)
   {
       event.preventDefault();
   try
       {
        await axios.post("http://127.0.0.1:8000/product",
       {
        id: id,
        name: name,
        supplier: supplier,
        contact: contact,
        quantity: quantity,
        price: price,

        
     
        

       });
         alert("Product Registation Successfully");
         setId("");
         setName("");
        setSupplier("");
        setContact("");
        setQuantity("");
        setPrice("");
        Load();

     
       
       }
   catch(err)
       {
         alert("Product Registation Failed");
       }
  }


  async function editProduct(product)
  {
    setId(product.id);
   setName(product.name);
   setSupplier(product.supplier);
   setContact(product.contact);
   setQuantity(product.quantity);
   setPrice(product.quantity);

   
  }

  async function DeleteProduct(id)
  {
     
       await axios.delete("http://127.0.0.1:8000/product/" + id);
       alert("Product deleted Successfully");
       setId("");
       setName("");
       setSupplier("");
       setContact("");
       setQuantity("");
       setPrice("");



       Load();
 
 
  }
  async function update(event)
  {
   event.preventDefault();
  try
      {
        await axios.put("http://127.0.0.1:8000/product/"+ price.find(u => u.id === id).id || id,

       
      {
        id: id,
        name: name,
        supplier: supplier,
        contact: contact,
        quantity: quantity,
        price: price,

      });
        alert("Product Updated");
        setId("");
        setName("");
        setSupplier("");
        setContact("");
        setQuantity("");
        setPrice("");

        Load();
     
      }
  catch(err)
      {
        alert(" Product update Failed");
      }
 }
 return (
   <div class="container">
      <h1>Product  Details</h1>
      <div class="container mt-4" >
         

         <form>
              <div class="form-group">

               <label>Product Name</label>
                <input  type="text" class="form-control" id="name"
                value={name}
                onChange={(event) =>
                  {
                    setName(event.target.value);      
                  }}
                />
              </div>


              <div class="form-group">
                <label>Product Supplier </label>
                <input  type="text" class="form-control" id="course"
                 value={supplier}
                  onChange={(event) =>
                    {
                     setSupplier(event.target.value);      
                    }}
                />
              </div>
              <div class="form-group">
                <label>Contact</label>
                <input type="text" class="form-control" id="fee"
                  value={contact}
                onChange={(event) =>
                  {
                    setContact(event.target.value);      
                  }}
                />
              </div>

              <div class="form-group">
                <label>Quantity</label>
                <input type="text" class="form-control" id="fee"
                  value={quantity}
                onChange={(event) =>
                  {
                    setQuantity(event.target.value);      
                  }}
                />
              </div>

             
              <div class="form-group">
                <label>Price</label>
                <input type="text" class="form-control" id="fee"
                  value={price}
                onChange={(event) =>
                  {
                    setPrice(event.target.value);      
                  }}
                />
              </div>

                 <div>
              <button   class="btn btn-primary mt-4"  onClick={save}>Register</button> 
              <button   class="btn btn-warning mt-4"  onClick={update}>Update</button>
              </div>  

              
            </form>
          </div>


          <table class="table table-dark" align="center">
  <thead>
    <tr>
      <th scope="col">Product Name</th>
      <th scope="col">Product  Supplier</th>
      <th scope="col">Contact</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>

      
    </tr>
  </thead>
       {product.map(function fn(product)
       {
            return(
            <tbody>
                <tr>
                <th scope="row">{price.id} </th>
                <td>{product.name}</td>
                <td>{product.supplier}</td>
                <td>{product.contact}</td>
                <td>{product.quantity}</td> 
                <td>{product.price}</td> 

                <td>
                    <button type="button" class="btn btn-warning"  onClick={() => editProduct(product)} >Edit</button>  
                    <button type="button" class="btn btn-danger" onClick={() => DeleteProduct(product.id)}>Delete</button>
                </td>
                </tr>
            </tbody>
            );
            })}
            </table>
       </div>
            );
        }
export default Product;

