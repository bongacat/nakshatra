import React from 'react';
import styled from 'styled-components';
import { Image } from 'antd';

interface BlogCardProps {
  imageUrl: string;
  text?: string | React.ReactNode;
  variant?: 'left' | 'right';
}

const BlogSliderContainer = styled.div<{ $alignRight?: boolean }>`
  width: 95%;
  max-width: 1000px;
  margin: ${({ $alignRight }) =>
    $alignRight
      ? '5rem calc(10% + 2rem) 5rem auto'  // Right variant: Positioned closer to right
      : '5rem auto 5rem calc(10% + 2rem)'}; // Left variant: Positioned closer to left
  background: #121212;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 25px;
  border-radius: 25px;
  height: 350px;
  transition: all 0.3s;
  border: 2px solid #b4c8a9;

  @media (max-width: 992px) {
    max-width: 680px;
    height: 400px;
    margin: ${({ $alignRight }) =>
      $alignRight
        ? '5rem calc(5% + 1rem) 5rem auto'
        : '5rem auto 5rem calc(5% + 1rem)'};
  }

  @media (max-width: 768px) {
    width: 90%;
    min-height: 500px;
    height: auto;
    margin: 180px auto;
  }
`;

const BlogSliderItem = styled.div<{ $reverse?: boolean }>`
  display: flex;
  align-items: center;
  height: 100%;
  flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BlogSliderImg = styled.div<{ $right?: boolean }>`
  width: 250px;
  flex-shrink: 0;
  height: 250px;
  border-radius: 20px;
  transform: translateX(${({ $right }) => ($right ? '80px' : '-80px')});
  overflow: hidden;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    opacity: 0.8;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    transform: translateY(-50%);
    width: 90%;
  }
`;

const BlogSliderContent = styled.div`
  padding-right: 25px;
  flex: 1;

  @media (max-width: 768px) {
    margin-top: -80px;
    text-align: center;
    padding: 0 30px;
  }
`;

const BlogSliderText = styled.div`
  color: #ffffff;
  margin-bottom: 30px;
  line-height: 1.5em;
  font-family: 'DM Sans', sans-serif;
`;

const BlogCard: React.FC<BlogCardProps> = ({ 
  imageUrl, 
  text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?",
  variant = 'left'
}) => {
  return (
    <BlogSliderContainer $alignRight={variant === 'right'}>
      <BlogSliderItem $reverse={variant === 'right'}>
        <BlogSliderImg $right={variant === 'right'}>
          <Image src={imageUrl} alt="" />
        </BlogSliderImg>
        <BlogSliderContent>
          <BlogSliderText>{text}</BlogSliderText>
        </BlogSliderContent>
      </BlogSliderItem>
    </BlogSliderContainer>
  );
};

// Variant-specific components
export const BlogCardLeft: React.FC<Omit<BlogCardProps, 'variant'>> = (props) => (
  <BlogCard {...props} variant="left" />
);

export const BlogCardRight: React.FC<Omit<BlogCardProps, 'variant'>> = (props) => (
  <BlogCard {...props} variant="right" />
);

export default BlogCard;