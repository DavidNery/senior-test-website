import React from 'react';
import { IconType } from 'react-icons';
import { FiCheck, FiImage, FiTerminal, FiType } from 'react-icons/fi';
import {
  IconContainer,
  ServiceContainer,
  ServiceDescription,
  ServiceList,
  ServiceListItem,
  ServiceName,
  ServicesContainer,
  StyledServices
} from './style';

interface ServiceProps {
  icon: IconType;
  name: string;
  description: string;
  list?: string[];
}

const Service: React.FC<ServiceProps> = ({ icon: Icon, name, description, list }) => {
  return (
    <ServiceContainer>
      <IconContainer>
        <Icon size={30} color='white' strokeWidth={3} />
      </IconContainer>
      <ServiceName>{name}</ServiceName>
      <ServiceDescription>{description}</ServiceDescription>
      {
        list && (<>
          <span style={{
            color: 'var(--blue)',
            fontWeight: 700,
            fontSize: '1.1rem',
          }}>What we offer?</span>
          <ServiceList>
            {list.map((value, index) => (
              <ServiceListItem key={index}>
                <FiCheck size={15} color='var(--blue)' strokeWidth={3} />
                {value}
              </ServiceListItem>
            ))}
          </ServiceList>
        </>)
      }
    </ServiceContainer>
  )
}

const Services: React.FC = () => {
  return (
    <StyledServices>
      <h1 style={{ textAlign: 'center', color: 'white' }} className='shaded-text'>Our services</h1>
      <ServicesContainer>
        <Service
          icon={FiType}
          name='Writing'
          description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam dolorem eos enim ut error nobis?'
          list={new Array(5).fill('Lorem ipsum dolor sit amet.')}
        />
        <Service
          icon={FiImage}
          name='Graphic Design'
          description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam dolorem eos enim ut error nobis?'
          list={new Array(5).fill('Lorem ipsum dolor sit amet.')}
        />
        <Service
          icon={FiTerminal}
          name='Software Development'
          description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam dolorem eos enim ut error nobis?'
          list={new Array(5).fill('Lorem ipsum dolor sit amet.')}
        />
      </ServicesContainer>
    </StyledServices>
  );
}

export default Services;