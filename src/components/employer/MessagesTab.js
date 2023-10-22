import React, { useState } from 'react';

const avatarSeeds = ['Bear', 'Mimi', 'Coco'];

const avatarUrlBear = 'https://api.dicebear.com/7.x/adventurer/svg?seed=Bear';
const avatarUrlMimi = 'https://api.dicebear.com/7.x/adventurer/svg?seed=Mimi';
const avatarUrlCoco = 'https://api.dicebear.com/7.x/adventurer/svg?seed=Coco';

const avatarUrls = {
  'You': 'your-avatar-url',
  'Bear': avatarUrlBear,
  'Mimi': avatarUrlMimi,
  'Coco': avatarUrlCoco,
};

const MessagesTab = () => {
    const [message, setMessage] = useState('');
    const [chatMessages, setChatMessages] = useState([]);
    const [file, setFile] = useState(null);

    const handleSendMessage = () => {
        if (message.trim() === '') return;
        const newMessage = {
            text: message,
            sender: 'You',
        };
        setChatMessages([...chatMessages, newMessage]);
        setMessage('');
    };

    const handleFileUpload = (event) => {
        const uploadedFile = event.target.files[0];
        setFile(uploadedFile);
    };

    return (
        <div className="flex h-screen antialiased text-gray-800">
            <div className="flex flex-row h-full w-full overflow-x-hidden">
                <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
                    <div className="flex flex-row items-center justify-center h-12 w-full">
                        <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                            </svg>
                        </div>
                        <div className="ml-2 font-bold text-2xl">Messages</div>
                    </div>
                </div>
                <div className="flex flex-col flex-auto h-full p-6">
                    <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
                        <div className="flex flex-col h-full overflow-x-auto mb-4">
                            <div className="flex flex-col h-full">
                                <div className="grid grid-cols-12 gap-y-2">
                                    {chatMessages.map((chatMessage, index) => (
                                        <div key={index} className={`col-start-${index % 2 === 0 ? 1 : 6} col-end-${index % 2 === 0 ? 8 : 13} p-3 rounded-lg`}>
                                            <div className={`flex flex-row items-center ${index % 2 === 0 ? '' : 'justify-start flex-row-reverse'}`}>
                                                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                                                    <img src={avatarUrls[chatMessage.sender]} alt={chatMessage.sender} />
                                                </div>
                                                <div className={`relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl`}>
                                                    <div>{chatMessage.text}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
                            <div>
                                <input type="file" id="file" style={{ display: 'none' }} onChange={handleFileUpload} />
                                <button className="flex items-center justify-center text-gray-400 hover:text-gray-600" onClick={() => document.getElementById('file').click()}>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="flex-grow ml-4">
                                <div className="relative w-full">
                                    <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10" />
                                    <button className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600" onClick={handleSendMessage}>
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="ml-4">
                                <button className="flex items-center justify-center bg-indigo-500 hover.bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0" onClick={handleSendMessage}>
                                    <span>Send</span>
                                    <span className="ml-2">
                                        <svg className="w-4 h-4 transform rotate-45 -mt-px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessagesTab;



// import React, { useState } from 'react';
//
// const MessagesTab = () => {
//     const [message, setMessage] = useState('');
//     const [chatMessages, setChatMessages] = useState([]);
//     const [file, setFile] = useState(null);
//
//     const handleSendMessage = () => {
//         if (message.trim() === '') return;
//         const newMessage = {
//             text: message,
//             sender: 'You',
//         };
//         setChatMessages([...chatMessages, newMessage]);
//         setMessage('');
//     };
//
//     const handleFileUpload = (event) => {
//         const uploadedFile = event.target.files[0];
//         setFile(uploadedFile);
//     };
//
//     return (
//         <div className="flex h-screen antialiased text-gray-800">
//             <div className="flex flex-row h-full w-full overflow-x-hidden">
//                 <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
//                     <div className="flex flex-row items-center justify-center h-12 w-full">
//                         <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
//                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
//                             </svg>
//                         </div>
//                         <div className="ml-2 font-bold text-2xl">Messages</div>
//                     </div>
//                 </div>
//                 <div className="flex flex-col flex-auto h-full p-6">
//                     <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
//                         <div className="flex flex-col h-full overflow-x-auto mb-4">
//                             <div className="flex flex-col h-full">
//                                 <div className="grid grid-cols-12 gap-y-2">
//                                     {chatMessages.map((chatMessage, index) => (
//                                         <div key={index} className={`col-start-${index % 2 === 0 ? 1 : 6} col-end-${index % 2 === 0 ? 8 : 13} p-3 rounded-lg`}>
//                                             <div className={`flex flex-row items-center ${index % 2 === 0 ? '' : 'justify-start flex-row-reverse'}`}>
//                                                 <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
//                                                     {chatMessage.sender[0]}
//                                                 </div>
//                                                 <div className={`relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl`}>
//                                                     <div>{chatMessage.text}</div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
//                             <div>
//                                 <input type="file" id="file" style={{ display: 'none' }} onChange={handleFileUpload} />
//                                 <button className="flex items-center justify-center text-gray-400 hover:text-gray-600" onClick={() => document.getElementById('file').click()}>
//                                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
//                                     </svg>
//                                 </button>
//                             </div>
//                             <div className="flex-grow ml-4">
//                                 <div className="relative w-full">
//                                     <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10" />
//                                     <button className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600" onClick={handleSendMessage}>
//                                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                                         </svg>
//                                     </button>
//                                 </div>
//                             </div>
//                             <div className="ml-4">
//                                 <button className="flex items-center justify-center bg-indigo-500 hover.bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0" onClick={handleSendMessage}>
//                                     <span>Send</span>
//                                     <span className="ml-2">
//                                         <svg className="w-4 h-4 transform rotate-45 -mt-px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
//                                         </svg>
//                                     </span>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default MessagesTab;
