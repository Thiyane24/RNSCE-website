document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-form');
  const inputs = document.querySelectorAll('.form-input, .form-textarea');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      let isValid = true;
      
      inputs.forEach(input => {
        if (!input.value.trim()) {
          input.classList.add('error');
          const errorMsg = input.nextElementSibling;
          if (errorMsg && errorMsg.classList.contains('error-message')) {
            errorMsg.style.display = 'block';
          }
          isValid = false;
        }
      });
      
      if (!isValid) {
        e.preventDefault();
      }
    });
    
    // Remove error state when user starts typing
    inputs.forEach(input => {
      input.addEventListener('input', function() {
        if (this.value.trim()) {
          this.classList.remove('error');
          const errorMsg = this.nextElementSibling;
          if (errorMsg && errorMsg.classList.contains('error-message')) {
            errorMsg.style.display = 'none';
          }
        }
      });
    });
  }
  
  // Add hero content HTML structure
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.innerHTML = `
      <div class="hero-content"> 
        <h1 class="hero-title">Redefine Your Style</h1>
        <p class="hero-text">Discover the RNSCE collection - where African heritage meets contemporary design</p>
        <a href="#products" class="cta-button">Explore Now</a>
      </div>
      ${hero.innerHTML}
    `;
  }
});

// In your JS file
document.addEventListener('DOMContentLoaded', function() {
  if ('loading' in HTMLImageElement.prototype) {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => {
      img.fetchpriority = "low";
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('secure-form');
        const timestampField = document.getElementById('form-timestamp');
        const submitBtn = document.getElementById('form-submit');
        
        // Set form timestamp (anti-spam)
        timestampField.value = Date.now();
        
        if (form) {
            // Add input sanitization
            const sanitizeInput = (value) => {
                return value.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            };
            
            // Form submission handler
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Validate form
                let isValid = true;
                const inputs = form.querySelectorAll('[required]');
                
                inputs.forEach(input => {
                    // Basic client-side validation
                    if (!input.value.trim()) {
                        input.classList.add('error');
                        const errorMsg = input.nextElementSibling;
                        if (errorMsg && errorMsg.classList.contains('error-message')) {
                            errorMsg.style.display = 'block';
                        }
                        isValid = false;
                    } else {
                        // Sanitize inputs
                        if (input.type !== 'email' && input.type !== 'hidden') {
                            input.value = sanitizeInput(input.value);
                        }
                        
                        input.classList.remove('error');
                        const errorMsg = input.nextElementSibling;
                        if (errorMsg && errorMsg.classList.contains('error-message')) {
                            errorMsg.style.display = 'none';
                        }
                    }
                });
                
                if (isValid) {
                    // Show loading state
                    submitBtn.disabled = true;
                    submitBtn.querySelector('.submit-text').style.display = 'none';
                    submitBtn.querySelector('.loading-spinner').style.display = 'inline';
                    
                    // Add small delay to prevent rapid submissions
                    setTimeout(() => {
                        form.submit();
                    }, 1500);
                }
            });
            
            // Real-time validation
            form.querySelectorAll('input, textarea').forEach(el => {
                el.addEventListener('input', function() {
                    if (this.checkValidity()) {
                        this.classList.remove('error');
                        const errorMsg = this.nextElementSibling;
                        if (errorMsg && errorMsg.classList.contains('error-message')) {
                            errorMsg.style.display = 'none';
                        }
                    }
                });
            });
        }
        
        // Rate limiting - disable button for 5 seconds after submit
        let lastSubmitTime = 0;
        form.addEventListener('submit', function() {
            const now = Date.now();
            if (now - lastSubmitTime < 5000) {
                return false;
            }
            lastSubmitTime = now;
            return true;
        });
    });

    document.addEventListener('visibilitychange', function() {
            if (!document.hidden) {
                // When tab is active, show image+text (using a special character as image placeholder)
                document.title = '🅁 RNSCE | Mozambican Fashion Renaissance';
            } else {
                // When tab is inactive, show normal text
                document.title = 'RNSCE | Mozambican Fashion Renaissance';
            }
        });
        
        // Initialize on load
        if (!document.hidden) {
            document.title = '🅁 RNSCE | Mozambican Fashion Renaissance';
        }

        
