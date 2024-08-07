import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Breadcrumb = styled.div`
  font-size: 14px;
  color: #888;
  margin-bottom: 20px;
`;

const MainContent = styled.div`
  display: flex;
  gap: 20px;
`;

const ImageSection = styled.div`
  flex: 3;
`;

const MainImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const Thumbnails = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 10px;
`;

const ThumbnailImage = styled.img`
  width: 100px;
  height: 70px;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    opacity: 0.8;
  }

  ${({ isSelected }) => isSelected && `
    border-color: #28a745;
  `}
`;

const DetailsSection = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PropertyInfo = styled.div`
  flex: 1;
`;

const PropertyTitle = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const PropertyDetails = styled.div`
  font-size: 16px;
  color: #555;
  margin-top: 10px;
  line-height: 1.5;
`;

const ApplyButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #218838;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  position: relative;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    background-color: #218838;
  }
`;

const ConfirmationPopup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  z-index: 1000;
`;

const ConfirmationButton = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const properties = [
  {
    id: 1,
    address: 'D-87 Sai Paradise Patia',
    bedrooms: 2,
    bathrooms: 2,
    price: 7000,
    image: 'https://via.placeholder.com/800x400',
    thumbnails: [
      'https://via.placeholder.com/700x400',
      'https://via.placeholder.com/800x400',
      'https://via.placeholder.com/600x400',
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  // Add other properties here
];

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find(property => property.id === parseInt(id));
  const [showModal, setShowModal] = useState(false);
  const [showScheduling, setShowScheduling] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    currentResidence: '',
    employmentInfo: '',
  });
  const [schedulingData, setSchedulingData] = useState({
    date: '',
    time: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedImage, setSelectedImage] = useState(property.image);
  const [selectedThumbnail, setSelectedThumbnail] = useState(property.image);

  if (!property) {
    return <Container>Property not found</Container>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSchedulingChange = (e) => {
    const { name, value } = e.target;
    setSchedulingData({
      ...schedulingData,
      [name]: value,
    });
  };

  const handleThumbnailClick = (thumb) => {
    setSelectedImage(thumb);
    setSelectedThumbnail(thumb);
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.fullName) errors.fullName = 'Full Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.contactNumber) errors.contactNumber = 'Contact Number is required';
    if (!formData.currentResidence) errors.currentResidence = 'Current Residence is required';
    if (!formData.employmentInfo) errors.employmentInfo = 'Employment Information is required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form submission logic
      console.log('Form submitted successfully:', formData);
      setShowModal(false);
      setShowScheduling(true);
    }
  };

  const handleSchedulingSubmit = (e) => {
    e.preventDefault();
    // Scheduling logic here
    console.log('Scheduling details:', schedulingData);
    setShowScheduling(false);
    setShowConfirmation(true);
  };

  const handleConfirmationClose = () => {
    setShowConfirmation(false);
  };

  return (
    <Container>
      <Breadcrumb>Dashboard &gt; Property &gt; Details</Breadcrumb>
      <MainContent>
        <ImageSection>
          <MainImage src={selectedImage} alt={property.address} />
          <Thumbnails>
            {property.thumbnails.map((thumb, index) => (
              <ThumbnailImage
                key={index}
                src={thumb}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => handleThumbnailClick(thumb)}
                isSelected={selectedThumbnail === thumb}
              />
            ))}
          </Thumbnails>
        </ImageSection>
        <DetailsSection>
          <PropertyInfo>
            <PropertyTitle>{property.address}</PropertyTitle>
            <PropertyDetails>
              Address: {property.address}<br />
              Bedrooms: {property.bedrooms}<br />
              Bathrooms: {property.bathrooms}<br />
              Monthly Rent: {property.price}<br />
              Drawing Rooms: 2<br />
              Balcony: 2<br />
              Lease Term: 12 months
            </PropertyDetails>
          </PropertyInfo>
          <ApplyButton onClick={() => setShowModal(true)}>Apply for Leasing</ApplyButton>
        </DetailsSection>
      </MainContent>
      {showModal && (
        <ModalOverlay onClick={() => setShowModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setShowModal(false)}>&times;</CloseButton>
            <h2>Apply For Leasing</h2>
            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
              />
              {formErrors.fullName && <p style={{ color: 'red' }}>{formErrors.fullName}</p>}
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {formErrors.email && <p style={{ color: 'red' }}>{formErrors.email}</p>}
              <Input
                type="text"
                name="contactNumber"
                placeholder="Contact Number"
                value={formData.contactNumber}
                onChange={handleInputChange}
              />
              {formErrors.contactNumber && <p style={{ color: 'red' }}>{formErrors.contactNumber}</p>}
              <Input
                type="text"
                name="currentResidence"
                placeholder="Current Residence"
                value={formData.currentResidence}
                onChange={handleInputChange}
              />
              {formErrors.currentResidence && <p style={{ color: 'red' }}>{formErrors.currentResidence}</p>}
              <Input
                type="text"
                name="employmentInfo"
                placeholder="Employment Information"
                value={formData.employmentInfo}
                onChange={handleInputChange}
              />
              {formErrors.employmentInfo && <p style={{ color: 'red' }}>{formErrors.employmentInfo}</p>}
              <SubmitButton type="submit">Pay and Proceed</SubmitButton>
              <SubmitButton type="button" onClick={() => setShowScheduling(true)}>Schedule a visit with our agent</SubmitButton>
            </Form>
          </ModalContent>
        </ModalOverlay>
      )}
      {showScheduling && (
        <ModalOverlay onClick={() => setShowScheduling(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setShowScheduling(false)}>&times;</CloseButton>
            <h2>Schedule a Visit</h2>
            <Form onSubmit={handleSchedulingSubmit}>
              <Input
                type="date"
                name="date"
                value={schedulingData.date}
                onChange={handleSchedulingChange}
                required
              />
              <Input
                type="time"
                name="time"
                value={schedulingData.time}
                onChange={handleSchedulingChange}
                required
              />
              <SubmitButton type="submit">Submit</SubmitButton>
            </Form>
          </ModalContent>
        </ModalOverlay>
      )}
      {showConfirmation && (
        <ConfirmationPopup>
          <h3>Visit Scheduled Successfully!</h3>
          <ConfirmationButton onClick={handleConfirmationClose}>OK</ConfirmationButton>
        </ConfirmationPopup>
      )}
    </Container>
  );
};

export default PropertyDetail;
