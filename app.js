const gameBoard = (function() {

    const player1 = {
        mark: 'green',
        gridsMarked: []
    };

    const player2 = {
        mark: `red`,
        gridsMarked: []
    };

    const boardElement = document.querySelector(`.boardContainer`)

    document.addEventListener(`click`, (e)=> {
        if (e.target.innerText === '') {
            markBoard(e.target.id);
            tallyMarks(e.target.id)
            checkForWinner(playersTurn)
            changePlayerTurn(playersTurn)
        }
    })

    let playersTurn = player1;


    const boardGrid = [`one`, `two`, `three`, `four`, `five`, `six`, `seven`, `eight`, `nine`, ];

    const changePlayerTurn = (player) => {
        if (playersTurn === player1) playersTurn = player2
        else playersTurn = player1;
    } 

    const markBoard = (gridLocation) => {
        let box = document.querySelector(`#${gridLocation}`)
        console.log(box);
        box.style.background = `${playersTurn.mark}`
    }

    const tallyMarks = (mark) => {
        playersTurn.gridsMarked.push(`${mark}`)
    }

    const checkForWinner = (player) => {
        let markTally = player.gridsMarked;
        console.log(markTally)

        setTimeout (()=> {

            if (markTally.includes(boardGrid[0]) && markTally.includes(boardGrid[1]) && markTally.includes(boardGrid[2]) ||
            markTally.includes(boardGrid[3]) && markTally.includes(boardGrid[4]) && markTally.includes(boardGrid[5]) ||
            markTally.includes(boardGrid[6]) && markTally.includes(boardGrid[7]) && markTally.includes(boardGrid[8]) ||
            markTally.includes(boardGrid[0]) && markTally.includes(boardGrid[3]) && markTally.includes(boardGrid[6]) ||
            markTally.includes(boardGrid[1]) && markTally.includes(boardGrid[4]) && markTally.includes(boardGrid[7]) ||
            markTally.includes(boardGrid[2]) && markTally.includes(boardGrid[5]) && markTally.includes(boardGrid[8]) ||
            markTally.includes(boardGrid[0]) && markTally.includes(boardGrid[4]) && markTally.includes(boardGrid[8]) ||
            markTally.includes(boardGrid[2]) && markTally.includes(boardGrid[4]) && markTally.includes(boardGrid[6])
            ) {
                alert(`Player ${player.mark} is the winner!`)
                changePlayerTurn(player2)
                resetGame()
            }

        }, 50)

    }

    const resetGame = () => {
        player1.gridsMarked = []
        player2.gridsMarked = []
        clearBoard()
    }

    const clearBoard = () => {
        console.log(boardElement)
        boardElement.childNodes.forEach(el => {
            if (el.nodeName !== `#text`) {
                el.childNodes.forEach((childEl)=> {
                    if ((childEl.nodeName !== `#text`)) childEl.style.background = '';
                }) 
                    
            }
        })
    }

    return { changePlayerTurn }

})();
