let bulb = document.querySelector(".bulb");
let logo = document.querySelector(".logo-image");
let notice_font = document.querySelector(".notice-font");
let middle = document.querySelector(".middle");
let footer = document.querySelector(".footer");
let footer_text_1 = document.querySelector(".footer-text-1");
let footer_contact_phone = document.querySelector(".footer-contact-phone");
let footer_phone = document.querySelector(".footer-phone");

//--------------------------tablet(large) (1366x1024) javascript classlist add from css file ---------------------------------------------------

if (window.screen.width == 1366 && window.screen.height === 1024) {
  console.log("1366 x 1024");
  bulb.classList.add("bulb-1366-1024");
  logo.classList.add("logo-image-1366-1024");
  notice_font.classList.add("notice-font-1366-1024");
  middle.classList.add("middle-1366-1024");
  footer.classList.add("footer-1366-1024");
} else {
  bulb.classList.remove("bulb-1366-1024");
  logo.classList.remove("logo-image-1366-1024");
  notice_font.classList.remove("notice-font-1366-1024");
  middle.classList.remove("middle-1366-1024");
  footer.classList.remove("footer-1366-1024");
}

// ------------------------------------------------------------------------ End - tablet(large) (1366x1024) javascript classlist add from css file

//--------------------------tablet (1024x768) javascript classlist add from css file ---------------------------------------------------

if (window.screen.width == 1024 && window.screen.height === 768) {
  console.log("1024 x 768");
  bulb.classList.add("bulb-1024-768");
  logo.classList.add("logo-image-1024-768");
  notice_font.classList.add("notice-font-1024-768");
  middle.classList.add("middle-1024-768");
  footer.classList.add("footer-1024-768");
  footer_text_1.classList.add("footer-text-1-1024-768");
  footer_contact_phone.classList.add("footer-contact-phone-1024-768");
  footer_phone.classList.add("footer-phone-1024-768");
} else {
  bulb.classList.remove("bulb-1024-768");
  logo.classList.remove("logo-image-1024-768");
  notice_font.classList.remove("notice-font-1024-768");
  middle.classList.remove("middle-1024-768");
  footer.classList.remove("footer-1024-768");
  footer_text_1.classList.remove("footer-text-1-1024-768");
  footer_contact_phone.classList.remove("footer-contact-phone-1024-768");
  footer_phone.classList.remove("footer-phone-1024-768");
}

// ------------------------------------------------------------------------ End - tablet (1024x768) javascript classlist add from css file

window.addEventListener("orientationchange", function (event) {
  console.log(
    "the orientation of the device is now " +
      event.target.screen.orientation.angle
  );

  console.log(window.screen.width);
  console.log(window.screen.height);

  //--------------------------tablet(large) (1366x1024) javascript classlist add from css file (orientation change) -----------------------------------

  if (window.screen.width == 1366 && window.screen.height === 1024) {
    location.reload();
    console.log("Good");
    bulb.classList.add("bulb-1366-1024");
    logo.classList.add("logo-image-1366-1024");
    notice_font.classList.add("notice-font-1366-1024");
    middle.classList.remove("middle-1366-1024");
    footer.classList.add("footer-1366-1024");
  } else {
    bulb.classList.remove("bulb-1366-1024");
    logo.classList.remove("logo-image-1366-1024");
    notice_font.classList.remove("notice-font-1366-1024");
    middle.classList.remove("middle-1366-1024");
    footer.classList.remove("footer-1366-1024");
  }

  //   --------------------------------------------------------------- tablet(large) (1366x1024) javascript classlist add from css file (orientation change)

  //--------------------------tablet (1024 x 768) javascript classlist add from css file (orientation change) -----------------------------------

  if (window.screen.width == 1024 && window.screen.height === 768) {
    console.log("Good");
    bulb.classList.add("bulb-1024-768");
    logo.classList.add("logo-image-1024-768");
    notice_font.classList.add("notice-font-1024-768");
    middle.classList.add("middle-1024-768");
    footer.classList.add("footer-1024-768");
    footer_text_1.classList.add("footer-text-1-1024-768");
    footer_phone.classList.add("footer-phone-1024-768");
  } else {
    bulb.classList.remove("bulb-1024-768");
    logo.classList.remove("logo-image-1024-768");
    notice_font.classList.remove("notice-font-1024-768");
    middle.classList.remove("middle-1024-768");
    footer.classList.remove("footer-1024-768");
    footer_text_1.classList.remove("footer-text-1-1024-768");
    footer_phone.classList.remove("footer-phone-1024-768");
  }

  //   -------------------------------------------------------End - tablet (1024 x 768) javascript classlist add from css file (orientation change)
});
