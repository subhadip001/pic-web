import React from 'react';



const PlacementComponent = (props) => {
  const getFormattedText = (text) => {
    // text = text.replace(/\^(.*?)\^/g,"<li class=' list-inside list-disc'>$1</li>")

    return text.replace(/\*(.*?)\*/g, "<span class=' text-importent'>$1</span>");
   
  };


  return (
    <>
   
        {/* <span className=' w-8 h-8 block bg-PIC-light_gray  rotate-90 absolute -top-4 left-10% '/> */}
       <ol className=' text-justify'>
        {props.phase.content.split('\n\n').map((para, index) => {
          return (
            <>
            <li className=' list-inside list-decimal py-2' key={index}>
              <span dangerouslySetInnerHTML={{ __html: getFormattedText(para) }} />
            </li>
            </>
          );
        })}
      </ol> 
   
      
    </>
  );
};

export default PlacementComponent;
