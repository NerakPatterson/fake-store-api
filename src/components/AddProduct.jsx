import { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

function AddProduct() {
    const [product, setProduct] = useState();
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
      title: '',
      description: '',
      category: '',
      price: '',
      image: '',
    });

    const handleChanges = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const response = await axios.post("https://fakestoreapi.com/products", formData);
      console.log(response.data);
      setProduct(response.data);
      setSubmitted(true);
      setError(null);
    } catch (error) {
      setError(`Error submitting form, Please try again: ${error.message}`);
      setSubmitted(false);
    }
  }

  return (
    <Container className="mt-5">
      <h2 className="my-4"style={{ color: 'white' }}>New Product Form</h2>
      {submitted && (
        <Alert variant="success" dismissible>{product.title} created successfully!</Alert>
      )}
      {error && (<Alert variant="danger" dismissible>{error}</Alert>
      )}
      
      <div
        className="border border-2 bg-white rounded p-4 text-center w-100"
        style={{ margin: "0 auto" }}
      >
        <Form onSubmit={handleSubmit}>
          {/*Item Title*/}
          <Form.Group className="mb-3"><Form.Label>Item Name</Form.Label>
          <Form.Control type="text"
            placeholder="Enter product title" name="title" value={formData.title} onChange={handleChanges}
           required /> </Form.Group> 
          
          {/*Item Description*/}
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Enter product description" name="description"
              value={formData.description} onChange={handleChanges} required/>
          </Form.Group> 
          
          {/*Price*/}
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control placeholder="Enter product price" name="price"
              value={formData.price} onChange={handleChanges} required />
          </Form.Group>
         
          {/*Category*/}
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control type="text" placeholder="Enter product category" name="category"
              value={formData.category} onChange={handleChanges} required  />
          </Form.Group>   
         
          {/*Image*/}
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control type="text" placeholder="Enter product image URL" name="image"
              value={formData.image} onChange={handleChanges} required />
          </Form.Group>
         
          {/*Submit Button*/}
          <Button variant="dark" className="text-white border border-3 border-secondary rounded"
            type="submit"  >
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default AddProduct;            