document.getElementById('checkNextButton').addEventListener('click', checkNext);
document.getElementById('uncheckLastButton').addEventListener('click', uncheckLast);

refreshProgress();
function checkNext() {
  let
      nextElement=document.querySelectorAll('.progress_inner__step')[document.querySelectorAll('.progress_inner__step.complete').length];
  if (nextElement!=null){
    nextElement.classList.remove('next');
    nextElement.classList.add('complete');
  }

  refreshProgress();
}
function uncheckLast() {
  let
      previousElement=document.querySelectorAll('.progress_inner__step')[document.querySelectorAll('.progress_inner__step.complete').length-1],
      nextElement=document.querySelectorAll('.progress_inner__step')[document.querySelectorAll('.progress_inner__step.complete').length];
  if (previousElement!=null){
    previousElement.classList.remove('complete');
  }
  if (nextElement!=null){
    nextElement.classList.remove('next');
  }
  refreshProgress();
}

function refreshProgress() {
  let
      bar = document.querySelector('.progress_inner__bar'),
      lastCompletedStepIndex = document.querySelectorAll('.progress_inner__step.complete').length - 1,
      numberOfSteps = document.querySelectorAll('.progress_inner__step').length,
      nextElement=document.querySelectorAll('.progress_inner__step')[lastCompletedStepIndex+1];
      if (nextElement!=null)
        nextElement.classList.add('next');

      bar.style.width = `${1 / numberOfSteps * (lastCompletedStepIndex)*100}%`;
}

