import React from 'react'
import { BsFillCalendarPlusFill } from 'react-icons/bs'
import moment from 'moment';

interface Props {
    post : any
}

function Postdetails({post}: Props) {

    const getContentFragment = (index:number, text:any, obj:any, type:any) => {
        let modifiedText = text;
    
        if (obj) {
          if (obj.bold) {
            modifiedText = (<b key={index}>{text}</b>);
          }
    
          if (obj.italic) {
            modifiedText = (<em key={index}>{text}</em>);
          }
    
          if (obj.underline) {
            modifiedText = (<u key={index}>{text}</u>);
          }
        }
    
        switch (type) {
          case 'heading-three':
            return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item:any, i:any) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
          case 'paragraph':
            return <p key={index} className="mb-8">{modifiedText.map((item:any, i:any) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
          case 'heading-four':
            return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item:any, i:any) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
          case 'image':
            return (
              <img
                key={index}
                alt={obj.title}
                height={obj.height}
                width={obj.width}
                src={obj.src}
              />
            );
          default:
            return modifiedText;
        }
      };
    
    

  return (
    <div className='bg-white shadow-lg rounded-lg p-4 lg:p-8 pb-12 mb-8'>
        <div className='relative overflow-hidden shadow-md mb-6'>
            <img 
                src={post.image.url}
                alt={post.tittle}
                className="object-top h-96 object-fit w-full rounded-t-lg  "
            />
        </div>
        <div className='flex text-center items-center justify-between mb-4 lg:mb-8 px-4 md:px-16 '>
            <div className='flex items-center md:space-x-4  md:justify-center '>
              <img 
                height="30px"
                width="30px"
                className='align-middle rounded-full'
                src={post.author.photo.url}
              />
              <p className='text-gray-700 align-middle font-semibold'>{post.author.author}</p>
            </div>
            <div className='flex items-center space-x-3 font-medium font-serif text-center align-middle text-gray-700'>
              <BsFillCalendarPlusFill className=''/>
              <span>{moment(post. createdAt).format('MMM DD, YYYY')}</span>
            </div>
        </div>
        <h1 className='mb-8 p-4 text-xl md:text-3xl font-semibold'>{post.tittle}</h1>
        {post.content.raw.children.map((typeObj : any, index : number) => {
            const children = typeObj.children.map((item : any, itemindex: number) => getContentFragment(itemindex, item.text, item, item.obj));

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        
    </div>
  )
}

export default Postdetails