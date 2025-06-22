import React from 'react';
import '../styles/homepage.css';
import pandaImage from '../assets/panda-home.png';
import iconPdf from '../assets/icon-pdf.png';
import iconUser from '../assets/icon-user.png';
import logo from '../assets/panda-logo.png';

export default function HomePage() {
  return (
    <div className="home-container">
      <header className="header centered-header">
        <div className="header-left">
          <img src={logo} alt="Logo" className="site-logo large-logo" />
          <div className="search-wrapper">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Want to learn?" className="search-input-field" />
            <button className="search-explore">Explore</button>
          </div>
        </div>

        <nav className="nav-links">
          <a href="#" className="active">Home</a>
          <a href="#">IELTS</a>
          <a href="#">Business English</a>
          <a href="#">JLPT</a>
          <a href="#">HSK</a>
        </nav>
        <button className="contact-button">Liên hệ và thanh toán</button>
      </header>

      <main className="main-content">
        <section className="text-content">
          <h1 className="home-title">
            <span className="text-normal">Let The </span>
            <span className="text-bold">Panda</span><br />
            <span className="text-green-bright">Do </span>
            <span className="text-normal">The </span>
            <span className="text-green-bright">Prep</span><br />
            <span className="text-normal">You Just </span>
            <span className="text-green-bright">Show Up!</span>
          </h1>

          <div className="features">
            <div className="feature-line">
              <span className="emoji">📄</span>
              <span>IELTS, JLPT, HSK, Business English – all in one place.</span>
            </div>
            <div className="feature-line">
              <span className="emoji">🐼</span>
              <span>Curated study materials wrapped in a panda’s charm.</span>
            </div>
            <div className="feature-line">
              <span className="emoji">🚀</span>
              <span>Learn smart. Stay motivated. Pass with confidence.</span>
            </div>
          </div>

          <div className="buttons">
            <button className="button-green">Get Started</button>
            <button className="button-outline">Hướng dẫn đặt hàng</button>
          </div>
        </section>

        <section className="image-content">
          <img src={pandaImage} alt="Panda" className="panda-img" />

          <div className="info-box top-left">
            <img src={iconPdf} alt="PDF" className="icon" />
            <div>
              <div className="info-title">File PDF</div>
              <div className="info-number">100</div>
            </div>
          </div>

          <div className="info-box bottom-left">
            <img src={iconUser} alt="Buyers" className="icon" />
            <div>
              <div className="info-title">Buyers</div>
              <div className="info-number">10000</div>
            </div>
          </div>

          <div className="info-box top-right">
            <div className="info-title">Record Online Courses</div>
            <div className="info-number large">10</div>
          </div>
        </section>
      </main>

      <div className="benefits">
        <span>💡 Speaking Fluency</span>
        <span>📄 Writing Skills</span>
        <span>💡 Listening Comprehension</span>
        <span>💡 Reading Strategies</span>
        <span>💡 Time Management</span>
        <span>💡 Test-taking Techniques</span>
        <span>🔊 Answer Accuracy</span>
        <span>📄 Error Correction</span>
        <span>💡 Vocabulary Expansion</span>
        <span>💡 Grammar Proficiency</span>
        <span>💡 Character Recognition</span>
        <span>💡 Business Communication</span>
      </div>
    </div>
  );
}
