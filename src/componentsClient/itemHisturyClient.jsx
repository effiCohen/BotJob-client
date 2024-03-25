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
      className={`transition-all duration-300 border-b border-gray-200 text-black ${isHovered ? 'bg-[#ffafcc]' : 'bg-transparent'
        }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered ? '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)' : 'none',
      }}
    >


      <td className="whitespace-nowrap px-4 py-2 font-medium font-[Inter]">{index + 1}</td>
      <td className="whitespace-nowrap px-4 py-2 font-[Inter]">{item.date_created.substring(10, length - 1)}</td>
      <td className="whitespace-nowrap px-4 py-2 font-[Inter]">{item.job}</td>
      <td className="whitespace-nowrap px-4 py-2 font-[Inter]">{item.Time}</td>
      <td className="whitespace-nowrap px-12 py-2 font-[Inter]">{item.questions.length}</td>
      <td
        onClick={toQushtions}
        className="whitespace-nowrap px-4 py-2"
        style={{ cursor: 'pointer' }}
      >
        {isHovered && (
          <img src="/src/assets/output.png" alt="GIF" style={{ width: '30px', height: '30px' }} />
        )}

      </td>
      
      {isHovered && (
              <div className="whitespace-nowrap px-8 ">

      <img src="/src/assets/delete.PNG" alt="GIF" style={{cursor: 'pointer',  width: '40px', height: '40px' , margin:'5px' }} />
       </div>
      )}

    </tr>
  );
}

export default ItemHisturyClient;
