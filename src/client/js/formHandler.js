import {checkForUrl} from "./urlChecker"

function checkConfidence(confidenceLevel){
        if(confidenceLevel>50){
            return "confident";
        }else{
            return "not confident"
        }
}

function handleSubmit(event) {
    event.preventDefault()

    let url = document.getElementById('url').value;

    if(Client.checkForUrl(url)){

        console.log("::: Form Submitted :::")

        let result = document.getElementById('result');

        result.textContent = "loading..";

        fetch('http://localhost:8085/get',{
            method:"POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({'key':url})

        })
        .then(res => res.json())
        .then(function(res){
            console.log("handleSubmit" + JSON.stringify(res))
        
            var text = `
                Model: ${res.model}  
                Score: ${res.score_tag}  
                Irony: ${res.irony} 
                Confidence: ${checkConfidence(res.confidence)}
            `;

            result.innerText = text;
        })

    }else{
        console.log('not valid url')
        result.textContent = "error: not a valid url";
    }

}

export { handleSubmit }
export {checkConfidence}
