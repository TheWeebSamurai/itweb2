function redirect(id, url) {
    let test = document.getElementById(id)

test.addEventListener('click', (clicker) => {
    console.log('Button clicked')
    console.log(clicker.target)
    window.location.href = url
})
}