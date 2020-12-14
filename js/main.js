const toggleButtonElement = document.querySelector("#nav-toggle");
const navElement = document.querySelector("#nav__list");
const leftArrowElement = document.querySelector("#left-arrow");
const rightArrowElement = document.querySelector("#right-arrow");
const membersList = document.querySelectorAll('.members-slider__item');
const leftEventsArrowElement = document.querySelector("#events-left-arrow");
const rightEventsArrowElement = document.querySelector("#events-right-arrow");
const eventsList = document.querySelectorAll(".event__item");
/*==================== SHOW MENU ====================*/
toggleButtonElement.addEventListener("click", () => {
    navElement.classList.toggle("show-menu");
});

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  navElement.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== CHANGE ACTIVE MEMBER ====================*/
rightArrowElement.addEventListener('click', () => {
  for (let memberIndex = 0; memberIndex < membersList.length; memberIndex++) {
    if (membersList[memberIndex].classList.contains('active-member')) {
      membersList[memberIndex].classList.remove('active-member');
      let newActiveMemberIndex = (memberIndex + 1 ) % membersList.length;
      membersList[newActiveMemberIndex].classList.add('active-member');
      console.log(membersList[newActiveMemberIndex]);
      break;
    }
  }
});

leftArrowElement.addEventListener('click', () => {
  for (let memberIndex = 0; memberIndex < membersList.length; memberIndex++) {
    if (membersList[memberIndex].classList.contains('active-member')) {
      membersList[memberIndex].classList.remove('active-member');
      let newActiveMemberIndex = memberIndex - 1;
      if (newActiveMemberIndex < 0) {
        newActiveMemberIndex = membersList.length -1;
      }
      membersList[newActiveMemberIndex].classList.add('active-member');
      console.log(membersList[newActiveMemberIndex]);
      break;
    }
  }
}); 

/*==================== change active event ====================*/
rightEventsArrowElement.addEventListener('click', () => {
  for (let eventIndex = 0; eventIndex < eventsList.length; eventIndex++) {
    if (eventsList[eventIndex].classList.contains('current__event')) {
      eventsList[eventIndex].classList.remove('current__event');
      let newActiveEventIndex = (eventIndex + 1 ) % eventsList.length;
      eventsList[newActiveEventIndex].classList.add('current__event');
      console.log(eventsList[newActiveEventIndex]);
      break;
    }
  }
});

leftArrowElement.addEventListener('click', () => {
  for (let memberIndex = 0; memberIndex < eventsList.length; memberIndex++) {
    if (eventsList[memberIndex].classList.contains('current__event')) {
      eventsList[memberIndex].classList.remove('current__event');
      let newActiveMemberIndex = memberIndex - 1;
      if (newActiveMemberIndex < 0) {
        newActiveMemberIndex = eventsList.length -1;
      }
      eventsList[newActiveMemberIndex].classList.add('current__event');
      console.log(eventsList[newActiveMemberIndex]);
      break;
    }
  }
}); 