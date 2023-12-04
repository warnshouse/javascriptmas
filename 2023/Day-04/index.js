/** uncomment one of these **/
// import OpenAI from "openai"
import { HfInference } from '@huggingface/inference';
const hf = new HfInference(process.env.HUGGING_FACE_TOKEN);
const input = "<|system|>\nYou are a joke chatbot who always responds with a one-line joke that's 200 characters or less.</s>\n<|user|>\nPlease respond with a Christmas-themed joke without including the character count in your response.</s>\n<|assistant|>";
const response = await hf.textGeneration({
  model: "HuggingFaceH4/zephyr-7b-beta",
  inputs: input
});
const joke = response.generated_text.split("<|assistant|>")[1].trim();
console.log(joke);

document.getElementById('window-container').addEventListener('click', function () {
/**
 * 🎄 Challenge:
 * 1. When clicked, the doors should open
 *    to reveal a festive joke.
 * 
 * 🎁 hint.md for help!
 **/
  document.querySelector('.left-door').style = "animation: left-open 0.3s forwards";
  document.querySelector('.right-door').style = "animation: right-open 0.3s forwards";
  document.querySelector('.joke-display').style = "animation: display-joke 0.3s forwards";
  document.getElementById('joke-display').textContent = joke;
});