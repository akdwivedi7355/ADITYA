import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutPage = () => (
  <div>
    <Header />
    <main className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>
      <p className="text-lg leading-7 text-gray-700 mb-4">
        Hello! I'm <strong>Aditya Kumar Dwivedi</strong>, a passionate software developer with expertise in full-stack development, machine learning, and creative UI/UX design.
        I enjoy building innovative solutions that make a difference.
      </p>
      <p className="mt-4 text-lg leading-7 text-gray-700 mb-8">
        With a strong foundation in modern frameworks and libraries, I strive to deliver high-quality projects while continuously learning and exploring new technologies.
      </p>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Skill Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Full-Stack Development</li>
            <li>Machine Learning</li>
            <li>UI/UX Design</li>
            <li>React & Node.js</li>
            <li>Python & Django</li>
          </ul>
        </div>

        {/* Experience Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Experience</h3>
          <p className="text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere eligendi iste voluptatem est deserunt laudantium sapiente, quisquam similique fugit officia magni obcaecati quod vero delectus fugiat. Consectetur exercitationem sint laudantium!      </p>
        </div>

        {/* Projects Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Projects</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Attendance System with Face Recognition</li>
            <li>Real-Time Garbage Detection System</li>
            <li>Chatbot for MultiFacet Software Solution</li>
            <li>React Application for Attendance Tracking</li>
          </ul>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default AboutPage;
