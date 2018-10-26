function autocorrect(input){
  return input.replace(/\b(youu*|u)\b/g, "your client");
}

const email = "We have sent derivables to you. Our team is excited to finish this with you. Watch our youtube channel"
console.log(autocorrect(email));