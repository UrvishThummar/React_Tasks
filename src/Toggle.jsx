import { useState } from "react";

function Toggle(){
    const [isLogin, setIsLogin] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);

  const login = () => {
    setIsLogin(!isLogin);
  };

  const togglePassword = () => {
    setShowPass(!showPass);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const faqs = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces."
    },
    {
      question: "What is a component?",
      answer: "A component is a reusable piece of UI in React."
    },
    {
      question: "What is useState?",
      answer: "useState is a React hook used to manage state in functional components."
    }
  ];
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Login & Logout</h1>
      <h4>{isLogin ? 'Welcome to Home page' : 'Please Login!!'}</h4>


      {/* Login/Logout button */}
      <button onClick={login}>
        {isLogin ? 'Logout' : 'Login'}
      </button><br /><br />
      <hr />


      {/* Password input and toggle button */}
      <div>
        <h1>Show Password</h1>
        Enter Password:{" "}
        <input
          type={showPass ? "text" : "password"}
          id="password"
        />
        <button onClick={togglePassword}>
          {showPass ? 'Hide' : 'Show'}
        </button><br />

      </div><br />
      <hr />

      {/* Expand/Collapse toggle */}
      <button onClick={toggleExpand}>
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>

      {isExpanded && (
        <div style={{ marginTop: '20px', background: '#f3f3f3', padding: '10px' }}>
          <p>This is the expanded content. You can place anything here like text, form, or images.</p>
          <img src="https://imgs.search.brave.com/lcQsbwxqpzH7aZAWSrS6TTsx-DHywZFOXPgS46-Cvdc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9pbWEt/aW5kaWFuLW1pbGl0/YXJ5LWFjYWRlbXkt/Y2FkZXRzLXBhc3Np/bmctb3V0LXBhcmFk/ZS1leHByZXNzaW5n/LWpveS1kZWhyYWR1/bi11dHRhcmFraGFu/ZC1pbmRpYS1hdWd1/c3QtMTk1MzE5NDE4/LmpwZw" alt="" />
        </div>
      )}

      <br />
      <hr />

      <div style={{ width: '600px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center' }}>Frequently Asked Questions</h1>
        {faqs.map((faq, index) => (
          <div key={index} style={{ marginBottom: '15px' }}>
            <div
              onClick={() => toggleFAQ(index)}
              style={{
                cursor: 'pointer',
                background: '#eee',
                padding: '10px',
                borderRadius: '8px',
                fontWeight: 'bold'
              }}
            >
              {faq.question}
            </div>
            {openIndex === index && (
              <div>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Toggle;