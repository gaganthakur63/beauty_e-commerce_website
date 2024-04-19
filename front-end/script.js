const placeholderText = "Enter Your Email Address";
const inputElement = document.getElementById("animated-input");

function runPlaceholderLoop() {
    let index = 0;
    const loopInterval = setInterval(() => {
        const currentText = placeholderText.substring(0, index);
        inputElement.setAttribute("placeholder", currentText);
        index++;

        if (index > placeholderText.length) {
            clearInterval(loopInterval);
            setTimeout(() => {
                erasePlaceholderLoop();
            }, 200); // Wait for 200 milliseconds before starting the erase loop
        }
    }, 200);
}

function erasePlaceholderLoop() {
    let index = placeholderText.length;
    const eraseInterval = setInterval(() => {
        const currentText = placeholderText.substring(0, index);
        inputElement.setAttribute("placeholder", currentText);
        index--;

        if (index < 0) {
            clearInterval(eraseInterval);
            setTimeout(() => {
                runPlaceholderLoop();
            }, 200); // Wait for 200 milliseconds before starting the run loop again
        }
    }, 200);
}

runPlaceholderLoop();

// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:false,
//     dots:false,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:1
//         }
//     }
// })

// // home page
// $('.owl-carousel').owlCarousel({
//     loop: true,
//     margin: 10,
//     smartSpeed: 5000,
//     nav: false,
//     dots: false,
//     autoplay: true,
//     autoplayTimeout: 5000,
//     stagepadding: 50,
//     responsive: {
//         0: {
//             items: 1
//         },
//         600: {
//             items: 1
//         },
//         1000: {
//             items: 1
//         }
//     }
// })

// testimonial crousel




// scroll to top
window.onscroll = function () {
    toggleScrollToTopButton();
};

function toggleScrollToTopButton() {
    var button = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

// Scroll to top functionality
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}


// about page our values scroll
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll events
function handleScroll() {
    const card1 = document.getElementById("card1");
    const card2 = document.getElementById("card2");
    const card3 = document.getElementById("card3");

    if (isInViewport(card1)) {
        card1.classList.add("slide-in");
    }

    if (isInViewport(card2)) {
        card2.classList.add("slide-in");
    }

    if (isInViewport(card3)) {
        card3.classList.add("slide-in");
    }
}

// Attach the scroll event listener
document.addEventListener("scroll", handleScroll);


// image preview modal for career page

// document.addEventListener("DOMContentLoaded", function () {
//     const clickableImage = document.querySelector(".clickable-image");
//     const modal = document.querySelector(".image-preview-modal");
//     const modalContent = document.querySelector(".modal-content");
//     const closeModal = document.querySelector(".close-modal");
  
//     clickableImage.addEventListener("click", function () {
//       modal.style.display = "block";
//       modalContent.src = this.src;
//     });
  
//     closeModal.addEventListener("click", function () {
//       modal.style.display = "none";
//     });
  
//     window.addEventListener("click", function (event) {
//       if (event.target === modal) {
//         modal.style.display = "none";
//       }
//     });
//   });
  


// employee counter
// Function to start the counter animation
// function startCounterAnimation() {
//     const counters = document.querySelectorAll('.counter');

//     counters.forEach(counter => {
//         const targetValue = parseInt(counter.dataset.target, 10);
//         let currentValue = 0;

//         const updateCounter = () => {
//             if (currentValue < targetValue) {
//                 currentValue += 1;
//                 counter.textContent = currentValue;
//                 setTimeout(updateCounter, 20); // Adjust the timeout for a smoother animation
//             }
//         };

//         updateCounter();
//     });
// }

// // Run the counter animation on page load
// document.addEventListener('DOMContentLoaded', startCounterAnimation);
function startCounterAnimation() {
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
        const targetValue = parseInt(counter.dataset.target, 10);
        let currentValue = 0;

        const updateCounter = () => {
            if (currentValue < targetValue) {
                currentValue += 1;
                counter.textContent = currentValue;
                requestAnimationFrame(updateCounter); // Use requestAnimationFrame for smoother animation
            }
        };

        updateCounter();
    });
}

// Run the counter animation on page load
document.addEventListener('DOMContentLoaded', startCounterAnimation);


// navbar sticky behaviour
// $(document).ready(function () {
//     var navbar = $(".navbar-container");
//     var sticky = navbar.offset().top;

//     $(window).scroll(function () {
//         if (window.pageYOffset >= sticky) {
//             navbar.addClass("sticky");
//             // Change the navbar-brand image source on scroll
//             $("#navbarBrandImage").attr("src", "Images/B-Logo-White.png");
//         } else {
//             navbar.removeClass("sticky");
//             // Change the navbar-brand image source back to the original
//             $("#navbarBrandImage").attr("src", "Images/B-Logo-Black-1.png");
//         }
//     });

//     // Add this part to handle the case when scrolling back to the top
//     $(window).scroll(function () {
//         if ($(this).scrollTop() === 0) {
//             navbar.removeClass("sticky");
//             // Change the navbar-brand image source back to the original
//             $("#navbarBrandImage").attr("src", "Images/B-Logo-Black-1.png");
//         }
//     });
// });

$(document).ready(function () {
    var navbar = $(".navbar-container");
    var headBan = $(".head-ban");
    var nextSection = $(".career-abt"); // Change this selector to the next section you want to scroll to
    var sticky = navbar.offset().top + headBan.height();

    $(window).scroll(function () {
        var scrollPosition = $(this).scrollTop();
        
        if (scrollPosition >= sticky) {
            navbar.addClass("sticky");
            $("#navbarBrandImage").attr("src", "Images/B-Logo-White.png");
        } else {
            navbar.removeClass("sticky");
            $("#navbarBrandImage").attr("src", "Images/B-Logo-Black-1.png");
        }

        // // Check if the scroll position is 30% of the head-ban section
        // if (scrollPosition >= (headBan.height() * 0.30)) {
        //     // Scroll to the next section
        //     $('html, body').animate({
        //         scrollTop: nextSection.offset().top
        //     }, ); // Adjust the duration as needed
        // }
    });

    // Add this part to handle the case when scrolling back to the top
    $(window).scroll(function () {
        if ($(this).scrollTop() === 0) {
            navbar.removeClass("sticky");
            $("#navbarBrandImage").attr("src", "Images/B-Logo-Black-1.png");
        }
    });
});

function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-container");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
// welcome screen
window.addEventListener('load', function() {
	setTimeout(function() {
		document.getElementById('welcomeScreen').style.display = 'block';
	}, 10000);
});

window.addEventListener('load', function() {
	var welcomeScreenSeen = localStorage.getItem('welcomeScreenSeen');
	if (welcomeScreenSeen === 'true') {
		document.getElementById('welcomeScreen').style.display = 'none';
		document.getElementById('indexPage').style.display = 'block';
	} else {
		localStorage.setItem('welcomeScreenSeen', 'true');
	}
});


// cart counter add and minus
// $(document).ready(function() {
//     // Function to update subtotal based on quantity and product price
//     function updateSubtotal() {
//         var quantity = parseInt($('#count-er').val()); // Get the quantity value
//         var price = parseFloat($('#prod-price').text().replace('₹', '').trim()); // Get the product price
        
//         // Calculate subtotal
//         var subtotal = quantity * price;
        
//         // Update the subtotal element with the calculated value
//         $('#sub-total').text('₹ ' + subtotal.toFixed(2));
//     }
    
//     // Attach change event listener to the quantity input field
//     $('#count-er').on('input', updateSubtotal);
    
//     // Call updateSubtotal initially to set the initial subtotal value
//     updateSubtotal();
// });


$(document).ready(function() {
    // Function to update subtotal based on quantity and product price
    function updateSubtotal() {
        var quantity = parseInt($(this).val()); // Get the quantity value
        var price = parseFloat($(this).closest('tr').find('td:nth-child(3)').text().replace('₹', '').trim()); // Get the product price
        var subtotal = quantity * price; // Calculate subtotal
        $(this).closest('tr').find('td:nth-child(4)').text('₹ ' + subtotal.toFixed(2)); // Update subtotal
    }

    // Function to empty the cart
    function emptyCart() {
        $('#cart-table tbody').empty(); // Remove all rows from the cart table
        $('#empty-cart-message').show(); // Show the empty cart message
        $('#default-items').empty(); // Clear the default items container
    }

    // Attach event listener to increase quantity inputs
    $(document).on('input', '.qty-input', updateSubtotal);

    // Attach event listener to empty cart button
    $('.empty-cart').click(emptyCart);

    // Add default items to the table initially
    $('#default-items tr').clone().appendTo('#cart-table tbody');
});


// Function to show a specific form based on the given index
function showForm(index) {
    const forms = document.getElementsByClassName('form-group-contact');
  
    // Hide all forms
    for (let i = 0; i < forms.length; i++) {
      forms[i].style.display = 'none';
    }
  
    // Show the form with the given index
    const formToShow = document.getElementById(`form-${index}`);
    if (formToShow) {
      formToShow.style.display = 'block';
    }
  
    // Update the active class on the forms
    const formButtons = document.getElementsByClassName('form-button');
    for (let i = 0; i < formButtons.length; i++) {
      formButtons[i].classList.remove('form-button-active');
    }
    document.getElementById(`form-button-${index}`).classList.add('form-button-active');
  }
  
  // Function to show the previous form based on the current form index
  function showPreviousForm() {
    const currentForm = document.getElementsByClassName('form-group-contact-active')[0];
    let prevFormIndex = 0;
  
    // Find the previous form index
    if (currentForm.id !== 'form-1') {
      const currentFormId = parseInt(currentForm.id.split('-')[1]);
      prevFormIndex = currentFormId - 1;
    }
  
    // Show the previous form
    showForm(prevFormIndex);
  }
  
  // Show the first form by default
  showForm(2);
  
  // Add event listeners to radio buttons
  const radioButtons = document.getElementsByTagName('input');
  for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('change', function() {
      if (this.checked) {
        const optionIndex = parseInt(this.value);
        showForm(optionIndex);
      }
    });
  }
  
  // Add event listeners to form buttons
  const formButtons = document.getElementsByClassName('form-button');
  for (let i = 0; i < formButtons.length; i++) {
    formButtons[i].addEventListener('click', function() {
      const buttonIndex = parseInt(this.id.split('-')[2]);
      showForm(buttonIndex);
    });
  }