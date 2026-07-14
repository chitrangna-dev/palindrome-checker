function checkPalindrome() {

    let text = document.getElementById("text").value.trim();

    let result = document.getElementById("result");

    if(text === ""){
        result.innerHTML = "⚠ Please enter a word!";
        result.style.color = "#ff9800";
        return;
    }

    let original = text.toLowerCase();

    let reverse = original.split("").reverse().join("");

    if(original === reverse){
        result.innerHTML = "✅ It's a Palindrome";
        result.style.color = "#2E7D32";
    }
    else{
        result.innerHTML = "❌ Not a Palindrome";
        result.style.color = "#e53935";
    }

}