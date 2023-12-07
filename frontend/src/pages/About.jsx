import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  const [activeTab, setActiveTab] = useState(1)
  const [activeFAQs, setActiveFAQs] = useState({ 0: true, 1: true, 2: true })
  const [testimonialIndex, setTestimonialIndex] = useState(0)

  // Subscriptions Data
  const subscriptionOptions = [
    {
      type: 'Individual Subscription',
      price: '$6.99/month',
      description: 'Ideal for individual users.',
      features: [
        'Unlimited Cover Letters',
        'Personalized AI-Assisted Writing',
        'Error-Checking Algorithms',
      ],
    },
    {
      type: 'Enterprise Subscription',
      price: '$25.99/month',
      description: 'Best for teams.',
      features: [
        'Up to 5 User Accounts',
        'Advanced Keyword Recognition',
        'Priority Support',
      ],
    },
  ]

  // Testimonials Data
  const testimonials = [
    {
      quote:
        'AI Application Assistant transformed how I approach job applications. Highly recommended!',
      author: 'Jamie',
    },
    {
      quote: 'The cover letters generated were spot on. Saved me hours!',
      author: 'Taylor',
    },
    {
      quote:
        'Great for quick, professional applications. I loved the customization!',
      author: 'Alex',
    },
    {
      quote: 'This tool made my job hunt so much easier and more efficient!',
      author: 'Jordan',
    },
    {
      quote: "I've never felt more confident in my applications. Thank you!",
      author: 'Casey',
    },
    {
      quote:
        "The AI's understanding of industry-specific terminology is impressive.",
      author: 'Morgan',
    },
    // Add more testimonials here
  ]

  // FAQ Data
  const faqData = [
    {
      question: 'How is each cover letter personalized to my profile?',
      answer:
        'Our AI analyzes your resume and aligns it with the job description to create a unique cover letter.',
    },
    {
      question: 'What AI technology is used in the application?',
      answer:
        'We use advanced NLP algorithms to understand and match your skills with job requirements.',
    },
    {
      question: 'Is my data secure?',
      answer:
        'Yes, we prioritize data security and confidentiality in our application.',
    },
    {
      question: 'Can I customize the cover letter generated by the AI?',
      answer:
        'Yes, our AI provides a strong starting point, but you can customize and tweak the cover letter to your liking.',
    },
    {
      question: 'How long does it take to generate a cover letter?',
      answer:
        'Our AI works quickly! It typically takes just a few seconds to generate a personalized cover letter.',
    },
    {
      question:
        'Do you offer support if I encounter issues with the application?',
      answer:
        'Absolutely! We have a dedicated support team ready to assist you with any issues or questions.',
    },
    {
      question: 'Is AI Application Assistant suitable for all industries?',
      answer:
        'Yes, our AI is designed to cater to a wide range of industries by adapting to various job descriptions and resume styles.',
    },
    {
      question: 'How does your AI ensure the cover letter is free of errors?',
      answer:
        'Our AI incorporates advanced error-checking algorithms to ensure your cover letter is grammatically correct and free of typos.',
    },
    {
      question:
        'Can I use AI Application Assistant if I have a non-traditional career path?',
      answer:
        'Definitely. Our AI is adept at handling diverse career backgrounds and can highlight your unique experiences effectively.',
    },
    {
      question:
        'Is there a limit to how many cover letters I can generate with a subscription?',
      answer:
        'With a subscription, you can generate an unlimited number of cover letters during the subscription period.',
    },
  ]

  const nextTestimonial = () => {
    setTestimonialIndex((testimonialIndex + 1) % testimonials.length)
  }

  const previousTestimonial = () => {
    setTestimonialIndex(
      (testimonialIndex - 1 + testimonials.length) % testimonials.length
    )
  }

  const toggleFAQ = (index) => {
    setActiveFAQs((prevActiveFAQs) => {
      return { ...prevActiveFAQs, [index]: !prevActiveFAQs[index] }
    })
  }
  return (
    <div className='about-container'>
      <div className='about-section'>
        <section className='heading'>
          <h1>About AI Application Assistant</h1>
          <p>See how we can help your application stand out!</p>
        </section>
      </div>

      <br />
      <br />

      {/* Summary of App */}
      <h1>What is AI Application Assistant?</h1>
      <br />
      <br />
      <p>
        AI Application Assistant is a cutting-edge web app designed to
        streamline the job application process. By leveraging advanced AI
        algorithms, our platform crafts personalized cover letters that
        highlight your unique skills and experiences, aligning them perfectly
        with the requirements and qualifications listed in job description of
        the position you are applying for.
      </p>

      <p>
        Our application is designed to help you stand out from the crowd and
        land your dream job. We are currently offering two free cover letters
        for new users, so sign up today and see what we can do for you!
      </p>
      <br />
      <br />
      <br />

      {/* Embedded Video or Demo Section */}
      <section className='video-demo-section'>
        <h1>See It In Action</h1>
        <p>
          Watch this short video to see how AI Application Assistant can help
          you land your dream job.
        </p>
        <br />
        <div className='video-wrapper'>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/fUCFuLOxcAc?si=VgK2Cstj3OaihQrU'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen></iframe>
        </div>
      </section>

      <br />
      <br />

      {/* Interactive How It Works Section */}
      <div className='how-it-works'>
        <h1>How It Works</h1>
        <p>
          Our AI-powered application is designed to be intuitive and easy to use
          for all users. Simply follow the steps below to generate a
          personalized cover letter in less than a minute.
        </p>
        <br />

        <div className='tabs'>
          <button
            onClick={() => setActiveTab(1)}
            className={activeTab === 1 ? 'active' : ''}>
            Step 1
          </button>
          <button
            onClick={() => setActiveTab(2)}
            className={activeTab === 2 ? 'active' : ''}>
            Step 2
          </button>
          <button
            onClick={() => setActiveTab(3)}
            className={activeTab === 3 ? 'active' : ''}>
            Step 3
          </button>
          <button
            onClick={() => setActiveTab(4)}
            className={activeTab === 4 ? 'active' : ''}>
            Step 4
          </button>
        </div>

        <br />

        <div className='tab-content'>
          {activeTab === 1 && (
            <h2>
              Input Job Details - enter the job title, company name, and
              location. All of this information can typically be found in the
              job description of the position you are applying for.
            </h2>
          )}
          {activeTab === 2 && (
            <h2>
              Copy & Paste Job Description - add the job description of the
              position you are applying for to provide the AI with context. This
              information can typically be found on the company's website or on
              a job board.
            </h2>
          )}
          {activeTab === 3 && (
            <h2>
              Copy & Paste Your Resume - add the resume you plan to submit with
              your application. This will allow the AI to tailor your cover
              letter to your unique skills and experiences.
            </h2>
          )}
          {activeTab === 4 && (
            <h2>
              Create the Letter - click the "Generate Cover Letter" button to
              create your personalized cover letter that perfectly aligns your
              skills and experiences with the job qualifications and
              responsibilities listed in the description of the position you are
              applying for.
            </h2>
          )}
        </div>
      </div>

      <br />
      <br />
      <br />

      {/* Embedded Image of UI */}
      <img
        src='https://onedrive.live.com/embed?resid=4B1C8510CEF67D18%217980&authkey=%21ANULjNV8NIkMzZc&width=701&height=792'
        className='responsive-image'
      />

      <br />
      <br />
      <br />

      {/* Subscription Options Section */}
      <div className='subscription-section'>
        <h2>Explore Our Subscription Plans</h2>
        <div className='subscription-cards'>
          {subscriptionOptions.map((option, index) => (
            <div key={index} className='subscription-card'>
              <h3>{option.type}</h3>
              <span className='price'>{option.price}</span>
              <p>{option.description}</p>
              <ul className='features-list'>
                {option.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <br />
              <Link to='/register' className='learn-more-btn'>
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />

      {/* Interactive Testimonials Section */}
      <div className='testimonials-section'>
        <h1>User Testimonials</h1>
        <div className='testimonial'>
          <blockquote>
            "{testimonials[testimonialIndex].quote}" -{' '}
            {testimonials[testimonialIndex].author}
          </blockquote>
          <div className='testimonial-buttons'>
            <button onClick={previousTestimonial}>&lt;</button>
            <button onClick={nextTestimonial}>&gt;</button>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />

      {/* FAQ Section with More Questions and Answers */}
      <div className='faq-section'>
        <h1>Frequently Asked Questions</h1>
        <div className='faq-list'>
          {faqData.map((faq, index) => (
            <div key={index} className='faq-item'>
              <div className='faq-question' onClick={() => toggleFAQ(index)}>
                <b>{faq.question}</b>
              </div>
              {activeFAQs[index] && (
                <div className='faq-answer'>{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <br />
      <br />
      <br />

      <div className='special-offer'>
        <h2>Ready to give it a try?</h2>
        <p>Create Two Cover Letters for Free by Creating an Account!</p>
        <Link to='/register' className='btn special-offer-btn'>
          Sign Up Now
        </Link>
      </div>

      <br />
      <br />
      <br />
    </div>
  )
}

export default About
