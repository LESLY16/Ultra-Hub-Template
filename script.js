// Adjust card thumbnail preview scale dynamically on load and window resize
function resizeThumbnails() {
    const wrappers = document.querySelectorAll('.card-preview-wrapper');
    wrappers.forEach(wrapper => {
        const width = wrapper.clientWidth;
        const frame = wrapper.querySelector('.card-preview-frame');
        if (frame) {
            const scale = width / 1000;
            frame.style.transform = `scale(${scale})`;
            frame.style.webkitTransform = `scale(${scale})`;
        }
    });
}

window.addEventListener('load', resizeThumbnails);
window.addEventListener('resize', resizeThumbnails);
window.addEventListener('orientationchange', resizeThumbnails);

// Preview Modal controller
function openPreview(templateId) {
    const templateElement = document.getElementById(templateId);
    if (templateElement) {
        const templateHtml = templateElement.outerHTML;
        const modalTarget = document.getElementById('modalTarget');
        modalTarget.innerHTML = templateHtml;
        document.getElementById('previewModal').style.display = 'flex';
    }
}

function closePreview() {
    document.getElementById('previewModal').style.display = 'none';
    document.getElementById('modalTarget').innerHTML = '';
}

// Docs Modal controller
function openDocsModal() {
    document.getElementById('docsModal').style.display = 'flex';
}

function closeDocsModal() {
    document.getElementById('docsModal').style.display = 'none';
}

// Copy details to clipboard helper
function copyText(elementId) {
    const textToCopy = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Copied: ' + textToCopy);
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
}

// Generates and downloads clean, water-mark free HTML code for full template
function downloadFullTemplate(templateTitle, brandName, primaryColor, basicPrice, proPrice, enterprisePrice, featureSubtitle) {
    const fullHtmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <title>${templateTitle} - ${brandName}</title>
    <style>
        :root {
            --primary: ${primaryColor};
            --dark: #0f172a;
            --light: #f8fafc;
            --gray: #64748b;
            --border: #e2e8f0;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Segoe UI', sans-serif; }
        body { background: var(--light); color: var(--dark); line-height: 1.6; min-height: 100vh; min-height: 100dvh; display: flex; flex-direction: column; }
        header { background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,0.1); position: sticky; top: 0; z-index: 1000; }
        nav { max-width: 1200px; margin: 0 auto; padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; }
        .logo { font-weight: 700; font-size: 1.3rem; color: var(--primary); text-decoration: none; }
        .links { display: flex; gap: 1.5rem; list-style: none; }
        .links a { text-decoration: none; color: var(--dark); font-weight: 500; }
        .hero { padding: 5rem 2rem; text-align: center; background: #ffffff; }
        .hero h1 { font-size: 2.8rem; margin-bottom: 1rem; }
        .hero p { color: var(--gray); font-size: 1.2rem; max-width: 600px; margin: 0 auto 1.5rem; }
        .btn { display: inline-block; padding: 0.8rem 1.6rem; background: var(--primary); color: white; text-decoration: none; border-radius: 6px; font-weight: 600; border: none; cursor: pointer; }
        .features-section { padding: 4rem 2rem; max-width: 1200px; margin: 0 auto; text-align: center; }
        .features-section h2 { font-size: 2.2rem; margin-bottom: 0.3rem; }
        .features-section .subtitle { color: var(--primary); font-size: 1.1rem; font-weight: 600; margin-bottom: 2.5rem; text-transform: uppercase; letter-spacing: 1px; }
        .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; }
        .card { background: white; padding: 2rem; border-radius: 8px; border: 1px solid var(--border); text-align: center; }
        .pricing { padding: 4rem 2rem; background: #f1f5f9; text-align: center; }
        .price-val { font-size: 2.5rem; font-weight: 800; color: var(--primary); margin: 1rem 0; }
        .contact-section { padding: 4rem 2rem; max-width: 700px; margin: 0 auto; text-align: center; }
        .contact-section h2 { font-size: 2.2rem; margin-bottom: 0.5rem; }
        .contact-section p { color: var(--gray); margin-bottom: 2rem; }
        .contact-form { background: #ffffff; padding: 2rem; border-radius: 8px; border: 1px solid var(--border); display: flex; flex-direction: column; gap: 1.2rem; text-align: left; }
        .form-group { display: flex; flex-direction: column; gap: 0.4rem; }
        .form-group label { font-weight: 600; font-size: 0.9rem; }
        .form-group input, .form-group textarea { padding: 0.8rem; border: 1px solid var(--border); border-radius: 4px; font-size: 1rem; width: 100%; }
        .form-group textarea { resize: vertical; min-height: 120px; }
        footer { padding: 2rem 1.5rem; padding-bottom: calc(2rem + env(safe-area-inset-bottom)); text-align: center; background: var(--dark); color: #94a3b8; margin-top: auto; }
        @media(max-width:768px){ nav { flex-direction: column; gap: 1rem; } .hero h1 { font-size: 2rem; } }
    </style>
</head>
<body>
    <header>
        <nav>
            <a href="#" class="logo">${brandName}</a>
            <ul class="links">
                <li><a href="#home">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </nav>
    </header>

    <section class="hero" id="home">
        <h1>Welcome to ${brandName}</h1>
        <p>A high-performance responsive layout template ready to deploy.</p>
        <a href="#pricing" class="btn">View Plans</a>
    </section>
    
    <section class="features-section" id="features">
        <h2>Features</h2>
        <div class="subtitle">${featureSubtitle}</div>
        <div class="grid">
            <div class="card">
                <h3>Feature One</h3>
                <p>Fully adaptable layout built with standard modern CSS architecture.</p>
            </div>
            <div class="card">
                <h3>Feature Two</h3>
                <p>Optimized typography and clean structural element hierarchy.</p>
            </div>
            <div class="card">
                <h3>Feature Three</h3>
                <p>Fast loading speed with zero extra script dependencies.</p>
            </div>
        </div>
    </section>

    <section class="pricing" id="pricing">
        <h2 style="font-size:2rem; margin-bottom:0.5rem;">Transparent Pricing Plans</h2>
        <p style="color:var(--gray); margin-bottom:2rem;">Flexible numerical pricing designed to scale with your usage.</p>
        <div class="grid" style="margin: 0 auto; max-width: 1100px;">
            <div class="card">
                <h3>Basic Plan</h3>
                <div class="price-val">$${basicPrice}<span style="font-size:1rem; font-weight:normal; color:var(--gray);">/mo</span></div>
                <p>Essential features for individual projects and starters.</p>
                <a href="#contact" class="btn" style="margin-top:1.5rem;">Choose Basic</a>
            </div>
            <div class="card" style="border:2px solid var(--primary);">
                <h3>Pro Plan</h3>
                <div class="price-val">$${proPrice}<span style="font-size:1rem; font-weight:normal; color:var(--gray);">/mo</span></div>
                <p>Complete feature suite for growing businesses.</p>
                <a href="#contact" class="btn" style="margin-top:1.5rem;">Choose Pro</a>
            </div>
            <div class="card">
                <h3>Enterprise Plan</h3>
                <div class="price-val">$${enterprisePrice}<span style="font-size:1rem; font-weight:normal; color:var(--gray);">/mo</span></div>
                <p>Custom infrastructure with dedicated support.</p>
                <a href="#contact" class="btn" style="margin-top:1.5rem;">Choose Enterprise</a>
            </div>
        </div>
    </section>

    <section class="contact-section" id="contact">
        <h2>Contact Us</h2>
        <p>Get in touch with the ${brandName} team for inquiries, support, or custom setups.</p>
        <form class="contact-form" onsubmit="event.preventDefault(); alert('Thank you for reaching out! We will contact you soon.');">
            <div class="form-group">
                <label for="c-name">Full Name</label>
                <input type="text" id="c-name" placeholder="John Doe" required>
            </div>
            <div class="form-group">
                <label for="c-email">Email Address</label>
                <input type="email" id="c-email" placeholder="john@example.com" required>
            </div>
            <div class="form-group">
                <label for="c-subject">Subject</label>
                <input type="text" id="c-subject" placeholder="Inquiry details" required>
            </div>
            <div class="form-group">
                <label for="c-message">Message</label>
                <textarea id="c-message" placeholder="Type your message here..." required></textarea>
            </div>
            <button type="submit" class="btn">Send Message</button>
        </form>
    </section>

    <footer>
        <p>&copy; 2026 ${brandName}. Created with UltraThemeHub template.</p>
    </footer>
</body>
</html>`;

    const blob = new Blob([fullHtmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${templateTitle.replace(/\s+/g, '_')}_Template.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}