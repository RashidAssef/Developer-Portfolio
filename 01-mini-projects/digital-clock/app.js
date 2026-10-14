const bar = document.getElementById("bar")


setInterval(() => {
    const time = new Date()
    bar.innerHTML = time.toLocaleTimeString()
}, 1000)

// bar.innerHTML = time.toLocaleString