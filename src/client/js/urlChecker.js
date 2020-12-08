function checkForUrl(url) {
    // console.log("::: Running checkForUrl :::", url);
    const valid_format = /^(ftp|http|https):\/\/[^ "]+$/;

    if (valid_format.test(url)){
        return true
    }else{
        return false
    }
}

export { checkForUrl }
