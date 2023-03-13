import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { postUserData } from '../../gateway/fetch_users';

const User = () => {
  const [userData, setUserData] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    (async () => {
      const data = await postUserData(userId);
      setUserData(data);
    })();
  }, [userId]);

  if (!userData) {
    return null;
  }
  const { avatar_url, name, location } = userData;

  return (
    <div className="user">
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

export default User;
