const myVM = (() => {

    let pieceButtons = document.querySelectorAll('.pieceLink'),
        lightBox = document.querySelector('.lightBox');
        shadow = document.querySelector('.shadow');

    function parsePieceData(piece) {
        let targetImg = lightBox.querySelector('.pieceImage'),
            targetBody = lightBox.querySelector('.pieceInfo'),
            targetMore = lightBox.querySelector('.pieceSoftware');
            targetLink = lightBox.querySelector('.moreLink');

        let bodyContent = `
            <h2 class="pieceTitle">${piece.title}</h2>
            <h3 class="pieceCategory">${piece.category}</h3>
            <hr>
            <p class="pieceDescription">${piece.info}</p>
        `;

        targetImg.src = `
            images/${piece.image}
        `;

        targetImg.alt = `
            ${piece.title}
        `;
        
        targetBody.innerHTML = bodyContent; 

        var software = piece.software.split(", ");
        var icons = "";
        
        for (i = 0;i < software.length; i++) {
            icons+=`
                <li><img class="softwareIcon" src="images/${software[i]}"></li>
            `;
        }

        targetMore.innerHTML = icons;

        targetLink.href = `
            /${piece.div_id}
        `;

        lightBox.classList.add('show-lb');
        shadow.classList.add('show-shadow');
    }

    function getPieceData(event) {
        event.preventDefault();

        let url = `/${this.getAttribute('href')}`

        fetch(url)
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                parsePieceData(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    pieceButtons.forEach(button => button.addEventListener("click", getPieceData));

    lightBox.querySelector('#close').addEventListener("click", function() {
        lightBox.classList.remove('show-lb');
        shadow.classList.remove('show-shadow');
    });
})();

function toggle() {
    document.getElementById("nav-toggler").classList.toggle("fa-times");
    document.getElementById("nav-toggler").classList.toggle("fa-bars");
    document.getElementById("sidebar").classList.toggle("active");
}

var openMenu = document.getElementById('nav-toggler');
openMenu.addEventListener("click", toggle);