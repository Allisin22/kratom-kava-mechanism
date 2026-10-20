const stepButtons = document.querySelectorAll(".step-button");

const compensation = document.querySelector(".compensation");
const rebound = document.querySelector(".rebound");
const opioidSignal = document.querySelector(".opioid-signal");
const mechanismDisplay = document.querySelector(".mechanism-display");

const stepTitle = document.querySelector("#step-title");
const stepText = document.querySelector("#step-text");

const internalSignal = document.querySelector(".internal-signal");

stepButtons.forEach(function (button) {

  button.addEventListener("click", function () {

    const step = button.dataset.step;

    mechanismDisplay.classList.remove(
      "step-1",
      "step-2",
      "step-3"
    );

    mechanismDisplay.classList.add("step-" + step);

    // Remove the active class from every button
    stepButtons.forEach(function (button) {
      button.classList.remove("active");
    });


    // Add active to the button that was clicked
    button.classList.add("active");


    // Reset the SVG before deciding what this step should show
    compensation.classList.remove("visible");
    rebound.classList.remove("visible");
    opioidSignal.classList.remove("hidden");
    internalSignal.classList.remove("hidden");


    if (step === "1") {

      stepTitle.textContent = "The signal arrives";

      stepText.textContent =
        "Mu-opioid receptor activation can reduce activity in a cellular signaling pathway involving cAMP.";

    } else if (step === "2") {

      compensation.classList.add("visible");

      stepTitle.textContent = "The cell pushes back";

      stepText.textContent =
        "With repeated exposure, the cell can increase activity in the same pathway being suppressed. The opposing effects can make the system appear closer to its earlier state.";

    } else if (step === "3") {

      opioidSignal.classList.add("hidden");
      internalSignal.classList.add("hidden");

      compensation.classList.add("visible");
      rebound.classList.add("visible");

      stepTitle.textContent = "The signal disappears";

      stepText.textContent =
        "The opioid signal is gone, but the cell's compensatory change remains for a time. Without the signal it was opposing, cAMP activity can rebound above its earlier range.";
    }

  });

});