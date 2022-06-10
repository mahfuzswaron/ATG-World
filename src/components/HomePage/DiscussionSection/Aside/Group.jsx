import React from 'react';

const Group = ({ group }) => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex space-x-4 items-center'>
                <div class="avatar">
                    <div class="w-10 rounded-full">
                        <img src="https://api.lorem.space/image/face?hash=92310" />
                    </div>
                </div>
                <p className='text-black'>{group.name}</p>
            </div>
            <button className='btn btn-xs btn-ghost rounded-full bg-gray-100 normal-case text-black'>Follow</button>
        </div>
    );
};

export default Group;