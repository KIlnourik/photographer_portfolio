const reviews = Array.from(document.querySelectorAll('.reviews__item'));
const showMoreBtn = document.querySelector('.reviews__more');
const REVIEW_PER_PAGE = 4;
let res = 0;

const toggleReviews = () => {
  res += REVIEW_PER_PAGE;
  reviews.forEach((el, ind) => {
    el.style.display = ind >= res ? 'none' : '';
  });
};

showMoreBtn.addEventListener('click', () => {
  toggleReviews();
  if (reviews.length > REVIEW_PER_PAGE) {
    reviews.slice(0, REVIEW_PER_PAGE - 1);
    showMoreBtn.style.display = 'none';
  }
});

if (reviews.length <= REVIEW_PER_PAGE) {
  showMoreBtn.style.display = 'none';
}


toggleReviews();
