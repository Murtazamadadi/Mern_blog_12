import moment from "moment"
import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function Comment({ comments }) {

  // console.log(comments)
  const [user, setUser] = useState({});
  // console.log(user);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/user/${comments.userId}`);
        const data = await res.json();
        if (res.ok) {
          setUser(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getUser();
  }, [comments]);


  return (
    <div className='flex p-4 border-b dark:border-gray-600 text-sm'>
      <div className='flex-shrink-0 ml-3'>
        <img
          className='w-10 h-10 rounded-full bg-gray-200'
          src={user.profileImage}
          alt={user.username}
        />
      </div>
      <div className='flex-1'>
        <div className='flex items-center mb-1'>
          <span className='font-bold ml-2 text-xs truncate'>
            {user ? `@${user.username}` : 'anonymous user'}
          </span>
          <span className='text-gray-500 text-xs'>{moment(comments.createdAt).fromNow()}</span>
        </div>
        <p className='text-gray-500 pb-2'>{comments.content}</p>
      </div>
    </div>
  );
}



