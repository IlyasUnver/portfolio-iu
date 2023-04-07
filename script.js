const body = document.querySelector('body');
      const darkModeToggle = document.querySelector('#darkmode');
      const isDarkMode = localStorage.getItem('darkMode') === 'true';
      
      if (isDarkMode) {
        body.classList.add('dark-mode');
      }
      
      function toggleDarkMode() {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
          localStorage.setItem('darkMode', 'true');
        } else {
          localStorage.setItem('darkMode', 'false');
        }
      }


      const menu = document.querySelector("#menuItems")
      const menuActive = document.querySelector("#menuIcon")
  
      menuActive.addEventListener("click", function(){
        menu.classList.toggle("active");
      })