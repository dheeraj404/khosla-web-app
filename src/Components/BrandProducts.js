import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import {
  Box, Grid, Typography, Pagination, List, ListItem, ListItemText, Paper, MenuItem, FormControl, Select, InputLabel, Slider, IconButton, Drawer
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ProductCard from './ProductCard'; // Assuming you have a ProductCard component for displaying each product
import { styled } from '@mui/system';

const GlassPaper = styled(Paper)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '10px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const BrandProducts = () => {
  const { brandName } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [page, setPage] = useState(1);
  const [sortMethod, setSortMethod] = useState('nameAsc');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const productsPerPage = 12;

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/products', {
        params: { brand: brandName }
      });
      setProducts(response.data);
      setFilteredProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchBrands = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/brands');
      setBrands(response.data);
    } catch (error) {
      console.error('Error fetching brands:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchBrands();
  }, [brandName]);

  useEffect(() => {
    let sortedProducts = [...products];
    sortedProducts = sortedProducts.filter(product => product.price >= priceRange[0] && product.price <= priceRange[1]);

    switch (sortMethod) {
      case 'priceAsc':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'nameDesc':
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'nameAsc':
      default:
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }
    setFilteredProducts(sortedProducts);
  }, [sortMethod, priceRange, products]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleSortChange = (event) => {
    setSortMethod(event.target.value);
  };

  const handlePriceRangeChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginatedProducts = filteredProducts.slice((page - 1) * productsPerPage, page * productsPerPage);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const filterDrawer = (
    <GlassPaper elevation={3}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', display: { xs: 'flex', md: 'none' } }}>
        <Typography variant="h6" component="h2">
          Filters
        </Typography>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Typography variant="h6" component="h2">
        Sort By
      </Typography>
      <FormControl fullWidth variant="outlined" sx={{ marginBottom: '16px' }}>
        <InputLabel id="sort-label">Sort By</InputLabel>
        <Select
          labelId="sort-label"
          value={sortMethod}
          onChange={handleSortChange}
          label="Sort By"
        >
          <MenuItem value="nameAsc">Name: A to Z</MenuItem>
          <MenuItem value="nameDesc">Name: Z to A</MenuItem>
          <MenuItem value="priceAsc">Price: Low to High</MenuItem>
          <MenuItem value="priceDesc">Price: High to Low</MenuItem>
        </Select>
      </FormControl>
      <Typography variant="h6" component="h2" sx={{ marginBottom: '16px' }}>
        Price Range
      </Typography>
      <Slider
        value={priceRange}
        onChange={handlePriceRangeChange}
        valueLabelDisplay="auto"
        min={0}
        max={1000}
      />
      <Typography variant="h6" component="h2" sx={{ marginBottom: '16px' }}>
        Brands
      </Typography>
      <List sx={{ border: '1px solid #ccc', borderRadius: '8px', marginTop: '16px' }}>
        {brands.map((brand) => (
          <ListItem button key={brand.slug} component={Link} to={`/brands/${brand.slug}`} sx={{ borderBottom: '1px solid #eee' }}>
            <ListItemText primary={brand.name} />
          </ListItem>
        ))}
      </List>
    </GlassPaper>
  );

  return (
    <Box sx={{ display: 'flex', padding: '16px' }}>
      <Box sx={{ display: { xs: 'none', md: 'block' }, width: { md: '20%' }, paddingRight: { md: '16px' } }}>
        {filterDrawer}
      </Box>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {filterDrawer}
      </Drawer>
      <Box sx={{ width: { xs: '100%', md: '80%' } }}>
        <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <Typography variant="h4" component="h1">
            Products for {brandName || 'All Brands'}
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer(true)}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Grid container spacing={2}>
          {paginatedProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
          <Pagination count={totalPages} page={page} onChange={handlePageChange} />
        </Box>
      </Box>
    </Box>
  );
};

export default BrandProducts;
