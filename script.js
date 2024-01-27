const elements = document.getElementsByTagName('input');
function contact() {
    contact_email = document.getElementById('email').value;
    contact_name = document.getElementById('name').value;
    body = `
        <html>
            <p>Hey there ${contact_name}!</p>
            <p>Hope this email finds you in the midst of a fantastic day! 🌟 I stumbled upon your inquiry through our contact form and just had to reach out. Firstly, thanks a ton for showing interest in AdOkra! Your decision to boost your Facebook game is already a step in the right direction, my friend.</p>
            <p>I’m Paul, one of the friendly faces here at AdOkra, and I gotta say, we’re pumped to potentially team up with you to sprinkle some social media magic on your business. 🎩✨</p>
            <p>But before we dive into the nitty-gritty of Facebook ads and all that jazz, let’s kick things off with a virtual high-five for taking this leap. *Virtual high-five!* 🙌</p>
            <p>Now, let’s talk shop! We're all about helping businesses like yours thrive in the digital jungle, and Facebook is our playground. Whether you're a seasoned Facebook aficionado or just dipping your toes into the social media pool, we've got the expertise, the tricks, and a sprinkle of that secret sauce to make your brand shine bright like a diamond in the Facebook universe. 💎</p>
            <p>But hey, enough about us! We wanna hear all about your business, your goals, and your wildest dreams for conquering the social media realm. So how about we set up a quick virtual coffee chat? No pressure, just a chance to get to know each other and see if we're a match made in Facebook heaven.</p>
            <p>Drop me a line whenever you're free, and we’ll make it happen! Looking forward to chatting with you soon, ${contact_name}.</p>
            <p>Keep rockin’,<br/>Paul<br/>Chief Gardener and Proudest Cape Wearer at AdOkra!</p>
            <p>P.S. I heard a rumor that businesses who work with us get a secret boost in their Facebook likes. 😉 But shh, it’s classified info!
        </html>
    `
    if(contact_email == '' || contact_name == '') {
        alert('Please enter a name and or email!')
    } else if(!contact_email.includes("@") || !contact_email.includes(".")) {

        alert('Please enter a valid email!')
    } else {
        for(let i = 0; i < elements.length; i++) {
            elements[i].value = '';
        }
        Email.send({
            SecureToken : '85bcecf8-6283-4257-ba4d-3b3ff9192778',
            To : contact_email,
            From : 'outreach@adokra.com',
            Subject : "🌟 Let's Ignite Your Facebook Presence with AdOkra! 🚀",
            Body : body
        }).then(
            alert('Thanks for filling out the form! You should recieve an email soon.");
        );
    }
}
