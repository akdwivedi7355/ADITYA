import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactPage = () => (
  <div>
    <Header />
    <main className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>
      <form className="max-w-lg mx-auto bg-gray-100 p-6 rounded shadow">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="w-full border rounded p-2"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="w-full border rounded p-2"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="4"
            className="w-full border rounded p-2"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </main>
    <Footer />
  </div>
);

export default ContactPage;
