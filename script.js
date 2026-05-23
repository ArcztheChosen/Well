function showStep(id) {
  const steps = document.querySelectorAll('.step');

  steps.forEach(s => {
    s.style.display = 'none';
  });

  const target = document.getElementById(id);
  if (target) {
    target.style.display = 'block';
  }

  clearInputs();
}


function clearInputs() {
  const inputs = document.querySelectorAll('input');

  inputs.forEach(input => {
    input.value = '';
  });
}

function checkName() {
  const name = document
    .getElementById('nameInput')
    .value
    .trim()
    .toLowerCase();

  if (name.includes('justine')) {
    showStep('step2');
  } else {
    showMemeLoop('step1');
  }
}


function checkCreator() {
  const creator = document
    .getElementById('creatorName')
    .value
    .trim()
    .toLowerCase();

  if (creator === 'jhon mark') {
    showStep('success');
  } else {
    showMemeLoop('step4');
  }
}

function showMemeLoop(returnStep) {
  showStep('memePage');

  const sound = document.getElementById('memeSound');
  if (sound) {
    sound.currentTime = 0;
    sound.play().catch(() => {});
  }

  setTimeout(() => {
    showStep(returnStep);
  }, 2500);
}

/* fallback */
function showMeme() {
  showMemeLoop('step4');
}


function goFlowers() {
  window.location.href = "flowers.html";
}