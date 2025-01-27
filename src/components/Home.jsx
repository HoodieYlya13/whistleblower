import logo from '../logo.png';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ecology = `${process.env.PUBLIC_URL}/img/ecology.png`;
const handAndHouse = `${process.env.PUBLIC_URL}/img/hand-and-house.png`;
const forest = `${process.env.PUBLIC_URL}/img/forest.png`;
const arrow = `${process.env.PUBLIC_URL}/img/arrow.svg`;
const handAndLeaf = `${process.env.PUBLIC_URL}/img/hand-and-leaf.png`;
const phone = `${process.env.PUBLIC_URL}/img/phone.png`;
const facebook = `${process.env.PUBLIC_URL}/img/facebook.png`;
const twitter = `${process.env.PUBLIC_URL}/img/twitter.png`;
const instagram = `${process.env.PUBLIC_URL}/img/instagram.png`;
const linkedin = `${process.env.PUBLIC_URL}/img/linkedin.svg`;
const menu = `${process.env.PUBLIC_URL}/img/menu.svg`;

function Home() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
      navigate('/login');
    };

  const [openQuestions, setOpenQuestions] = useState([]);

  const questions = [
    {question: 'How do WhistleBlower work ?', answer: 'Our platform analyzes your energy usage data to identify areas for improvement and offers actionable insights for increased sustainability.'},
    {question: 'How to contact us ?', answer: 'You can reach out to us via e-mail, phone, or by filling out the contact form on our website. We are here to answer any questions you may have.'},
    {question: 'About our confidentiality', answer: 'We prioritize your privacy and ensure that all data is kept confidential and secure according to industry standards.'},
    {question: 'Why would you choose us ?', answer: 'We bring expertise and a passion for sustainability to help your business succeed while reducing environmental impact.'},
    {question: 'Will we help you to increase your income ?', answer: 'By optimizing your energy consumption, we help reduce operational costs, which can lead to improved profitability.'},
  ];

  const [sideBarOpen, setSideBarOpen] = useState(false);
  const menuBarRef = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (menuBarRef.current && !menuBarRef.current.contains(event.target)) {
        setSideBarOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  const toggleQuestion = (index) => {
    setOpenQuestions((prevOpenQuestions) => {
      if (prevOpenQuestions.includes(index)) {
        return prevOpenQuestions.filter((i) => i !== index);
      } else {
        return [...prevOpenQuestions, index];
      }
    });
  };

  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {}
    Array.from(e.currentTarget.elements).forEach(field => {
      if ( !field.name ) return;
      formData[field.name] = field.value;
    });
    // fetch('/api/mail', {
    //   method: 'post',
    //   body: JSON.stringify(formData)
    // });

    console.log(formData);

    window.alert("Your message was sent!");
  }

  return (
    <div className="App text-secondary font-bold">
      <header ref={menuBarRef} className="fixed w-full bg-white z-50 shadow-lg">
        <div className="flex justify-between items-center h-24 w-full xl:max-w-7xl mx-auto px-10 shadow-sm">
          <a href='#' className="flex gap-2 items-center cursor-pointer">
            <img src={logo} className="h-10" alt="logo" />
            <p className='font-black'>WHISTLEBLOWER</p>
          </a>

          <div className="hidden sm:inline-flex gap-4 items-center font-black">
            <a href="#" className="hover:text-primary">Home</a>
            <a href="#AboutUs" className="hover:text-primary">About Us</a>
            <a href="#ContactUs" className="hover:text-primary">Contact Us</a>
            <button href="#" className="cursor-pointer px-3 py-1 rounded-3xl text-white bg-primary hover:text-gray-100 hover:bg-secondary" onClick={handleLoginClick}>Login</button>
          </div>

          <button className="sm:hidden" onClick={() => setSideBarOpen(!sideBarOpen)}>
            <img src={menu} className="h-10 cursor-pointer" alt="menu" />
          </button>
        </div>

        {sideBarOpen && (
          <div className='flex justify-start rounded-xl py-4 mx-10 px-10 text-2xl sm:hidden'>
            <div className='flex flex-col button_div gap-4'>
              <a href="#" className="hover:text-primary" onClick={() => setSideBarOpen(!sideBarOpen)}>Home</a>
              <a href="#AboutUs" className="hover:text-primary" onClick={() => setSideBarOpen(!sideBarOpen)}>About Us</a>
              <a href="#ContactUs" className="hover:text-primary" onClick={() => setSideBarOpen(!sideBarOpen)}>Contact Us</a>
              <button href="#" className="cursor-pointer px-3 py-1 w-24 rounded-3xl text-white bg-primary hover:text-gray-100 hover:bg-secondary" onClick={handleLoginClick}>Login</button>
            </div>
          </div>
        )}
      </header>

      <div className='bg-white w-full mx-auto xl:max-w-7xl'>
        <section className='pt-32 px-20 md:inline-flex'>
          <div className='min-w-80'>
            <h1 className='text-4xl font-black'>Become a <br/><span className='text-primary'>sustainable</span> Industry</h1>
            <p className='text-tertiary mt-4'>WhistleBlower will help you assess your energy consumption and become more responsible.</p>
            <button href="#" className="mt-4 cursor-pointer px-3 py-1 rounded-3xl text-white bg-primary hover:text-gray-100 hover:bg-secondary">Subscribe</button>
          </div>

          <div className='flex justify-center items-center'>
            <img src={ecology} className="max-h-80 min-w-80" alt="ecology" />
          </div>
        </section>

        <section id='AboutUs' className='h-96 scroll-mt-24'>
          <div className='relative'>
            <div className='absolute -top-5 z-20'>
              <img src={handAndHouse} className="max-w-60 transform -scale-x-100" alt="handAndHouse" />
            </div>

            <div className='h-80 text-white w-full md:w-3/4 bg-secondary top-16 absolute z-10 md:trapezoid'>
              <h2 className='text-2xl px-10 mt-20 font-black'>About Us</h2>

              <p className='px-10 mt-4'>
                “Our mission is to help industries become more sustainable by providing insights into their energy consumption and, offering solutions for improvement. 
                We are committed to making a positive impact on both the environment and the bottom line of our clients.”
              </p>  
            </div>

            <div className='h-80 hidden md:block absolute top-16 right-0'>
              <img src={forest} className="h-full" alt="forest" />
            </div>
          </div>
        </section>

        <section className='mt-10 px-10'>
          <h2 className='text-2xl text-center mb-4 font-black'>Some questions about our services ?</h2>

          {questions.map((q, index) => (
            <div key={index} className='mx-auto w-3/5 drop-shadow-2xl bg-neutral px-8 py-4 rounded-lg mt-2'>
              <div className='flex justify-between gap-2' onClick={() => toggleQuestion(index)}>  
                <h3 className='font-black'>{q.question}</h3>
                <img src={arrow} className={`h-3 mt-2 transform ${openQuestions.includes(index) ? '-rotate-90' : 'rotate-90'}`} alt="arrow" />
              </div>
              {openQuestions.includes(index) && <p className='text-sm mt-3'>{q.answer}</p>}
            </div>
          ))}
        </section>

        <section id='ContactUs' className='h-[600px] scroll-mt-24'>
          <div className='relative'>
            <div className='absolute right-0 md:-right-5 -top-16 z-10'>
              <img src={handAndLeaf} className="max-w-48" alt="handAndLeaf" />
            </div>

            <div className='h-[500px] w-full bg-primaryLight mt-20 absolute parallelogram inline-flex gap-4'>
                <div className='pl-20 w-1/2 pt-32 hidden sm:block'>
                  <h2 className='text-2xl'>Contact Us</h2>
                  <p className='pt-4'>For any inquiries, feel free to contact us. We are available to help you take the next step towards sustainability. Let us work together for a greener future.</p>
                  <a className='gap-2 items-center pt-4 hidden sm:inline-flex'>
                    <img src={phone} className='h-5' alt="phone" />
                    <a href="tel:+33387277628">+33 3 87 27 76 28</a>
                  </a>
                </div>
                
                <div className='w-full sm:w-1/2 flex-wrap mx-4'>
                  <form method="post" onSubmit={handleOnSubmit} className='w-full h-80 px-6 justify-center mt-12 bg-white rounded-md drop-shadow-2xl flex flex-col'>
                    <h2 className='text-2xl mb-12'>Contact Form</h2>
                    <input type="text" name='name' placeholder='Name' className='h-4 border mb-2 p-4 rounded-md bg-neutral shadow-2xl' required />
                    <input type="text" name='message' placeholder='Your message...' className='h-4 border p-4 pb-20 rounded-md bg-neutral shadow-2xl' required />
                    <div className='flex justify-end mt-4'>
                      <button href="#" className="cursor-pointer px-3 py-1 w-20 rounded-3xl text-white bg-primary hover:text-gray-100 hover:bg-secondary">Send</button>
                    </div>
                  </form>

                  <div className='w-full flex justify-center pt-8'>
                    <a className='gap-2 items-center text-2xl inline-flex sm:hidden'>
                        <img src={phone} className='h-10' alt="phone" />
                        <a href="tel:+33387277628">+33 3 87 27 76 28</a>
                    </a>
                  </div>
                </div>
            </div>
          </div>
        </section>

        <footer className=''>
          <h3 className='text-xl text-center'>WhistleBlower for a <span className='text-primary'>green</span> world</h3>

          <div className='flex flex-wrap p-10 gap-2 justify-between max-w-[800px]'>
            <div className='flex-wrap'>
              <a href="#" className='flex justify-center mb-2'>
                <img src={logo} className="w-24" alt="logo" />
              </a>
              <div className='inline-flex gap-2'>
                <a href="https://www.facebook.com/" target="_blank">
                  <img src={facebook} className="h-5" alt="facebook" />
                </a>
                <a href="https://x.com/" target="_blank">
                  <img src={twitter} className="h-5" alt="twitter" />
                </a>
                <a href="https://instagram.com/" target="_blank">
                  <img src={instagram} className="h-5" alt="instagram" />
                </a>
                <a href="https://www.linkedin.com/" target="_blank">
                  <img src={linkedin} className="h-5" alt="linkedin" />
                </a>
              </div>
            </div>

            <div className='text-sm'>
              <h4 className='text-md pb-2'>IMPORTANT LINKS</h4>
              <p>Terms of Use</p>
              <p>Privacy Policy</p>
              <p>State Information</p>
              <p>Past variable rates</p>
            </div>

            <div className='text-sm'>
              <h4 className='text-md pb-2'>COMPANY INFOMRATIONS</h4>
              <p>About Us</p>
              <p>Questions</p>
              <p>Information</p>
            </div>

            <div className='text-sm'>
              <h4 className='text-md pb-2'>CUSTOMER SERVICE</h4>
              <p>Partnership</p>
              <p>Contact Us</p>
            </div>
          </div>

          <p className='text-end text-sm pr-2'>© Copyright {new Date().getFullYear()}. All right reserved. WhistleBlower</p>
        </footer>
      </div>
    </div>
  );
}

export default Home;