let inputTextArea = document.getElementById("inputText")

let tweetOutput = document.getElementById("tweetOutput")

let postOutput = document.getElementById("postOutput")

let comboOutput = document.getElementById("comboOutput")

const formatText = () => {
    tweetOutput.innerHTML = inputTextArea.value
    tweetOutput.style.color = "blue"
    postOutput.innerHTML = inputTextArea.value
    postOutput.style.color = "red"
    comboOutput.innerHTML = `${tweetOutput.textContent} & ${postOutput.textContent}`
}