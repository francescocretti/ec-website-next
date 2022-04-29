import Container from '../components/Container';

import image from '../assets/contact-min.png';
import SocialLinks from '../components/SocialLinks';

const Contact = () => {
  return (
    <Container
      bgImage={image}
      title="CONTACTS"
    >

      <div className='my-28 md:my-8 w-full lg:w-1/2'>

        <h4 className='text-ec-grayred text-xl mb-3 font-medium'>
          For any booking inquiry, info request or collaboration proposal:
        </h4>
        <h2 className='font-bold text-black text-2xl md:text-3xl hover:opacity-50'>
          <a href='mailto:electriccircus3@gmail.com'>electriccircus3@gmail.com</a>
        </h2>

        <div className="mt-10 w-full lg:w-1/3">
          <h4 className='text-ec-grayred text-xl mb-5 font-medium'>
            Our social media:
          </h4>

          <SocialLinks />
        </div>

      </div>
    </Container>
  );
};

export default Contact;