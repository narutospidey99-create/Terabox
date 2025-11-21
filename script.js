async function bypass() {
    let link = document.getElementById("url").value;
    let r = document.getElementById("result");

    r.innerHTML = "Processing...";

    // Example only
    // Real bypass code you will give me next
    setTimeout(() => {
        r.innerHTML = "Final URL: " + link;
    }, 2000);
}
