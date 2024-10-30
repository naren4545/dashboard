
"use client"
import { useState } from 'react';

interface ReadMoreProps {
  text: string;
  maxLength: number; 
}

const ReadMore: React.FC<ReadMoreProps> = ({ text, maxLength }) => {
  
  const [isExpanded, setIsExpanded] = useState(false);

 
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  
  if (text.length <= maxLength) {
    return <p>{text}</p>;
  }

  return (
    <div>
      <p>
        {isExpanded ? text : `${text.slice(0, maxLength)}...`}
        <button onClick={toggleReadMore} className='font-semibold' >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </p>
    </div>
  );
};

export default ReadMore;
