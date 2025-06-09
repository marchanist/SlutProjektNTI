document.addEventListener("DOMContentLoaded", () => {
  // Fade animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  document.querySelectorAll('.container .fadedown').forEach(el => {
    observer.observe(el);
  });
});

document.querySelector('.submit').addEventListener('click', function () {
  const bgColor = document.getElementById('bgColor').value;
  const textColor = document.getElementById('textColor').value;
  const bgBoxColor = document.getElementById('bgboxColor').value;
  const fontChoiceH1 = document.getElementById('fontChoiceH1').value;
  const fontChoiceP = document.getElementById('fontChoiceP').value;
  const h1Size = document.getElementById('textSize').value;
  const pSize = document.getElementById('PtextSize').value;

  // Update body background and text color
  document.body.style.backgroundColor = bgColor;
  document.body.style.color = textColor;

  // Update h1
  document.querySelectorAll('.container h1').forEach(el => {
    el.style.backgroundColor = bgBoxColor;
    el.style.fontFamily = fontChoiceH1;
    el.style.fontSize = h1Size + 'px';
    el.style.color = textColor;
  });

  // Update p
  document.querySelectorAll('.container p').forEach(el => {
    el.style.backgroundColor = bgBoxColor;
    el.style.fontFamily = fontChoiceP;
    el.style.fontSize = pSize + 'px';
    el.style.color = textColor;
  });

  // Keep save/revert button colors fixed
  document.querySelector('.submit').style.color = 'black';
  document.querySelector('.revert').style.color = 'black';
});

document.querySelector('.revert').addEventListener('click', function () {
  document.getElementById('bgColor').value = "#121214";
  document.getElementById('textColor').value = "#ffffff";
  document.getElementById('bgboxColor').value = "#121214";
  document.getElementById('fontChoiceH1').value = "'Archivo Black', sans-serif";
  document.getElementById('fontChoiceP').value = "'Archivo Black', sans-serif";
  document.getElementById('textSize').value = "52";
  document.getElementById('PtextSize').value = "16";

  document.body.style.backgroundColor = "#121214";
  document.body.style.color = "#ffffff";

  // Reset h1
  document.querySelectorAll('.container h1').forEach(el => {
    el.style.backgroundColor = "transparent";
    el.style.fontFamily = "'Archivo Black', sans-serif";
    el.style.fontSize = "52px";
    el.style.color = "#ffffff";
  });

  // Reset p
  document.querySelectorAll('.container p').forEach(el => {
    el.style.backgroundColor = "transparent";
    el.style.fontFamily = "'Archivo Black', sans-serif";
    el.style.fontSize = "16px";
    el.style.color = "#ffffff";
  });

  // Fix save/revert button colors
  document.querySelector('.submit').style.color = 'black';
  document.querySelector('.revert').style.color = 'black';

  localStorage.removeItem("cssSettings");
});
