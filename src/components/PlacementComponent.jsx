import React,{useEffect} from 'react';



const PlacementComponent = (props) => {
  const getFormattedText = (text) => {
    // text = text.replace(/\^(.*?)\^/g,"<li class=' list-inside list-disc'>$1</li>")

    return text.replace(/\*(.*?)\*/g, "<span class=' text-importent'>$1</span>");
   
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
       <ol className=' text-justify'>
        {props.phase.content.split('\n\n').map((para, index) => {
          return (
            <li className=' list-inside list-decimal py-2 text-[18px] 3xl:text-[22px]' key={index}>
              <span dangerouslySetInnerHTML={{ __html: getFormattedText(para) }} />
            </li>
          );
        })}
      </ol> 
   
      
    </>
  );
};

export default PlacementComponent;
