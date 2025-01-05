import React from 'react'
import FaqItem from './FaqItem'
import "./FaqComponent.css"
const FaqComponent = () => {
    const faqJson=[
        {
          question: "How many bones does a cat have?",
          answer: "A cat has 230 bones - 6 more than a human",
        },
        {
          question: "How much do cats sleep?",
          answer: "The average cat sleeps 12-16 hours per day",
        },
        {
          question: "How long do cats live",
          answer: "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
        },
      ]
  return (
    <div className='faq-component'>
       {faqJson.map((data,index)=>
        <FaqItem faq={data} index={index}/>
    )}
    </div>
  )
}

export default FaqComponent