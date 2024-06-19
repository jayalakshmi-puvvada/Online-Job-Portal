import Carousel from "./Carousel";
const ContactUs = () => {
  return (
    <div className="text-color ms-5 me-5 mr-5 mt-3">
      <h4 className="mb-3">Contact Us</h4>
      {/* <b> */}
      <section class="">
  <div class="row">
      <marquee>
       
        Welcome to our Online Job Portal, where career dreams come to life. Our user-friendly platform simplifies job searching, offering a seamless experience for both job seekers and employers.
        
         </marquee>
 
  </div>
</section> 
      <Carousel />
        We value your feedback, questions, and inquiries. Whether you need
        assistance with an order, have a suggestion, or simply want to connect,
        our team is here to help. Feel free to reach out through the provided
        contact form, email, or phone number, and we'll respond promptly to
        ensure your experience with us is nothing short of exceptional. Your
        satisfaction is our priority, and we look forward to hearing from you.
      {/* </b> */}
    </div>
  );
};

export default ContactUs;
