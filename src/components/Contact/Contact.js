import "./Contact.css"

const Contact = () => {
    return `
        <section id="contact">
          <div>
            <p>Let´s discuss on comething <span>cool</span> together</p>
            <p id="interes">I’m interested in ...</p>
            <div class="radius">
              <input type="radio" value="ecommmerce" id="ecommmerce" name="interes">
              <label for="ecommmerce" class="radio-btn">Ecommerce Website</label>
              <input type="radio" value="database" id="database" name="interes">
              <label for="database" class="radio-btn">Data Base</label>
              <input type="radio" value="landing" id="landing" name="interes">
              <label for="landing" class="radio-btn">Landing Page</label>
              <input type="radio" value="blog" id="blog" name="interes">
              <label for="blog" class="radio-btn">Blog Website</label>
              <input type="radio" value="app" id="app" name="interes">
              <label for="app" class="radio-btn">App</label>
            </div>
          </div>
          <div class="form">
            <input type="text" placeholder="Your name">
            <input type="email" placeholder="Your email">
            <textarea placeholder="Your message" rows="5"></textarea>
            <button type="submit" class="submit"><img src="assets/icon/submit.png" alt="Submit icon" width="25"> Submit</button>
            <div class="links">
             <a href="https://www.linkedin.com/in/sergi-pont-647718236/" target="_blank"><img src="assets/icon/linkedin_2.png" alt="linkedin" width="39"></a>
             <a href="https://github.com/SergiPB2508" target="_blank"><img src="assets/icon/github_2.png" alt="github" width="39"></a>
            </div>
          </div>
        </section>`;
}

export default Contact;