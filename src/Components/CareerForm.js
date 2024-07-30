import React, { useState } from 'react';
import {
  Container, TextField, Typography, Box, Button, RadioGroup, FormControlLabel, Radio,
  FormControl, FormLabel, Alert
} from '@mui/material';
import { styled } from '@mui/system';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios';
import Top_Header from './Top_Header';
import Header from './Header';
import Footer from './Footer';
const StyledUploadButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#007bff',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#0056b3',
  },
  borderRadius: '5px',
  marginBottom: theme.spacing(2),
}));

const StyledSubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#ff0000',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#cc0000',
  },
  borderRadius: '5px',
  marginBottom: theme.spacing(2),
}));

const StyledTextField = styled(TextField)({
//   '& .MuiOutlinedInput-root': {
//     '&:hover fieldset': {
//       borderColor: 'rgba(0, 0, 0, 0.23)',
//     },
//     '&.Mui-focused fieldset': {
//       borderColor: '#ff0000',
//     },
//   },
});

const SectionHeader = styled(Typography)(({ theme }) => ({
  position: 'relative',
  display: 'inline-block',
  width: '100%',
  paddingBottom: '10px',
  background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, rgba(255, 0, 0, 0.685), rgba(218, 218, 218, 0.699), rgba(255, 255, 255, 0.04)) border-box',
  borderBottom: '2px solid transparent',
  borderBottomRightRadius: '30px',
}));

const CareerForm = () => {
  const [resume, setResume] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    numbers: '',
    email: '',
    experience: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    setResume(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formPayload = new FormData();
    formPayload.append('fullName', formData.fullName);
    formPayload.append('gender', formData.gender);
    formPayload.append('numbers', formData.numbers);
    formPayload.append('email', formData.email);
    formPayload.append('experience', formData.experience);
    formPayload.append('message', formData.message);
    if (resume) {
      formPayload.append('resume', resume);
    }

    try {
      setSubmitted(true);
      await axios.post('https://your-api-endpoint.com/submit', formPayload, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setSubmitted(true);
    } catch (error) {
      setError('Something went wrong. Please try again.');
    }
  };

  if (submitted) {
    return (
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Alert severity="success">Thanks for contacting us! We will be in touch with you shortly.</Alert>
        </Box>
      </Container>
    );
  }

  return (
    <div>
      <Top_Header></Top_Header>
      <Header></Header>
    <Container maxWidth="md" style={{ fontFamily: 'Montserrat' }}>
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem', fontWeight: '500' }}>
          Career
        </Typography>
        <Box sx={{ mb: 4, p: 2, border: '1px solid #ddd', borderRadius: '10px', backgroundColor: '#fffff' }}>
          <SectionHeader variant="h5" component="h2" gutterBottom>
            Drop a Resume
          </SectionHeader>
          <Typography variant="body1" paragraph>
            If you’re interested in employment opportunities at Khosla, please fill up the form and apply.
          </Typography>
          <Typography variant="h6" component="h3" gutterBottom>
            BASIC QUALIFICATIONS
          </Typography>
          <ul>
            <li>A Bachelor’s degree is required</li>
            <li>Verbal and written communication skills in English</li>
            <li>Passion for big challenges</li>
          </ul>
        </Box>
        <Box sx={{ p: 2, border: '1px solid #ddd', borderRadius: '10px', backgroundColor: '#ffffff' }}>
          <SectionHeader variant="h5" component="h2" gutterBottom>
            Fill up the form
          </SectionHeader>
          {error && <Alert severity="error">{error}</Alert>}
          <form onSubmit={handleSubmit}>
            <StyledTextField
              fullWidth
              label="Full Name"
              required
              variant="outlined"
              margin="normal"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              helperText="This field is required."
            />
            <FormControl component="fieldset" margin="normal">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup row name="gender" value={formData.gender} onChange={handleInputChange}>
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="others" control={<Radio />} label="Others" />
              </RadioGroup>
            </FormControl>
            <StyledTextField
              fullWidth
              label="Numbers"
              variant="outlined"
              margin="normal"
              name="numbers"
              value={formData.numbers}
              onChange={handleInputChange}
            />
            <StyledTextField
              fullWidth
              label="Email"
              required
              variant="outlined"
              margin="normal"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              helperText="This field is required."
            />
            <StyledTextField
              fullWidth
              label="Total Experience (in years)"
              variant="outlined"
              margin="normal"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
            />
            <StyledTextField
              fullWidth
              label="Your Message"
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            />
            <StyledUploadButton
              variant="contained"
              component="label"
              startIcon={<CloudUploadIcon />}
              fullWidth
            >
              Upload Resume
              <input
                type="file"
                hidden
                onChange={handleFileChange}
              />
            </StyledUploadButton>
            {resume && (
              <Typography variant="body2" color="textSecondary">
                {resume.name}
              </Typography>
            )}
            <StyledSubmitButton
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
            >
              Apply Now
            </StyledSubmitButton>
          </form>
        </Box>
      </Box>
    </Container>
    <Footer></Footer>
    </div>
  );
}

export default CareerForm;

