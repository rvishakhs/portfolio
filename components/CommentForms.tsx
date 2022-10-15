import React, {useRef, useState} from 'react'
import toast, { Toaster } from 'react-hot-toast';

interface Props {
    slug : string
}

function CommentForms({slug}: Props) {

    const [error, setError] = useState(false)

    const commentEL = useRef(null);
    const nameEL = useRef(null);
    const emailEL = useRef(null);
    const storeDataEL = useRef();

    const handleCommentSubmission = () => {
        setError(false)

        const {value : comment } = commentEL.current
        const {value : name } = nameEL.current
        const {value : email } = emailEL.current

        if(!comment || !name || !email) {
            setError(true)
            return
        }

        const commentObj = {name, email, comment, slug}
    }

    const notify = () => toast("Your comment submitted for review")

  return (
    <div className='bg-white p-8 pb-12 mb-8 rounded-lg shadow-lg mt-6' >
        <h3 className='text-black font-bold text-xl md:text-2xl border-b pb-4'>Comments</h3>
        <div className='grid grid-cols-1 gap-4 mb-2 mt-4'>
            <textarea                 
                ref={commentEL}
                className="p-4 outline-none w-full h-40 rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-400/10 text-gray-700"
                name='comment'
                placeholder='comment ....'
            />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-2 mt-2'>
            <input                 
                ref={nameEL}
                className="p-4 outline-none w-full  rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-400/10 text-gray-700"
                name='name'
                placeholder='Your Name'
            />
            <input                 
                ref={emailEL}
                className="p-4 outline-none w-full  rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-400/10 text-gray-700"
                name='email'
                placeholder='email address'
            />
        </div>
        {error && <p className='text-xs text-red-500'>All feilds are required </p>}
        <div className='flex itmes-center justify-center mt-4'>
            <button 
                className='bg-pink-400 transition duration-500 ease hover:bg-indigo-400 rounded-full px-4 py-2 font-medium text-white '
                onClick={handleCommentSubmission}
            >
                Post Comment
            </button>
            <Toaster 
                position="bottom-center"
            />
        </div>

    </div>
  )
}

export default CommentForms