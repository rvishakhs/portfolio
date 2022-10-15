import React, {useEffect, useRef, useState} from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { submitComment } from '../services';

interface Props {
    slug : string
}

function CommentForms({slug}: Props) {

    const [error, setError] = useState(false)
    const [localStorage, setLocalStorage] = useState<string | null>();
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const commentEL = React.useRef<null>(null);
    const nameEL = React.useRef<null>(null);
    const emailEL = React.useRef<null>(null);
    const storeDataEL = React.useRef<null>(null);

    useEffect(() => {
        nameEL.current.value = window.localStorage.getItem('name')
        emailEL.current.value = window.localStorage.getItem('email')
    }, [])

    

    const handleCommentSubmission = () => {
        setError(false)

        const {value : comment } = commentEL.current
        const {value : name } = nameEL.current
        const {value : email } = emailEL.current
        const {checked: storeData } = storeDataEL.current

    


        if(!comment || !name || !email) {
            setError(true)
            return
        }

        const commentObj = {name, email, comment, slug}

        if(storeData){
            window.localStorage.setItem('name', name)
            window.localStorage.setItem('email', email)
        } else {
            window.localStorage.removeItem('name')
            window.localStorage.removeItem('email')
            nameEL.current.value = null
            emailEL.current.value = null
        }
        
        submitComment(commentObj)
            .then((res) => {
                setShowSuccessMessage(true);

                setTimeout(() => {
                    setShowSuccessMessage(false);
                }, 3000) 
            })
        commentEL.current.value = null
        notify();
    }

    const notify = () => toast("Your comment submitted for review")

  return (
    <div className='bg-white p-8 pb-12 mb-8 rounded-lg shadow-lg mt-6' >
        <h3 className='text-black font-bold text-xl md:text-2xl border-b pb-4'>Leave a replay</h3>
        <div className='grid grid-cols-1 gap-4 mb-2 mt-4'>
            <textarea                 
                ref={commentEL}
                className="p-4 outline-none w-full h-40 rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-400/10 text-gray-700"
                name='comment'
                placeholder='Comment ....'
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
        <div className='grid grid-cols-1 px-2 py-2'>
            <div>
                <input 
                    ref={storeDataEL}
                    type="checkbox" 
                    id="storeData"
                    name="storeData" 
                    value="false" 
                />
                <label
                    className='text-gray-500 cursor-pointer ml-2'
                    htmlFor="storeData"
                >
                    Save my name, email in this browser for the next time I comment.
                </label>
            </div>

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