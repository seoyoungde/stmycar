import React, { useState } from "react";
import styled from "@emotion/styled";
import { FaStar } from "react-icons/fa";

interface StarRatingProps {
  onRate: (value: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ onRate }) => {
  const [rating, setRating] = useState<number>(0);

  const handleClick = (value: number) => {
    setRating(value);
    onRate(value);
  };

  return (
    <StarContainer>
      {[...Array(5)].map((_, index) => {
        const value = index + 1;
        return (
          <Star
            key={index}
            onClick={() => handleClick(value)}
            filled={value <= rating}
          >
            <FaStar size="30" />
          </Star>
        );
      })}
    </StarContainer>
  );
};

const StarContainer = styled.div`
  display: inline-block;
`;

interface StarProps {
  filled: boolean;
}

const Star = styled.span<StarProps>`
  color: ${(props) => (props.filled ? "red" : "#e4e5e9")};
  cursor: pointer;
`;

export default StarRating;
