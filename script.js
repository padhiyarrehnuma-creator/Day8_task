(function() {
      const hamburger = document.getElementById('hamburger');
      const navLinks = document.getElementById('navLinks');

      if (hamburger && navLinks) {
        // toggle on click
        hamburger.addEventListener('click', function(e) {
          e.stopPropagation();
          navLinks.classList.toggle('active');
        });

        // close when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', function() {
            navLinks.classList.remove('active');
          });
        });

        // close when clicking outside
        document.addEventListener('click', function(event) {
          const isClickInside = navLinks.contains(event.target) || hamburger.contains(event.target);
          if (!isClickInside && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
          }
        });
      }

      // contact form demo
      const form = document.getElementById('contactForm');
      if (form) {
        form.addEventListener('submit', function(e) {
          e.preventDefault();
          alert('Thanks for your message! (demo)');
          form.reset();
        });
      }
    })();
