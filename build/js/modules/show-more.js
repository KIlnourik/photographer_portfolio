const reviews=Array.from(document.querySelectorAll(".reviews__item")),showMoreBtn=document.querySelector(".reviews__more"),REVIEW_PER_PAGE=4;let res=0;const toggleReviews=()=>{res+=4,reviews.forEach(((e,s)=>{e.style.display=s>=res?"none":""}))};showMoreBtn.addEventListener("click",(()=>{toggleReviews(),reviews.length>4&&(reviews.slice(0,3),showMoreBtn.style.display="none")})),reviews.length<=4&&(showMoreBtn.style.display="none"),toggleReviews();