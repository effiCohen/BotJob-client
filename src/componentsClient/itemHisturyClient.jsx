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
      style={{
        transition: 'background-color 0.3s ease',
        borderBottom: '1px solid',
        borderBottomColor: '#e2e8f0',
        backgroundColor: isHovered ? '#edf2f7' : 'transparent', // כאשר מועבר העכבר
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <td className="whitespace-nowrap px-4 py-2 font-medium">{index + 1}</td>
      <td className="whitespace-nowrap px-4 py-2">{item.date_created.substring(10, length - 1)}</td>
      <td className="whitespace-nowrap px-4 py-2">{item.job}</td>
      <td className="whitespace-nowrap px-4 py-2">20:35 min</td>
      <td className="whitespace-nowrap px-4 py-2">{item.questions.length} - questions</td>
      <td onClick={toQushtions} className="whitespace-nowrap px-4 py-2">
        <img src="/src/assets/right-arrow3.png" alt="GIF" style={{ width: '30px', height: '30px' }} />
      </td>
    </tr>
  );
}

export default ItemHisturyClient;
