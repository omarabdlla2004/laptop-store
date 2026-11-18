// document.querySelectorAll(".buy-btn").forEach(button => {
//     button.addEventListener("click", () => {
//         alert("Thank you for your purchase! Your order has been placed.");
//     });
// });
// document.addEventListener("DOMContentLoaded", () => {
//     document.querySelectorAll(".buy-btn").forEach(button => {
//         button.addEventListener("click",()=>{alert("thanks for your intrest ! this is just a demo - purchase not available yet");
//         });
//     });
// });
document.addEventListener("DOMContentLoaded", () => {
  console.log("script loaded — DOM ready");
  const buttons = document.querySelectorAll(".buy-btn");
  console.log("buy buttons found:", buttons.length);

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Thanks — demo purchase (not real).");
    });
  });
});
