import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  padding-left: 10px;
  flex: 1;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;



const SearchInput = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const PropertyList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const PropertyCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  height: 250px;
  width: 300px;
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const PropertyImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const PropertyInfo = styled.div`
  padding: 20px;
`;

const PropertyTitle = styled.h2`
  font-size: 18px;
  margin: 0 0 10px;
`;

const PropertyDetails = styled.p`
  margin: 0;
  color: #555;
`;

const ViewMoreLink = styled.a`
  font-size: 16px;
  color: #007bff;
  cursor: pointer;
  text-decoration: underline;
  margin-top: 20px;

  &:hover {
    color: #0056b3;
  }
`;

const Overlay = styled.div`
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

const OverlayContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-height: 80%;
  overflow-y: auto;
  width: 80%;
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

const PropertySearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showOverlay, setShowOverlay] = useState(false);
  const navigate = useNavigate();

  const properties = [
    {
      id: 1,
      address: 'Patia',
      bedrooms: 2,
      bathrooms: 2,
      price: 1500,
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 2,
      address: 'Patia',
      bedrooms: 3,
      bathrooms: 2,
      price: 1600,
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 3,
      address: 'Damana',
      bedrooms: 4,
      bathrooms: 3,
      price: 1800,
      image: 'https://via.placeholder.com/300x200',
    },
    {
      id: 4,
      address: 'Infocity',
      bedrooms: 3,
      bathrooms: 3,
      price: 1200,
      image: 'https://via.placeholder.com/300x200',
    },
    {
        id: 5,
        address: 'Infocity',
        bedrooms: 3,
        bathrooms: 3,
        price: 1200,
        image: 'https://via.placeholder.com/300x200',
    },
    {
        id: 6,
        address: 'Infocity',
        bedrooms: 3,
        bathrooms: 3,
        price: 1200,
        image: 'https://via.placeholder.com/300x200',
    },
    {
        id: 7,
        address: 'Patia',
        bedrooms: 3,
        bathrooms: 3,
        price: 1200,
        image: 'https://via.placeholder.com/300x200',
    },
    {
        id: 8,
        address: 'Patia',
        bedrooms: 3,
        bathrooms: 3,
        price: 1200,
        image: 'https://via.placeholder.com/300x200',
    }
  ];

  const filteredProperties = properties.filter(property =>
    property.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePropertyClick = (id) => {
    navigate(`/property/${id}`);
  };

  return (
    <Container>
      <Wrapper>
        <SearchInput
          type="text"
          placeholder="Search by location"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <PropertyList>
          {filteredProperties.slice(0, 6).map((property, index) => (
            <PropertyCard key={index} onClick={() => handlePropertyClick(property.id)}>
              <PropertyImage src={property.image} alt={property.address} />
              <PropertyInfo>
                <PropertyTitle>{property.address}</PropertyTitle>
                <PropertyDetails>
                  {property.bedrooms} Bedrooms | {property.bathrooms} Bathrooms | {property.price}/month
                </PropertyDetails>
              </PropertyInfo>
            </PropertyCard>
          ))}
        </PropertyList>
        {filteredProperties.length > 7 && (
          <ViewMoreLink onClick={() => setShowOverlay(true)}>View More</ViewMoreLink>
        )}
      </Wrapper>
      {showOverlay && (
        <Overlay onClick={() => setShowOverlay(false)}>
          <OverlayContent onClick={e => e.stopPropagation()}>
            <CloseButton onClick={() => setShowOverlay(false)}>&times;</CloseButton>
            <PropertyList>
              {filteredProperties.map((property, index) => (
                <PropertyCard key={index} onClick={() => handlePropertyClick(property.id)}>
                  <PropertyImage src={property.image} alt={property.address} />
                  <PropertyInfo>
                    <PropertyTitle>{property.address}</PropertyTitle>
                    <PropertyDetails>
                      {property.bedrooms} Bedrooms | {property.bathrooms} Bathrooms | ${property.price}/month
                    </PropertyDetails>
                  </PropertyInfo>
                </PropertyCard>
              ))}
            </PropertyList>
          </OverlayContent>
        </Overlay>
      )}
    </Container>
  );
};

export default PropertySearch;
