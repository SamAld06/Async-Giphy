require('dotenv').config();

// Print out value of API key stored in .env file
const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=EA8RkkKNoqcG7yNK5bKgqeO7cwG7KETz&q=dog&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips"
console.log(process.env.API_KEY)

async function getImage(query) {
    try{
        const response = await fetch("https://api.giphy.com/v1/gifs/search?api_key=EA8RkkKNoqcG7yNK5bKgqeO7cwG7KETz&q=dog&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips")
        const data = await response.json()
        const images = data.data
        const image = images.filter(image => image.title.toLowerCase().includes(query.toLowerCase()))

        const randomIndex = Math.floor(Math.random() * image.length)
        const randomImage = image[randomIndex]

        return randomImage
    }
    catch (err) {
        console.log("error")
    }
}

async function helperFunction() {
    const allImages = []
    allImages.push(image)
    await getImage("dog");
    return allImages
}
const query = "dog"
getImage(query).then(image => console.log(image))