import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await axios.delete(`https://fakestoreapi.com/products/${id}`);
        alert('Product deleted successfully.');
        // Refresh product list
        setProducts(products.filter(product => product.id !== id));
      } catch (error) {
        console.error('Failed to delete product:', error);
        alert('Could not delete the product.');
      }
    }
  };

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch products");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Container className="mt-4">
      <h2 className="mb-4" style={{ color: 'white' }}>Product</h2>
      <Row className="g-4">
        {products.map(product => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="d-flex align-items-stretch">
            <Card className="w-100 h-100">
              <Card.Img variant="top" src={product.image} style={{ height: "150px", objectFit: "contain" }} />
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="fs-6 text-center">{product.title}</Card.Title>
                <Card.Text className="text-center">${product.price}</Card.Text>

                <div className="d-grid gap-2 mt-2">
                  <Link to={`/product/${product.id}`} className="btn btn-info">View Details</Link>
                  <Link to={`/edit-product/${product.id}`} className="btn btn-warning">Edit</Link>
                  <Button variant="danger" onClick={() => handleDelete(product.id)}>Delete</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;
