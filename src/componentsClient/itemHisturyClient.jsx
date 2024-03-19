// ItemHisturyClient.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addThisIntervews } from '../featuers/intervewSlice';

function ItemHisturyClient(props) {
  const myIntervews = useSelector((state) => state.intervewSlice.allMyIntervews);
  let nav = useNavigate();
  const dispatch = useDispatch();
  let item = props.item;
  let index = props.index;

  const [isHovered, setIsHovered] = useState(false);

  const toQushtions = () => {
    dispatch(addThisIntervews({ ThisInterview: item._id }));
    nav('/homeQushtions');
  };

  return (
    <tr
    className={`transition-all duration-300 border-b border-gray-200 text-black ${
      isHovered ? 'bg-gray-200' : 'bg-transparent'
    }`}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    style={{
      boxShadow: isHovered ? '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)' : 'none',
    }}
  >
  
    
        <td className="whitespace-nowrap px-4 py-2 font-medium">{index + 1}</td>
        <td className="whitespace-nowrap px-4 py-2">{item.date_created.substring(10, length - 1)}</td>
        <td className="whitespace-nowrap px-4 py-2">{item.job}</td>
        <td className="whitespace-nowrap px-4 py-2">{item.date_created.substring(11, 16)}</td>
        <td className="whitespace-nowrap px-4 py-2">{item.questions.length} - questions</td>
        <td
          onClick={toQushtions}
          className="whitespace-nowrap px-4 py-2"
          style={{ cursor: 'pointer' }} // כדי להראות שזה כפתור לחיצה
        >
          {isHovered && ( // תצוגת ה-GIF רק אם הכפתור נמצא במצב hover
            <img src="/src/assets/output.png" alt="GIF" style={{ width: '30px', height: '30px' }} />
          )}
        </td>
      </tr>
  );
}

export default ItemHisturyClient;
