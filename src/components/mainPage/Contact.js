function Contact() {
    return (
        <section id="contact">
          <h2>Contact</h2>
          <p>You can contact me through the following means:</p>

          <div>
            {/*whatsapp*/}
            <div>
              <i></i>
              <a href="https://wa.me/34644048205" 
                  target="_blank">
                  +34 644 048 205
              </a>
            </div>

            {/*Email*/}
            <div>
              <i></i>
              <a href="mailto:veronicasanchezjusticia2@gmail.com" >
                veronicasanchezjusticia2@gmail.com
              </a>
            </div>

            {/*LinkedIn*/}
            <div>
              <i></i>
              <a href="https://www.linkedin.com/in/ver%C3%B3nica-s%C3%A1nchez-justicia-825a7421a/" 
                  target="_blank">
                  LinkedIn
              </a>
            </div>

            
            {/* <!-- Portfolio --> */}
            <div>
              <i></i>
              <a href="https://veronicasj.github.io/Portfolio/" 
                  target="_blank">
                  Portfolio
              </a>
            </div>

            
            {/* GitHub */}
            <div>
              <i></i>
              <a href="https://github.com/VeronicaSj" 
                  target="_blank">
                  GitHub
              </a>
            </div>
          </div>
        </section>
    );
}

export default Contact;