const ImageKit = require('@imagekit/nodejs')

const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function getURI(file){
    const response = await client.files.upload({
        file,
        folder : "imagesFullStack",
        fileName: 'image.jpg',
    });
    return response.url
}

module.exports = getURI