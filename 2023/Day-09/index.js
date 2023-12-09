/** uncomment one of these **/
// import OpenAI from "openai"
import { HfInference } from '@huggingface/inference';
const hf = new HfInference(process.env.HUGGING_FACE_TOKEN);

const dialogModal = document.getElementById('dialog-modal');
const imageContainer = document.getElementById('image-container');
let input = "A winter scene";

async function getImage(input) {
  dialogModal.style.visibility = "hidden";
  input = document.getElementById("user-input").value || input;
 
  const response = await hf.textToImage({
    model: "stabilityai/stable-diffusion-2",
    inputs: input
  });
  
  async function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }
  
  const imageUrl = await blobToBase64(response);
  document.getElementById('image').src = imageUrl;  
}

/** show dialog on load **/
dialogModal.show();

document.getElementById('send').onclick = function () {
  getImage(input);
};


/**
 * 🎄 Challenge:
 * 1. When a user hits submit, dialogModal 
 *    should be hidden.
 * 2. Use the inputted text to generate an image 
 *    for the e-card using an AI model. 
 *    ⚠️ Make sure the image is square.
 * 3. Render the image to imageContainer.
 * 
 * 🎁 hint.md for help!
 **/