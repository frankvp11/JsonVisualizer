<script>
	import { JSONEditor } from 'svelte-jsoneditor';
	import IMG from "$lib/images/github.svg";
	let file;
	let text;
    let content = {
        text: undefined, // can be used to pass a stringified JSON document instead
        json: {
        
        }
    }
  
	function handleFileChange(event) {
		file = event.target.files[0];
        readFile()
	}

	async function readFile() {
		if (file) {
			text = await file.text();
            let temp = JSON.parse(text)
			content = {text: undefined, json:{temp}}
            
		}
	}
    function downloadJSON() {
		// 1. Generate a random file name
		const fileName = `file_${Math.random().toString(36).substring(2, 10)}.json`;

		// 2. Convert the JSON object into a string and create a Blob
		const blob = new Blob([JSON.stringify(content.json['temp'])], { type: 'application/json' });

		// 3. Create a URL for the Blob
		const blobURL = URL.createObjectURL(blob);

		// Create a temporary anchor element and click it to start the download
		const a = document.createElement('a');
		a.style.display = 'none';
		a.href = blobURL;
		a.download = fileName;

		document.body.appendChild(a);
		a.click();

		// Clean up
		document.body.removeChild(a);
		URL.revokeObjectURL(blobURL);
	}
 

</script>

<div class="outside-container">

    <div class="image-upload">
        <label for="file-input">
          <!-- <img src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/128/Downloads-icon.png" alt="hi"/> -->
            <i class="fa fa-upload"> Upload</i>
        </label>
      
        <input id="file-input" type="file" bind:files={file} on:change={handleFileChange} class="file_input" />
<!-- 
        <button on:click={downloadJSON} class="file-downloader" id="">
            <i class="fa fa-file-download"></i>
        </button> -->
        <button  on:click={downloadJSON} class="file-downloader">
            <i class="fa fa-download"></i> Download
        </button>

  
    </div>

    
    <div class="json-editor">
        <div>
            <JSONEditor bind:content />
        </div>
    </div>
    
</div>

<style>
    .json-editor{
        width: 50%;
    }
.outside-container {
	width: 100%;
    padding: 10%;
    
}
.file-downloader{
    /* display: none; */
    padding: 0;
    border: none;
    background: none;
    font-size: 5vmin;
}
.fa-upload {
    color: rgb(0, 0, 0);
    font-size: 5vmin;
}
.file_input { 
    display: None;
}
</style>
