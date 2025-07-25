const questionBlocks = document.querySelectorAll('.question-block');

questionBlocks.forEach((block, index) => {

    const answer = block.nextElementSibling;

    block.addEventListener("click", () =>{
       
    toggleAnswer(block, answer); 
    })

    block.addEventListener("keydown", (event)=>{
        if(event.key === 'Enter' || event.key === ' '){
            event.preventDefault();
            toggleAnswer(block, answer);
        }
        else if(event.key == 'ArrowDown'){
            event.preventDefault();
            if(index < questionBlocks.length-1){
                questionBlocks[index + 1].focus();
            }
        }
         else if(event.key == 'ArrowUp'){
            event.preventDefault();
            if(index > 0){
                questionBlocks[index - 1].focus();
            }
        }
    })
});

function toggleAnswer(block, answer){
    answer.classList.toggle("visible");

        const icon = block.querySelector("img");
        if(answer.classList.contains("visible")){
            icon.src = "./assets/images/icon-minus.svg";
            block.style.margin = "1rem 0";
        }
        else{
            icon.src = "./assets/images/icon-plus.svg";
            block.style.margin = "2rem 0";
        }
}